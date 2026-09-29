"use client";

import { useState } from "react";
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faBell,
  faChartPie,
  faChevronRight,
  faCircleCheck,
  faClockRotateLeft,
  faDownload,
  faEye,
  faFingerprint,
  faGaugeHigh,
  faGear,
  faNetworkWired,
  faRightFromBracket,
  faShieldHalved,
  faTableCellsLarge,
  faTowerBroadcast,
  faTrophy,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const navItems: { label: string; icon: IconDefinition; active?: boolean }[] = [
  { label: "Dashboard", icon: faTableCellsLarge, active: true },
  { label: "Balance", icon: faChartPie },
  { label: "History", icon: faClockRotateLeft },
  { label: "Settings", icon: faGear },
];

const stats = [
  { label: "Encryption", value: "AES-256" },
  { label: "Audited by", value: "CertiK & Hacken" },
  { label: "Up time", value: "99.99%" },
];

const features: {
  title: string;
  description: string;
  icon: IconDefinition;
  tag?: string;
}[] = [
  {
    title: "Human-Readable Previews",
    description:
      "Never sign a blind transaction. Our AI translates complex smart contract hex data into plain English for you to review.",
    icon: faEye,
    tag: "Unique",
  },
  {
    title: "Non-Custodial Design",
    description:
      "We never store your private keys or seed phrases. You maintain 100% ownership and control over your digital assets.",
    icon: faShieldHalved,
  },
  {
    title: "Real-time Risk Analysis",
    description:
      "Automatically scans every recipient address and smart contract against known malicious database lists.",
    icon: faTowerBroadcast,
    tag: "Proactive",
  },
  {
    title: "Slippage & Gas Alerts",
    description:
      "Get alerted immediately if network congestion is high or if a swap would result in unfavorable price impact.",
    icon: faGaugeHigh,
  },
  {
    title: "Multi-Factor Signing",
    description:
      "Integrate with your wallet's biometric or hardware security for high-value transfers above your custom limit.",
    icon: faFingerprint,
  },
  {
    title: "Private RPC Network",
    description:
      "Route transactions through our private network to prevent frontrunning and MEV bot exploits.",
    icon: faNetworkWired,
  },
];

const confirmationPoints = [
  "Clear asset icons and symbols.",
  "Live USD value estimations.",
  "Real time network fee breakdown.",
  "Explicit authorization requirement.",
];

const auditBadges = ["Blockfort", "Cybersec", "Ethaudit", "TrustWeb3"];

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4 md:hidden">
        <span className="text-lg font-bold text-brand-blue">CrypticAI</span>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Mobile slide-over menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-slate-900/40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-64 flex-col justify-between bg-white p-5 shadow-xl">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-brand-blue">
                  CrypticAI
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <nav className="mt-8 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
                      item.active
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-500"
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-4" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-rose-500"
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="w-4" />
              Logout
            </a>
          </div>
        </div>
      )}

      <div className="mx-auto flex max-w-[1400px]">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col justify-between border-r border-slate-100 p-6 md:flex">
          <div>
            <span className="text-xl font-bold text-brand-blue">
              CrypticAI
            </span>
            <nav className="mt-10 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="w-4" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-rose-500 hover:bg-rose-50"
          >
            <FontAwesomeIcon icon={faRightFromBracket} className="w-4" />
            Logout
          </a>
        </aside>

        {/* Main content */}
        <main className="flex-1 px-4 py-6 sm:px-6 md:px-10 md:py-8">
          {/* Header */}
          <div className="hidden items-center justify-between md:flex">
            <h1 className="text-lg font-semibold text-slate-800">
              Simple &amp; Secure
            </h1>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-brand-blue">
                <FontAwesomeIcon icon={faCircleCheck} />
                Connected
              </span>
              <button
                type="button"
                aria-label="Notifications"
                className="flex h-9 w-9 items-center justify-center rounded-full text-brand-blue hover:bg-blue-50"
              >
                <FontAwesomeIcon icon={faBell} />
              </button>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-brand-blue">
                <FontAwesomeIcon icon={faShieldHalved} />
                SECURE
              </span>
            </div>
          </div>

          {/* Hero */}
          <section className="mt-6 grid gap-10 md:mt-10 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-blue">
                <FontAwesomeIcon icon={faTrophy} />
                Trust-first protocol
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Your Assets,
                <br />
                <span className="text-brand-blue">Always Protected</span>
              </h2>

              <p className="mt-4 max-w-md text-sm text-slate-600 sm:text-base">
                CrypticAI combines the intuitive ease of natural language with
                institutional-grade security. Manage your portfolio with
                absolute confidence through multi-layer verification.
              </p>

              <div className="mt-6 flex flex-wrap gap-6 sm:gap-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#set-security"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5"
                >
                  Set my security
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
                <a
                  href="#whitepaper"
                  className="inline-flex items-center justify-center rounded-lg border border-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue transition-colors hover:bg-blue-50"
                >
                  Read security whitepaper
                </a>
              </div>
            </div>

            <div className="relative">
              <span className="absolute -top-4 right-4 z-10 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-md">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Biometric signing
              </span>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-950 shadow-2xl">
                <Image
                  src="/eth.svg"
                  alt="Ethereum network visualization" 
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 left-6 rounded-xl bg-white p-4 shadow-xl">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Status
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  Transaction verified
                </p>
              </div>
            </div>
          </section>

          {/* Transparency */}
          <section className="mt-24 text-center sm:mt-28">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Transparency at Every Step
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 sm:text-base">
              We believe in zero-obscurity. Every conversational request is
              translated into a verifiable transaction before it ever reaches
              the blockchain.
            </p>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-slate-200 p-5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                      <FontAwesomeIcon icon={feature.icon} className="text-sm" />
                    </span>
                    {feature.tag && (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                        {feature.tag}
                      </span>
                    )}
                  </div>
                  <h4 className="mt-4 text-sm font-semibold text-slate-900">
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Simplified confirmation */}
          <section className="mt-20 grid gap-10 sm:mt-24 lg:grid-cols-2 lg:items-start lg:gap-12">
            <div className="lg:pt-4">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Simplified Confirmation
              </h3>
              <p className="mt-3 max-w-md text-sm text-slate-600 sm:text-base">
                This is how you&apos;ll interact with CrypticAI. No complex
                forms — just clear intent and explicit confirmation. We
                handle the heavy lifting while you stay in control.
              </p>
              <ul className="mt-6 space-y-3">
                {confirmationPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-xs" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-brand-blue shadow-card">
              <div className="flex items-center justify-between bg-brand-blue px-5 py-4">
                <span className="flex items-center gap-2 text-sm font-semibold text-white">
                  <FontAwesomeIcon icon={faShieldHalved} />
                  Secure intent verification
                </span>
                <span className="rounded-full bg-amber-400/90 px-3 py-1 text-[11px] font-semibold text-amber-950">
                  Pending approval
                </span>
              </div>

              <div className="space-y-6 p-5 sm:p-6">
                <p className="rounded-lg bg-slate-50 p-4 text-sm italic text-slate-700">
                  &ldquo;Hey CrypticAI, swap 0.5 ETH for USDC and keep the gas
                  fee under $10.&rdquo;
                </p>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100">
                      <Image src="/eth.svg" alt="ETH" width={20} height={20} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        0.05 ETH
                      </p>
                      <p className="text-[11px] uppercase tracking-wide text-slate-400">
                        Pay
                      </p>
                    </div>
                  </div>

                  <FontAwesomeIcon icon={faChevronRight} className="text-slate-300" />

                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-900">
                      1,234.56 USDC
                    </p>
                    <p className="text-[11px] uppercase tracking-wide text-slate-400">
                      Receive
                    </p>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                    <FontAwesomeIcon icon={faDownload} className="text-xs" />
                  </span>
                </div>

                <div className="space-y-2 border-t border-slate-100 pt-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Estimated network fee</span>
                    <span className="font-medium text-emerald-600">
                      $4.12 (Low)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Price impact</span>
                    <span className="font-medium text-slate-800">&lt;0.01%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Recipient</span>
                    <span className="font-medium text-slate-800">
                      0x71C...aB12 (Self)
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full rounded-lg bg-brand-blue py-3 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5"
                >
                  Authorize in wallet
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  Signed via end-to-end encrypted channel
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-20 border-t border-slate-100 pb-10 pt-8 text-center sm:mt-24">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-slate-400">
              {auditBadges.map((badge) => (
                <span key={badge} className="uppercase tracking-wide">
                  {badge}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">
              2026 CrypticAI. Audited and verified by industry-leading
              security researchers.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}