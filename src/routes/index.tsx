import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  MessageSquare,
  Users,
  BarChart3,
  DollarSign,
  Clock,
  Sparkles,
  Calendar,
  Inbox,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Play,
  Star,
  Instagram,
  Linkedin,
  Youtube,
  ChevronDown,
  Zap,
} from "lucide-react";

import heroMockup from "@/assets/hero-mockup.jpg";
import teamPhoto from "@/assets/team.jpg";
import featureInbox from "@/assets/feature-inbox.jpg";
import featureAi from "@/assets/feature-ai.jpg";
import featureClinicorp from "@/assets/feature-clinicorp.jpg";
import natyLogo from "@/assets/naty-logo.png.asset.json";


import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Landing,
});

const CTA_LABEL = "Quero uma demonstração gratuita";

function CTAButton({
  className = "",
  size = "lg",
  href = "#cta-final",
  children = CTA_LABEL,
}: {
  className?: string;
  size?: "sm" | "lg";
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={
        "group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--cta)] font-semibold text-[var(--cta-foreground)] shadow-[0_10px_30px_-8px_color-mix(in_oklab,var(--cta)_55%,transparent)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-10px_color-mix(in_oklab,var(--cta)_65%,transparent)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--cta)]/40 " +
        (size === "lg" ? "px-7 py-4 text-base" : "px-5 py-2.5 text-sm ") +
        " " +
        className
      }
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/10 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink)]/70 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--cta)]" />
      {children}
    </span>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--ink)]/5 bg-[var(--cream)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center" aria-label="Naty Clinic">
          <img src={natyLogo.url} alt="Naty Clinic" className="h-9 w-auto sm:h-10" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--ink)]/75 md:flex">
          <a href="#solucao" className="hover:text-[var(--ink)]">Solução</a>
          <a href="#calculadora" className="hover:text-[var(--ink)]">Calculadora</a>
          <a href="#depoimentos" className="hover:text-[var(--ink)]">Clientes</a>
          <a href="#faq" className="hover:text-[var(--ink)]">FAQ</a>
        </nav>
        <CTAButton size="sm" className="hidden sm:inline-flex">{CTA_LABEL}</CTAButton>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 500px at 80% -10%, color-mix(in oklab, var(--mint) 35%, transparent), transparent 60%), radial-gradient(900px 400px at 0% 0%, color-mix(in oklab, var(--cta) 15%, transparent), transparent 60%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-2 md:gap-12 md:pb-24 md:pt-16">
        <div className="flex flex-col justify-center">
          <SectionTag>Integração oficial Clinicorp</SectionTag>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
            Sua clínica está perdendo pacientes no WhatsApp.{" "}
            <span className="relative inline-block">
              <span className="relative z-10">A Naty resolve isso em 7 dias.</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-sm"
                style={{ background: "color-mix(in oklab, var(--cta) 35%, transparent)" }}
              />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--ink)]/70">
            Plataforma com IA que responde, qualifica e agenda pacientes 24 horas por dia —
            integrada ao Clinicorp e feita para clínicas odontológicas e de estética.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTAButton>{CTA_LABEL}</CTAButton>
            <a
              href="#demo-video"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)]/80 underline-offset-4 hover:underline"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--ink)] text-[var(--ink-foreground)]">
                <Play className="h-3.5 w-3.5 fill-current" />
              </span>
              Ver como funciona em 2 minutos
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--ink)]/10 pt-6 text-sm text-[var(--ink)]/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[var(--cta)]" />
              <span className="font-semibold text-[var(--ink)]">Integração oficial Clinicorp</span>
            </div>
            <div className="flex -space-x-2">
              {["#1f3a5f", "#2b6ca6", "#0e7c66", "#a34d2b", "#3a2b6c"].map((c) => (
                <span
                  key={c}
                  className="grid h-8 w-8 place-items-center rounded-full border-2 border-[var(--cream)] text-[10px] font-bold text-white"
                  style={{ backgroundColor: c }}
                >
                  {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
                </span>
              ))}
            </div>
            <span className="font-medium">+240 clínicas já usam a Naty</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-[var(--mint)]/40 via-transparent to-[var(--cta)]/20 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-[var(--ink)]/10 bg-white shadow-[0_40px_80px_-30px_color-mix(in_oklab,var(--ink)_35%,transparent)]">
            <img
              src={heroMockup}
              alt="Naty rodando em notebook e celular — caixa de entrada unificada"
              width={1600}
              height={1104}
              className="h-auto w-full"
            />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 left-4 hidden items-center gap-3 rounded-xl border border-[var(--ink)]/10 bg-white p-3 shadow-xl sm:flex">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--mint)]/30 text-[var(--ink)]">
              <Zap className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs text-[var(--ink)]/60">Resposta média</div>
              <div className="text-sm font-bold">em 12 segundos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Social proof strip */}
      <div className="border-y border-[var(--ink)]/10 bg-white/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-4 py-6 text-[var(--ink)]/50 sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            Clínicas que confiam na Naty
          </span>
          {["SorrisoLab", "OdontoPrime", "EstéticaPlus", "ClinicaBem", "SmileHub", "Bella Face"].map(
            (n) => (
              <span key={n} className="text-lg font-bold tracking-tight opacity-70">
                {n}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAIN ---------------- */
function PainSection() {
  const pains = [
    { icon: Clock, text: "Leads chegam de madrugada e são respondidos no dia seguinte" },
    { icon: Users, text: "Três atendentes usando o mesmo número e se atropelando" },
    { icon: BarChart3, text: "Você investe em tráfego pago mas não sabe quantos leads viraram consulta" },
    { icon: DollarSign, text: "Paciente pergunta o preço, ninguém volta, ele vai na concorrência" },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <SectionTag>A dor</SectionTag>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Reconhece alguma dessas situações?
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {pains.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="group flex items-start gap-4 rounded-2xl border border-[var(--ink)]/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[var(--cta)]/40 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--ink)] text-[var(--ink-foreground)]">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-lg font-semibold leading-snug text-[var(--ink)]">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-xl font-bold text-[var(--ink)] sm:text-2xl">
          Isso não é falha da sua equipe.{" "}
          <span className="text-[var(--cta)]">É falha de estrutura.</span>
        </p>
      </div>
    </section>
  );
}

/* ---------------- CALCULATOR ---------------- */
function Calculator() {
  const [leads, setLeads] = useState(200);
  const [ticket, setTicket] = useState(1500);
  const [conv, setConv] = useState(15);

  const lost = useMemo(() => {
    // Assume Naty raises conversion to at least 40%; the "gap" is what they're leaving on the table.
    const target = Math.max(conv, 40);
    const gap = target - conv;
    return Math.round((leads * (gap / 100)) * ticket);
  }, [leads, ticket, conv]);

  const fmt = (n: number) =>
    n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  return (
    <section id="calculadora" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-[var(--ink)] text-[var(--ink-foreground)] shadow-[var(--shadow-elegant)]">
          <div className="grid gap-10 p-8 md:grid-cols-[1.1fr_1fr] md:p-14">
            <div>
              <SectionTag>
                <span className="text-[var(--ink)]/80">Calculadora</span>
              </SectionTag>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                Faça as contas do que sua clínica está deixando na mesa.
              </h2>

              <div className="mt-10 space-y-8">
                <div>
                  <div className="mb-3 flex items-baseline justify-between">
                    <Label className="text-sm font-medium text-white/70">
                      Leads recebidos por mês
                    </Label>
                    <span className="text-lg font-bold">{leads}</span>
                  </div>
                  <Slider
                    value={[leads]}
                    min={20}
                    max={2000}
                    step={10}
                    onValueChange={(v) => setLeads(v[0])}
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-white/70">
                    Ticket médio de um paciente novo
                  </Label>
                  <div className="mt-2 flex items-center rounded-lg border border-white/15 bg-white/5 px-3">
                    <span className="text-white/60">R$</span>
                    <Input
                      type="number"
                      min={100}
                      value={ticket}
                      onChange={(e) => setTicket(Number(e.target.value) || 0)}
                      className="border-0 bg-transparent text-lg font-bold text-white shadow-none focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-baseline justify-between">
                    <Label className="text-sm font-medium text-white/70">
                      Taxa de conversão atual
                    </Label>
                    <span className="text-lg font-bold">{conv}%</span>
                  </div>
                  <Slider
                    value={[conv]}
                    min={1}
                    max={60}
                    step={1}
                    onValueChange={(v) => setConv(v[0])}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <span className="text-sm font-medium uppercase tracking-widest text-white/60">
                Você está deixando de faturar
              </span>
              <div
                className="mt-3 bg-clip-text text-5xl font-extrabold leading-none tracking-tight text-transparent sm:text-6xl"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--cta), color-mix(in oklab, var(--mint) 80%, white))",
                }}
              >
                {fmt(lost)}
              </div>
              <span className="mt-2 text-lg text-white/70">por mês.</span>
              <p className="mt-6 text-sm text-white/60">
                Estimativa comparada com clínicas rodando com a Naty (conversão média de 40%+).
              </p>
              <CTAButton className="mt-8 self-start">Quero recuperar esse valor</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOLUTION ---------------- */
function Solution() {
  const blocks = [
    {
      icon: Inbox,
      tag: "Caixa de entrada unificada",
      title: "Todas as conversas em um só lugar.",
      body: "Todos os atendentes vendo tudo. Nada mais se perde no meio das mensagens. Tags, filas, respostas rápidas e histórico completo por paciente.",
      img: featureInbox,
    },
    {
      icon: Sparkles,
      tag: "IA que agenda enquanto você dorme",
      title: "Responde em segundos. Agenda sozinha.",
      body: "Nossa IA responde em segundos, qualifica o paciente e agenda a consulta — inclusive às 3h da manhã, no domingo, no feriado. Handoff automático pro humano quando necessário.",
      img: featureAi,
    },
    {
      icon: Calendar,
      tag: "Integração nativa com Clinicorp",
      title: "O agendamento cai direto na sua agenda.",
      body: "Sem digitar. Sem retrabalho. Sem erro. A Naty é integração oficial Clinicorp — o horário confirmado no WhatsApp aparece na sua agenda em tempo real.",
      img: featureClinicorp,
    },
  ];
  return (
    <section id="solucao" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <SectionTag>A solução</SectionTag>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            A Naty é a estrutura que sua clínica precisa.
          </h2>
          <p className="mt-5 text-lg text-[var(--ink)]/70">
            Uma plataforma que centraliza o WhatsApp, responde com IA e organiza o processo de
            agendamento do início ao fim.
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {blocks.map((b, i) => (
            <div
              key={b.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--mint)]/25 px-3 py-1 text-xs font-semibold text-[var(--ink)]">
                  <b.icon className="h-3.5 w-3.5" />
                  {b.tag}
                </div>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[var(--ink)] sm:text-3xl md:text-4xl">
                  {b.title}
                </h3>
                <p className="mt-4 text-lg text-[var(--ink)]/70">{b.body}</p>
                <CTAButton size="sm" className="mt-6">
                  {CTA_LABEL}
                </CTAButton>
              </div>
              <div className="overflow-hidden rounded-2xl border border-[var(--ink)]/10 bg-white shadow-xl">
                <img
                  src={b.img}
                  alt={b.tag}
                  loading="lazy"
                  width={1400}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- VIDEO ---------------- */
function VideoSection() {
  return (
    <section id="demo-video" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <SectionTag>Demonstração</SectionTag>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Veja a Naty rodando em uma clínica real.
          </h2>
        </div>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-3xl border border-[var(--ink)]/10 bg-[var(--ink)]">
          <img
            src={heroMockup}
            alt="Vídeo demonstração Naty"
            loading="lazy"
            className="h-full w-full object-cover opacity-60"
          />
          <button
            className="absolute inset-0 grid place-items-center"
            aria-label="Reproduzir vídeo"
          >
            <span className="grid h-20 w-20 place-items-center rounded-full bg-[var(--cta)] text-[var(--cta-foreground)] shadow-2xl transition-transform hover:scale-105">
              <Play className="h-8 w-8 fill-current" />
            </span>
          </button>
          <div className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            90 segundos
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <CTAButton href="#cta-final">Quero ver isso funcionando na minha clínica</CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const items = [
    {
      name: "Dra. Camila Souza",
      role: "Sócia — OdontoPrime",
      city: "São Paulo, SP",
      quote:
        "Em 3 semanas a agenda encheu. A IA responde de madrugada e no sábado, e eu vejo tudo caindo direto no Clinicorp.",
      highlight: "+42%",
      highlightLabel: "em agendamentos",
    },
    {
      name: "Rafael Nunes",
      role: "Gestor — Clínica Bella Face",
      city: "Curitiba, PR",
      quote:
        "Parei de perder lead na madrugada. A equipe consegue focar no que importa: fechar o paciente que já veio qualificado.",
      highlight: "3x",
      highlightLabel: "mais rápido no primeiro contato",
    },
    {
      name: "Dra. Marina Alves",
      role: "Diretora Clínica — SorrisoLab",
      city: "Belo Horizonte, MG",
      quote:
        "A integração com o Clinicorp é o que faltava. Sem retrabalho. A secretária começou a sobrar tempo pra atendimento presencial.",
      highlight: "-70%",
      highlightLabel: "de tempo em digitação",
    },
    {
      name: "Dr. Paulo Ribeiro",
      role: "Proprietário — EstéticaPlus",
      city: "Recife, PE",
      quote:
        "Investíamos em tráfego às cegas. Hoje sei quanto lead virou consulta, por canal, por dia. Isso muda o jogo.",
      highlight: "+58%",
      highlightLabel: "de ROI em anúncios",
    },
  ];
  return (
    <section id="depoimentos" className="bg-[var(--ink)] py-20 text-[var(--ink-foreground)] sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <SectionTag>
            <span className="text-white">Prova social</span>
          </SectionTag>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Clínicas que já organizaram o WhatsApp com a Naty.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <div>
                <div className="flex items-center gap-1 text-[var(--cta)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-lg leading-snug text-white/90">"{t.quote}"</p>
              </div>
              <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-6">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--mint)]/30 text-sm font-bold text-white">
                      {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                    <div className="min-w-0">
                      <div className="truncate font-bold">{t.name}</div>
                      <div className="truncate text-xs text-white/60">
                        {t.role} — {t.city}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-2xl font-extrabold text-[var(--cta)] sm:text-3xl">
                    {t.highlight}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60">
                    {t.highlightLabel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics band */}
        <div className="mt-14 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 sm:grid-cols-2 md:grid-cols-4">
          {[
            ["+240", "clínicas atendidas"],
            ["+18M", "mensagens processadas"],
            ["+38%", "aumento médio em agendamentos"],
            ["19", "estados atendidos"],
          ].map(([n, l]) => (
            <div key={l} className="text-center md:text-left">
              <div className="text-3xl font-extrabold sm:text-4xl">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    {
      t: "Você agenda uma demonstração gratuita",
      d: "Nosso time entende sua clínica, seu volume e seus desafios.",
    },
    {
      t: "A gente configura tudo pra você",
      d: "Setup completo em até 48h. Você só valida o script da IA.",
    },
    {
      t: "Sua equipe é treinada",
      d: "Treinamento ao vivo com o time e materiais de apoio.",
    },
    {
      t: "Você começa a ver resultado",
      d: "Nos primeiros 30 dias já dá pra medir o impacto no faturamento.",
    },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <SectionTag>Como funciona</SectionTag>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Em 7 dias sua clínica está rodando.
          </h2>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.t}
              className="relative rounded-2xl border border-[var(--ink)]/10 bg-white p-6"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--ink)] font-extrabold text-[var(--ink-foreground)]">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-[var(--ink)]">{s.t}</h3>
              <p className="mt-2 text-sm text-[var(--ink)]/70">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex justify-center">
          <CTAButton>{CTA_LABEL}</CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPARISON ---------------- */
function Comparison() {
  const rows = [
    ["Feito pra clínica", "no", "no", "yes"],
    ["IA que qualifica paciente", "no", "warn", "yes"],
    ["Integração Clinicorp", "no", "no", "yes"],
    ["Setup feito pra você", "no", "no", "yes"],
    ["Suporte humano", "no", "no", "yes"],
    ["Treinamento da equipe", "no", "no", "yes"],
  ] as const;

  const Cell = ({ v }: { v: "yes" | "no" | "warn" }) => {
    if (v === "yes")
      return <CheckCircle2 className="mx-auto h-5 w-5 text-[var(--mint)]" aria-label="Sim" />;
    if (v === "warn")
      return <AlertTriangle className="mx-auto h-5 w-5 text-amber-500" aria-label="Parcial" />;
    return <XCircle className="mx-auto h-5 w-5 text-[var(--ink)]/25" aria-label="Não" />;
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <SectionTag>Diferenciais</SectionTag>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Por que a Naty é diferente.
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--ink)]/10 bg-white">
          <div className="grid grid-cols-4 border-b border-[var(--ink)]/10 bg-[var(--muted)] text-xs font-bold uppercase tracking-wider text-[var(--ink)]/60 sm:text-sm">
            <div className="p-4 sm:p-5"></div>
            <div className="p-4 text-center sm:p-5">Fazer sozinho</div>
            <div className="p-4 text-center sm:p-5">Chatbot genérico</div>
            <div className="bg-[var(--ink)] p-4 text-center text-[var(--ink-foreground)] sm:p-5">
              Naty
            </div>
          </div>
          {rows.map((r, idx) => (
            <div
              key={r[0]}
              className={`grid grid-cols-4 items-center ${
                idx % 2 === 0 ? "bg-white" : "bg-[var(--muted)]/40"
              }`}
            >
              <div className="p-4 text-sm font-semibold text-[var(--ink)] sm:p-5 sm:text-base">
                {r[0]}
              </div>
              <div className="p-4 sm:p-5">
                <Cell v={r[1]} />
              </div>
              <div className="p-4 sm:p-5">
                <Cell v={r[2]} />
              </div>
              <div className="bg-[var(--ink)]/[0.03] p-4 sm:p-5">
                <Cell v={r[3]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "Preciso trocar meu sistema atual?",
      a: "Não. A Naty se conecta ao seu WhatsApp e ao seu sistema de gestão (Clinicorp de forma nativa; outros via integração). Nada muda no seu fluxo interno.",
    },
    {
      q: "Funciona se eu não uso Clinicorp?",
      a: "Sim. A Naty roda perfeitamente sem Clinicorp. Se você usa outro sistema, integramos por API ou operamos com agenda própria dentro da plataforma.",
    },
    {
      q: "Quanto tempo leva pra implementar?",
      a: "Setup completo em até 48h. Em 7 dias sua clínica está com IA respondendo, equipe treinada e agendamentos entrando.",
    },
    {
      q: "A IA substitui minha secretária?",
      a: "Não. Ela cuida do primeiro contato, das perguntas repetitivas e do agendamento — sua equipe passa a focar em fechar tratamento e atender bem quem chega.",
    },
    {
      q: "Meus atendentes precisam saber mexer em tecnologia?",
      a: "Não. A interface é simples como o WhatsApp Web. Nosso treinamento cobre tudo em 1 hora.",
    },
    {
      q: "Funciona pra clínica com mais de uma unidade?",
      a: "Sim. Você gerencia várias unidades no mesmo painel, com filas separadas, permissões e relatórios por unidade.",
    },
    {
      q: "Existe fidelidade?",
      a: "Não há fidelidade. Você pode encerrar quando quiser.",
    },
    {
      q: "E se eu não gostar?",
      a: "Garantia de 7 dias após a contratação. Se não fizer sentido pra sua clínica, devolvemos 100% do investimento.",
    },
  ];
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div>
          <SectionTag>FAQ</SectionTag>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Perguntas que a gente sempre escuta.
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 divide-y divide-[var(--ink)]/10 border-y border-[var(--ink)]/10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-0">
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline sm:text-lg [&>svg]:h-5 [&>svg]:w-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base text-[var(--ink)]/70">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    nicho: "",
    profissionais: "",
    clinicorp: "",
  });
  const [sent, setSent] = useState(false);

  return (
    <section id="cta-final" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 rounded-3xl border border-[var(--ink)]/10 bg-white p-8 shadow-[var(--shadow-elegant)] md:grid-cols-[1.1fr_1fr] md:p-14">
          <div>
            <SectionTag>Última chamada</SectionTag>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Sua clínica pode parar de perder pacientes ainda essa semana.
            </h2>
            <p className="mt-5 text-lg text-[var(--ink)]/70">
              Agenda uma demonstração gratuita de 20 minutos. Nosso time vai te mostrar, com os seus
              números, quanto você está perdendo hoje e como resolver.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-8 space-y-4"
            >
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome completo"
                  className="mt-1.5 h-11"
                />
              </div>
              <div>
                <Label htmlFor="whats">WhatsApp</Label>
                <Input
                  id="whats"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  placeholder="(11) 99999-9999"
                  className="mt-1.5 h-11"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label>Nicho</Label>
                  <Select value={form.nicho} onValueChange={(v) => setForm({ ...form, nicho: v })}>
                    <SelectTrigger className="mt-1.5 h-11">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="odonto">Odontologia</SelectItem>
                      <SelectItem value="estetica">Estética</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="prof">Profissionais que atendem</Label>
                  <Input
                    id="prof"
                    type="number"
                    min={1}
                    value={form.profissionais}
                    onChange={(e) => setForm({ ...form, profissionais: e.target.value })}
                    placeholder="Ex: 4"
                    className="mt-1.5 h-11"
                  />
                </div>
              </div>
              <div>
                <Label>Usa Clinicorp?</Label>
                <Select
                  value={form.clinicorp}
                  onValueChange={(v) => setForm({ ...form, clinicorp: v })}
                >
                  <SelectTrigger className="mt-1.5 h-11">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sim">Sim</SelectItem>
                    <SelectItem value="nao">Não</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--cta)] px-6 py-4 text-base font-semibold text-[var(--cta-foreground)] shadow-lg transition-all hover:-translate-y-0.5"
              >
                {sent ? "Recebemos! Vamos te chamar no WhatsApp." : "Quero minha demonstração gratuita"}
                {!sent && <ArrowRight className="h-4 w-4" />}
              </button>
              <p className="text-center text-xs text-[var(--ink)]/50">
                Vagas de onboarding limitadas por semana.
              </p>
            </form>
          </div>

          <aside className="flex flex-col justify-between rounded-2xl bg-[var(--ink)] p-8 text-[var(--ink-foreground)]">
            <div>
              <h3 className="text-xl font-extrabold sm:text-2xl">O que você recebe na demonstração</h3>
              <ul className="mt-6 space-y-4 text-white/85">
                {[
                  "Análise gratuita do seu processo atual",
                  "Cálculo real do que você está perdendo",
                  "Demonstração ao vivo da plataforma",
                  "Proposta personalizada pro seu porte",
                  "7 dias de garantia se contratar",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--mint)]" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
              <img
                src={teamPhoto}
                alt="Time Naty"
                loading="lazy"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="text-sm">
                <div className="font-semibold">Time Naty</div>
                <div className="text-white/60">Especialistas em clínicas</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-[var(--ink)]/10 bg-white/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <img src={natyLogo.url} alt="Naty Clinic" className="h-10 w-auto" />
          </div>
          <p className="mt-4 max-w-sm text-sm text-[var(--ink)]/60">
            IA que responde, qualifica e agenda pacientes 24h no WhatsApp. Feita para clínicas
            odontológicas e de estética.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/10 bg-white px-3 py-1.5 text-xs font-semibold text-[var(--ink)]/70">
              <ShieldCheck className="h-3.5 w-3.5 text-[var(--mint)]" /> LGPD
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/10 bg-white px-3 py-1.5 text-xs font-semibold text-[var(--ink)]/70">
              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--mint)]" /> Integração oficial Clinicorp
            </span>
          </div>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-[var(--ink)]/50">
            Navegação
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {["Sobre", "Cases", "Blog", "Contato", "Política de privacidade"].map((l) => (
              <li key={l}>
                <a href="#" className="text-[var(--ink)]/75 hover:text-[var(--ink)]">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-[var(--ink)]/50">
            Fale com a Naty
          </div>
          <ul className="mt-4 space-y-2 text-sm text-[var(--ink)]/75">
            <li>WhatsApp de suporte</li>
            <li>ola@naty.app</li>
          </ul>
          <div className="mt-5 flex gap-3 text-[var(--ink)]/60">
            <a href="#" aria-label="Instagram" className="hover:text-[var(--ink)]">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[var(--ink)]">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[var(--ink)]">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--ink)]/10 py-5 text-center text-xs text-[var(--ink)]/50">
        © {new Date().getFullYear()} Naty. Todos os direitos reservados.
      </div>
    </footer>
  );
}

/* ---------------- MOBILE STICKY CTA + WHATSAPP ---------------- */
function StickyCTA() {
  return (
    <>
      <a
        href="#cta-final"
        className="fixed inset-x-3 bottom-3 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--cta)] px-5 py-3.5 text-sm font-semibold text-[var(--cta-foreground)] shadow-2xl sm:hidden"
      >
        {CTA_LABEL}
        <ArrowRight className="h-4 w-4" />
      </a>
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noreferrer"
        aria-label="Fale com a gente no WhatsApp"
        className="fixed bottom-4 right-4 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105 sm:grid"
      >
        <MessageSquare className="h-6 w-6" />
      </a>
    </>
  );
}

function UrgencyBar() {
  return (
    <div className="bg-[var(--ink)] py-2 text-center text-xs font-semibold text-[var(--ink-foreground)] sm:text-sm">
      <span className="inline-flex items-center gap-2">
        <Sparkles className="h-3.5 w-3.5 text-[var(--mint)]" />
        Setup gratuito por tempo limitado —{" "}
        <a href="#cta-final" className="underline underline-offset-4">
          garanta sua vaga
        </a>
        <ChevronDown className="hidden h-3.5 w-3.5 sm:inline" />
      </span>
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      <UrgencyBar />
      <Nav />
      <main>
        <Hero />
        <PainSection />
        <Calculator />
        <Solution />
        <VideoSection />
        <Testimonials />
        <Process />
        <Comparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
