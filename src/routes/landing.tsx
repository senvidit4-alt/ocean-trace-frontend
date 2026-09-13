import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CircleAlert,
  Crosshair,
  Play,
  Radio,
  Search,
  ShieldCheck,
  Ship,
} from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import heroAsset from "@/assets/ocean-trace-hero.jpg.asset.json";
import { OceanTraceMark } from "@/components/ocean-trace-mark";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/landing")({
  head: () => ({
    meta: [
      { title: "Maritime Intelligence — Ocean Trace" },
      { name: "description", content: "Detect marine oil slicks, reconstruct drift, and attribute vessel activity across India's EEZ." },
      { property: "og:title", content: "Ocean Trace Maritime Intelligence" },
      { property: "og:description", content: "Satellite oil-spill detection and vessel attribution for India's oceans." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const quickCases = [
  { label: "Mumbai Offshore", value: "OTX-2026-001", confidence: "94%" },
  { label: "Gujarat Coastal", value: "OTX-2026-014", confidence: "88%" },
  { label: "Bay of Bengal", value: "OTX-2026-027", confidence: "82%" },
];

function LandingPage() {
  const [incident, setIncident] = useState("OTX-2026-001");
  const [simulation, setSimulation] = useState(false);

  return (
    <main className="hero-shell min-h-screen overflow-x-hidden bg-background text-foreground">
      <img className="hero-image" src={heroAsset.url} alt="Ocean surveillance vessel beneath an Earth-observation satellite" width={1920} height={1080} />
      <div className="hero-shade" aria-hidden="true" />
      <div className="ocean-grid" aria-hidden="true" />
      <div className="scan-beam" aria-hidden="true" />

      <header className="relative z-20 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border/70 px-5 py-4 sm:px-8 lg:px-12">
        <div className="flex min-w-0 items-center gap-6">
          <OceanTraceMark />
          <span className="hidden rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-[10px] font-bold uppercase text-primary lg:inline-flex">
            In Bharat EEZ 2.37M km²
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden items-center gap-2 rounded border border-border bg-panel/70 px-4 py-2 font-mono text-[10px] uppercase text-muted-foreground backdrop-blur md:flex">
            <span className="live-dot" /> INCOIS / GFS / AIS Live
          </span>
          <Button asChild variant="hero" size="lg">
            <Link to="/">Sign out <ArrowRight /></Link>
          </Button>
        </div>
      </header>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-82px)] max-w-[1600px] items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-12 xl:gap-16">
        <section className="max-w-3xl animate-rise">
          <div className="mb-5 hidden font-mono text-[10px] uppercase leading-5 text-muted-foreground sm:block">
            <p>POS: 18.924°N 72.152°E · ALT: 693 KM LEO · INC: 98.18°</p>
            <p>SENSOR: SENTINEL-1B C-BAND SAR · POL: VV+VH · SWATH: 250 KM</p>
          </div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 font-mono text-[10px] font-bold uppercase text-primary backdrop-blur">
            <ShieldCheck className="size-3.5" /> AI for secure & clean Bharat
          </div>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.04] sm:text-6xl xl:text-7xl">
            Detect slicks.<br />Reconstruct drift.<br /><span className="text-primary">Protect India&apos;s oceans.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-copy sm:text-lg">
            Real-time Earth-observation intelligence, reverse Lagrangian drift backtracking, and historical AIS trajectory forensics across India&apos;s Exclusive Economic Zone.
          </p>

          <div className="mt-8 max-w-2xl border border-border bg-panel/80 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
            <label htmlFor="incident" className="mb-3 block font-mono text-[10px] font-bold uppercase text-primary">Enter incident ID / vessel MMSI</label>
            <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
              <div className="relative min-w-0">
                <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-primary" />
                <input id="incident" value={incident} onChange={(event) => setIncident(event.target.value)} className="h-12 w-full border border-border bg-field pl-11 pr-4 font-mono text-sm font-semibold text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <Button variant="hero" size="lg" onClick={() => setSimulation(true)}>Analyze incident <ArrowRight /></Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="mr-1 font-mono text-[9px] font-semibold uppercase text-muted-foreground">Quick launch:</span>
              {quickCases.map((item) => (
                <button key={item.value} onClick={() => setIncident(item.value)} className="rounded-full border border-border bg-secondary/70 px-3 py-1.5 text-xs font-semibold text-copy transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <span className="mr-2 inline-block size-1.5 rounded-full bg-primary" />{item.label} ({item.confidence})
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="relative animate-rise-delayed lg:justify-self-end">
          <div className="tracking-reticle" aria-hidden="true"><Crosshair /></div>
          <article className="telemetry-panel max-w-[620px] border border-primary/45 bg-panel/90 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-border pb-5">
              <div className="flex min-w-0 items-start gap-3">
                <Radio className="mt-0.5 size-5 shrink-0 text-primary" />
                <div className="min-w-0"><h2 className="truncate font-display text-base font-bold uppercase">Incident reconstruction telemetry</h2><p className="mt-1 font-mono text-[9px] uppercase text-primary">Corridor: Mumbai High Offshore Sector 4</p></div>
              </div>
              <Button variant="console" size="sm" onClick={() => setSimulation((value) => !value)}><Play /> {simulation ? "Running" : "Live simulation"}</Button>
            </div>

            <div className="telemetry-line mt-5 space-y-5">
              <TelemetryStep icon={<Check />} tone="good" title="Sentinel-1 SAR detection" detail="18.924°N, 72.152°E · Area: 4.8 km² · 94% oil probability" />
              <TelemetryStep number="2" title="Reverse drift trajectory (RK4)" detail="T−6.2 hrs backtrack · INCOIS 0.42 m/s currents · Origin reconstructed" />
              <TelemetryStep number="3" tone="muted" title="AIS spatiotemporal fusion" detail="MV Kaveri Star · CPA: 0.38 km · Time delta: −12m" />
              <TelemetryStep icon={<CircleAlert />} tone="warn" title="Dark vessel anomaly detected" detail="AIS signal inactive for 3h 18m during transit through release zone" />
            </div>

            <div className="mt-6 grid grid-cols-3 border border-border bg-field/80 py-4 text-center">
              <Metric label="Oil confidence" value="94%" detail="SAR C-Band" />
              <Metric label="Top match" value="84 / 100" detail="MV Kaveri Star" />
              <Metric label="Drift backtrack" value="6.2 hrs" detail="Runge–Kutta" warn />
            </div>
            <p className="mt-5 text-center font-serif text-xs italic text-muted-foreground">“Autonomous maritime forensics for sovereign waters and legal enforcement.”</p>
          </article>
        </section>
      </div>
    </main>
  );
}

function TelemetryStep({ icon, number, tone = "primary", title, detail }: { icon?: ReactNode; number?: string; tone?: "primary" | "good" | "muted" | "warn"; title: string; detail: string }) {
  return <div className="relative flex gap-4"><span className={`step-icon step-${tone}`}>{icon ?? number}</span><div><h3 className={`text-sm font-bold uppercase ${tone === "warn" ? "text-warning" : "text-foreground"}`}>{title}</h3><p className="mt-1 text-xs leading-5 text-copy">{detail}</p></div></div>;
}

function Metric({ label, value, detail, warn = false }: { label: string; value: string; detail: string; warn?: boolean }) {
  return <div className="min-w-0 border-r border-border px-2 last:border-r-0"><p className="font-mono text-[8px] uppercase text-muted-foreground">{label}</p><p className={`mt-1 font-mono text-lg font-bold ${warn ? "text-warning" : "text-primary"}`}>{value}</p><p className="mt-1 truncate text-[9px] text-copy">{detail}</p></div>;
}