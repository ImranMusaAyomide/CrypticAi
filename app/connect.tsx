"use client";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faFileCircleCheck,
  faLock,
  faPenNib,
  faShieldHalved,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import type { ReactNode } from "react";

// Stop FontAwesome injecting its CSS at runtime (avoids oversized-icon flash in Next.js)
config.autoAddCss = false;

type WalletId = "metamask" | "coinbase" | "walletconnect";

type Wallet = {
  id: WalletId;
  name: string;
  description: string;
  icon: ReactNode;
  badge?: string;
};

const wallets: Wallet[] = [
  {
    id: "metamask",
    name: "MetaMask",
    description: "Connect using your browser extension",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true" className="h-8 w-8">
        <path fill="#E2761B" d="M5 4 17 13 14 25 4 22 5 4Zm30 0-12 9 3 12 10-3-1-18Z" />
        <path fill="#F6851B" d="m5 4 11 10-2 11L4 22 5 4Zm30 0L24 14l2 11 10-3-1-18Z" />
        <path fill="#763D16" d="m14 25 6-3 6 3-6 9-6-9Z" />
        <path fill="#CD6116" d="m16 14 4 3-6 3-3-3 5-3Zm8 0-4 3 6 3 3-3-5-3Z" />
        <path fill="#E4751F" d="m14 25 6 2 6-2-6 9-6-9Z" />
      </svg>
    ),
    badge: "Popular",
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    description: "Use Coinbase Wallet mobile app or extension",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true" className="h-8 w-8">
        <circle cx="20" cy="20" r="18" fill="#1652F0" />
        <path d="M25.8 13.5a9 9 0 1 0 0 13" fill="none" stroke="white" strokeLinecap="round" strokeWidth="4.5" />
      </svg>
    ),
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    description: "Scan a QR code with any compatible mobile wallet",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true" className="h-8 w-8">
        <path fill="#3B99FC" d="M4 10.5 12 5l8 5.5L28 5l8 5.5v19L28 35l-8-5.5L12 35l-8-5.5v-19Zm5 2.7v13.6l3-2 6 4V15l-6-4-3 2.2Zm22 0-3-2.2-6 4v13.8l6-4 3 2V13.2Z" />
      </svg>
    ),
  },
];

const securityPoints = [
  {
    icon: faLock,
    title: "Self-custodial",
    text: "You maintain 100% control over your private keys. CrypticAI never stores your seed phrase.",
  },
  {
    icon: faFileCircleCheck,
    title: "Audited protocols",
    text: "Our smart contracts and AI interaction layer are audited by top-tier security firms.",
  },
  {
    icon: faPenNib,
    title: "Explicit approval",
    text: "Every transaction requires your explicit manual signature within your connected wallet.",
  },
];

type ConnectProps = {
  onConnect?: (wallet: WalletId) => void;
  onViewDemo?: () => void;
};

export default function Connect({ onConnect, onViewDemo }: ConnectProps) {
  return (
    <section className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-12">
        <p className="text-sm font-medium text-slate-700">Connect Your Wallet</p>

        <div className="mt-8 grid gap-10 md:mt-12 md:grid-cols-[1.35fr_1fr] md:gap-12">
          {/* Left: wallet options */}
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Welcome to CrypticAI
            </h1>
            <p className="mt-3 max-w-md text-sm text-slate-600 sm:text-base">
              Connect your crypto wallet to start managing your assets through
              our conversational AI interface.
            </p>

            <ul className="mt-6 space-y-3">
              {wallets.map((wallet) => (
                <li key={wallet.id}>
                  <button
                    type="button"
                    onClick={() => onConnect?.(wallet.id)}
                    className="flex w-full items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-brand-blue hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-white sm:h-12 sm:w-12">
                      {wallet.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900 sm:text-base">
                          {wallet.name}
                        </span>
                        {wallet.badge && (
                          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-brand-blue">
                            {wallet.badge}
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-500">
                        {wallet.description}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap items-center gap-2 rounded-lg bg-slate-100 px-4 py-3 text-xs text-slate-600">
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                className="text-brand-blue"
              />
              <span>New to Ethereum?</span>
              <a
                href="https://ethereum.org/en/wallets/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-brand-blue hover:underline"
              >
                Learn about wallets
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-[10px]"
                />
              </a>
            </div>
          </div>

          {/* Right: trust + promo */}
          <aside>
            <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600">
              <FontAwesomeIcon icon={faShieldHalved} />
              Trusted security
            </h2>

            <ul className="mt-5 space-y-6">
              {securityPoints.map((point) => (
                <li key={point.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <FontAwesomeIcon icon={point.icon} className="text-sm" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-700">
                      {point.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {point.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-brand-blue p-5 text-white shadow-card">
              <p className="text-xs font-medium text-blue-100">
                Intelligent Asset Management
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                &ldquo;Hey CrypticAI, swap 0.5 ETH for USDC and send it to
                Vitalik.&rdquo; Experience Web3 through conversation.
              </p>
              <button
                type="button"
                onClick={onViewDemo}
                className="mt-4 inline-flex w-full items-center justify-between gap-3 rounded-lg border border-white/40 px-4 py-2.5 text-xs font-medium transition hover:bg-white/10 sm:w-auto"
              >
                View demo dashboard
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}