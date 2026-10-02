"use client";

import { useState } from "react";
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowRightArrowLeft,
  faArrowTrendUp,
  faArrowUp,
  faArrowUpRightFromSquare,
  faBars,
  faBell,
  faChartPie,
  faChevronRight,
  faCircleCheck,
  faCircleInfo,
  faClockRotateLeft,
  faCopy,
  faDiceD20,
  faEllipsis,
  faEye,
  faFilter,
  faGasPump,
  faGear,
  faMagnifyingGlass,
  faRightFromBracket,
  faRotate,
  faShieldHalved,
  faTableCellsLarge,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const navItems: { label: string; icon: IconDefinition; active?: boolean }[] = [
  { label: "Dashboard", icon: faTableCellsLarge },
  { label: "Balance", icon: faChartPie, active: true },
  { label: "History", icon: faClockRotateLeft },
  { label: "Settings", icon: faGear },
];

const quickInfo = [
  { label: "Main network", value: "Ethereum Mainnet", icon: faCircleInfo },
  { label: "Gas fee (Gwei)", value: "24 Gwei", icon: faGasPump, accent: true },
  { label: "Etherscan", value: "View", icon: faArrowUpRightFromSquare, link: true },
];

const performanceCards = [
  {
    title: "Global Market Cap",
    value: "$3.05T",
    kind: "sparkline" as const,
  },
  {
    title: "Alt Season Index",
    value: "10.8%",
    kind: "bars" as const,
  },
  {
    title: "Nerd Record",
    value: "$40k",
    kind: "progress" as const,
    icon: faDiceD20,
  },
];

const progressSegments = [
  { label: "120 Pends", color: "bg-amber-400", width: "40%" },
  { label: "120 Approved", color: "bg-emerald-400", width: "48%" },
  { label: "12 Disabled", color: "bg-rose-400", width: "12%" },
];

type Asset = {
  name: string;
  symbol: string;
  price: string;
  balance: string;
  valueUsd: string;
  iconBg: string;
};

const assets: Asset[] = [
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$1,581.90",
    balance: "12,450.22 ETH",
    valueUsd: "$13,145.20",
    iconBg: "bg-blue-500",
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    price: "$1,001.90",
    balance: "17,450.22 USDC",
    valueUsd: "$17,450.20",
    iconBg: "bg-blue-500",
  },
];

const activity = [
  {
    id: "a1",
    title: "Swap 0.45 ETH",
    subtitle: "1,245.0 USDC · 2 hours ago",
    status: "Success",
  },
  {
    id: "a2",
    title: "Swap 0.45 ETH",
    subtitle: "1,245.0 USDC · 2 hours ago",
  },
  {
    id: "a3",
    title: "Swap 0.45 ETH",
    subtitle: "1,245.0 USDC · 2 hours ago",
  },
  {
    id: "a4",
    title: "Swap 0.45 ETH",
    subtitle: "1,245.0 USDC · 2 hours ago",
  },
  {
    id: "a5",
    title: "Swap 0.45 ETH",
    subtitle: "1,245.0 USDC · 2 hours ago",
  },
];

export default function Balance({ onDashboard }: { onDashboard?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4 md:hidden">
        <span className="text-lg font-bold text-brand-blue">CrypticAI</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-9 w-9 items-center justify-center rounded-full text-brand-blue"
          >
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
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
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      if (item.label === "Dashboard") {
                        onDashboard?.();
                        setMenuOpen(false);
                      }
                    }}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
                      item.active
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-500"
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-4" />
                    {item.label}
                  </button>
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

      <div className="mx-auto flex max-w-[1500px]">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col justify-between border-r border-slate-100 p-6 md:flex">
          <div>
            <span className="text-xl font-bold text-brand-blue">
              CrypticAI
            </span>
            <nav className="mt-10 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    if (item.label === "Dashboard") onDashboard?.();
                  }}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="w-4" />
                  {item.label}
                </button>
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
              Asset Management
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

          {/* Net worth + quick info */}
          <div className="mt-6 grid gap-4 md:mt-8 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl border border-slate-200 p-5 sm:p-6">
              <div className="flex items-start justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Total net worth
                </p>
                <FontAwesomeIcon icon={faEye} className="text-slate-300" />
              </div>
              <p className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                $49,240.50
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                <FontAwesomeIcon icon={faArrowTrendUp} className="text-emerald-500" />
                40% up this month · 31 days
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-card"
                >
                  <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
                  Send
                </button>
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700"
                >
                  <FontAwesomeIcon icon={faArrowDown} className="text-xs" />
                  Receive
                </button>
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700"
                >
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} className="text-xs" />
                  Swap
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5 sm:p-6">
              <p className="text-sm font-semibold text-slate-800">Quick info</p>
              <ul className="mt-4 space-y-4">
                {quickInfo.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <span className="flex items-center gap-2 text-slate-500">
                      <FontAwesomeIcon icon={item.icon} className="text-xs" />
                      {item.label}
                    </span>
                    <span
                      className={`font-medium ${
                        item.accent
                          ? "text-emerald-600"
                          : item.link
                            ? "text-brand-blue"
                            : "text-slate-800"
                      }`}
                    >
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Portfolio performance */}
          <section className="mt-14 sm:mt-16">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Portfolio Performance
            </h2>
            <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">
              <FontAwesomeIcon icon={faChartPie} className="text-xs" />
              Track your wealth accumulation over time
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-5">
                <p className="text-sm text-slate-500">Global Market Cap</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">$3.05T</p>
                <svg
                  viewBox="0 0 240 70"
                  className="mt-4 h-16 w-full text-emerald-700"
                  preserveAspectRatio="none"
                >
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    points="0,45 15,38 30,50 45,30 60,55 75,25 90,40 105,20 120,35 135,15 150,32 165,22 180,38 195,18 210,30 225,12 240,20"
                  />
                  <polygon
                    fill="currentColor"
                    opacity="0.08"
                    points="0,45 15,38 30,50 45,30 60,55 75,25 90,40 105,20 120,35 135,15 150,32 165,22 180,38 195,18 210,30 225,12 240,20 240,70 0,70"
                  />
                </svg>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <p className="text-sm text-slate-500">Alt Season Index</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">10.8%</p>
                <div className="mt-4 flex h-16 items-end gap-[3px] overflow-hidden">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-1.5 rounded-sm ${
                        i < 11
                          ? "bg-blue-500"
                          : i < 22
                            ? "bg-rose-400/70"
                            : "bg-slate-200"
                      }`}
                      style={{ height: `${30 + ((i * 13) % 40)}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-500">
                    <FontAwesomeIcon icon={faDiceD20} className="text-xs" />
                  </span>
                  <p className="text-sm text-slate-500">Nerd Record</p>
                </div>
                <p className="mt-3 text-2xl font-bold text-slate-900">$40k</p>
                <div className="mt-4 flex h-2 overflow-hidden rounded-full">
                  {progressSegments.map((seg) => (
                    <span
                      key={seg.label}
                      className={seg.color}
                      style={{ width: seg.width }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-500">
                  {progressSegments.map((seg) => (
                    <span key={seg.label} className="flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${seg.color}`} />
                      {seg.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Asset breakdown */}
          <section className="mt-14 sm:mt-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Asset Breakdown
              </h2>
              <div className="flex items-center gap-3">
                <div className="relative flex-1 sm:w-56">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Search assets..."
                    className="w-full rounded-full border border-slate-200 py-2 pl-9 pr-3 text-sm placeholder:text-slate-400 focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  <FontAwesomeIcon icon={faFilter} className="text-xs" />
                  Filter
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {assets.map((asset) => (
                <div
                  key={asset.symbol}
                  className="rounded-2xl border border-slate-200 p-5"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-full border border-slate-100 ${asset.iconBg}`}
                      >
                        <Image
                          src="/eth.svg"
                          alt={asset.symbol}
                          width={22}
                          height={22}
                        />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 sm:text-base">
                          {asset.name}
                        </p>
                        <p className="text-xs text-slate-400">{asset.symbol}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue">
                      {asset.price}
                      <FontAwesomeIcon icon={faArrowTrendUp} className="text-xs" />
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        Balance
                      </p>
                      <p className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl">
                        {asset.balance}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        Value in USD
                      </p>
                      <p className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl">
                        {asset.valueUsd}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <button
                      type="button"
                      className="flex-1 rounded-lg bg-slate-100 py-2.5 text-sm font-medium text-slate-700"
                    >
                      Buy {asset.symbol}
                    </button>
                    <button
                      type="button"
                      className="flex-1 rounded-lg bg-slate-100 py-2.5 text-sm font-medium text-slate-700"
                    >
                      Sell {asset.symbol}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Wallet address */}
            <div className="mt-4 flex flex-col gap-5 rounded-2xl border-2 border-dashed border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-500">
                  <FontAwesomeIcon icon={faArrowDown} className="rotate-45" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900">
                    Your wallet address
                  </p>
                  <span className="mt-1 inline-flex max-w-full items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600">
                    <span className="truncate">0x71C2aB12...3e4f5g6h7i8j9k0l1m2n3o</span>
                    <FontAwesomeIcon icon={faCopy} className="shrink-0" />
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex-1 whitespace-nowrap rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-700 sm:flex-none"
                >
                  Manage permissions
                </button>
                <button
                  type="button"
                  className="flex-1 whitespace-nowrap rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-700 sm:flex-none"
                >
                  Export CSV
                </button>
              </div>
            </div>
          </section>

          {/* Recent activity */}
          <section className="mt-14 pb-10 sm:mt-16">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Recent Activity
              </h2>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue"
              >
                View all activity
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </a>
            </div>

            <ul className="mt-5 divide-y divide-slate-100">
              {activity.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-3 py-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                      <FontAwesomeIcon icon={faRotate} className="text-xs" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-400">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {item.status && (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        {item.status}
                      </span>
                    )}
                    <button
                      type="button"
                      aria-label="More options"
                      className="text-slate-400"
                    >
                      <FontAwesomeIcon icon={faEllipsis} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}