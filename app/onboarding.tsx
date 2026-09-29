import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Onboarding({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <>
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="text-sm font-semibold tracking-tight text-brand-blue">CRYPTICAI</a>
        <nav className="hidden items-center gap-6 text-[10px] font-medium uppercase tracking-wide text-slate-400 sm:flex">
          <a href="#safety" className="transition-colors hover:text-brand-blue">Safety</a>
          <a href="#network" className="transition-colors hover:text-brand-blue">Networks</a>
          <a href="#docs" className="transition-colors hover:text-brand-blue">Docs</a>
          <a href="#login" className="text-brand-blue">Login</a>
        </nav>
        <button type="button" aria-label="Open menu" className="text-lg text-slate-700 sm:hidden">&#9776;</button>
      </header>

      <main>
        <section id="top" className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-12 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-16 md:pb-28 md:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              AI-powered web3 gateway
            </span>
            <h1 className="mt-6 max-w-lg text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
              Your smart way to <span className="text-brand-blue">manage</span> crypto
            </h1>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
              The first conversational wallet designed to simplify complex blockchain interactions through natural language. Experience web3 without the friction.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {['Instant swaps', 'Multi-chain support', 'Self-custodial'].map((feature) => (
                <li key={feature} className="rounded-full border border-slate-200 px-2.5 py-1 text-[10px] font-medium text-slate-600">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button type="button" onClick={onGetStarted} className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-5 py-2.5 text-xs font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5">
                <span>Get started</span>
                <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                  <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 text-white" />
                </span>
              </button>
              <a href="#demo" className="rounded-lg border border-brand-blue px-5 py-2.5 text-xs font-semibold text-brand-blue transition-colors hover:bg-blue-50">
                View demo
              </a>
            </div>
            <p className="mt-7 text-[10px] text-slate-400">Audited by industry leaders - 100% secure</p>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <span className="absolute -top-3 right-3 z-10 inline-flex items-center gap-2 rounded-full bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-700 shadow-md">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              AI core active
            </span>
            <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-2xl shadow-slate-200/70">
              <Image
                src="/web3secure.svg"
                alt="WEB3 artwork"
                width={498}
                height={369}
                className="block h-auto w-full"
              />
              <div className="flex items-center justify-between bg-white px-4 py-2 text-[9px] font-medium uppercase tracking-wide text-slate-400">
                <span>Recent session</span>
                <span className="text-emerald-500">Secure connection</span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-slate-50/60">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
            <Feature title="Full ownership" description="Your keys, your crypto. We never store your seed phrases or private keys." />
            <Feature title="Conversational AI" description="Execute swaps, check balances and analyze yields with simple text commands." />
            <Feature title="Global connectivity" description="Connect to thousands of dApps across Ethereum, Polygon and Arbitrum instantly." />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-xs text-slate-400 sm:flex-row sm:justify-center sm:gap-8">
          <a href="#privacy" className="transition-colors hover:text-slate-600">Privacy</a>
          <a href="#terms" className="transition-colors hover:text-slate-600">Terms</a>
          <a href="#security" className="transition-colors hover:text-slate-600">Security</a>
        </div>
      </footer>
    </>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center sm:text-left">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-brand-blue sm:mx-0" aria-hidden="true">
        <span className="text-lg">+</span>
      </div>
      <h2 className="mt-4 text-sm font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  );
}