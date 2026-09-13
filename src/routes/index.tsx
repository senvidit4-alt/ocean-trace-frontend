import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import heroAsset from "@/assets/ocean-trace-hero.jpg.asset.json";
import { OceanTraceMark } from "@/components/ocean-trace-mark";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Secure Sign In — Ocean Trace" },
      { name: "description", content: "Secure access to the Ocean Trace maritime forensics decision-support system." },
      { property: "og:title", content: "Ocean Trace Secure Access" },
      { property: "og:description", content: "Sign in to the Ocean Trace maritime intelligence console." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    await new Promise((resolve) => window.setTimeout(resolve, 450));
    await navigate({ to: "/landing" });
  }

  return (
    <main className="auth-shell min-h-screen bg-background text-foreground">
      <img src={heroAsset.url} alt="Satellite monitoring of the Arabian Sea" width={1920} height={1080} className="auth-image" />
      <div className="auth-shade" aria-hidden="true" />
      <div className="ocean-grid" aria-hidden="true" />
      <div className="relative z-10 grid min-h-screen lg:grid-cols-[1.15fr_.85fr]">
        <section className="hidden flex-col justify-between border-r border-border/60 p-12 lg:flex xl:p-16">
          <OceanTraceMark />
          <div className="max-w-2xl animate-rise">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-[10px] font-bold uppercase text-primary"><ShieldCheck className="size-4" /> Sovereign maritime intelligence</span>
            <h1 className="font-display text-6xl font-bold leading-[1.05]">Trace the spill.<br /><span className="text-primary">Prove the source.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-copy">Satellite radar, ocean physics, and vessel trajectories converge into one defensible chain of evidence.</p>
          </div>
          <p className="font-mono text-[10px] uppercase text-muted-foreground">National Technical Research Organisation · Maritime Domain Awareness</p>
        </section>

        <section className="flex items-center justify-center px-5 py-10 sm:px-10">
          <div className="w-full max-w-md border border-border bg-panel/90 p-6 shadow-2xl backdrop-blur-xl sm:p-9 animate-rise-delayed">
            <div className="mb-9 lg:hidden"><OceanTraceMark /></div>
            <p className="font-mono text-[10px] font-bold uppercase text-primary">Authorized personnel only</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Sign in to Ocean Trace</h2>
            <p className="mt-2 text-sm leading-6 text-copy">Access active investigations and maritime evidence.</p>
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase text-muted-foreground">Official email</label>
                <div className="relative"><Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-primary" /><input id="email" type="email" required defaultValue="officer@oceantrace.in" className="h-12 w-full border border-border bg-field pl-11 pr-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" /></div>
              </div>
              <div>
                <div className="mb-2 flex justify-between gap-3"><label htmlFor="password" className="text-xs font-semibold uppercase text-muted-foreground">Password</label><button type="button" className="text-xs font-semibold text-primary hover:underline">Forgot password?</button></div>
                <div className="relative"><LockKeyhole className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-primary" /><input id="password" type={passwordVisible ? "text" : "password"} required defaultValue="demo1234" className="h-12 w-full border border-border bg-field pl-11 pr-12 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" /><button type="button" aria-label={passwordVisible ? "Hide password" : "Show password"} onClick={() => setPasswordVisible((value) => !value)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary">{passwordVisible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</button></div>
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={busy}>{busy ? "Authenticating…" : "Enter secure system"}<ArrowRight /></Button>
            </form>
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5 text-xs text-muted-foreground"><LockKeyhole className="size-4 shrink-0 text-primary" /><span>Protected session · Activity is logged for audit compliance</span></div>
          </div>
        </section>
      </div>
    </main>
  );
}
