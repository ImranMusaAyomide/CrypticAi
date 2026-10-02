"use client";

import { useState, type FormEvent } from "react";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowDown,
	faArrowLeft,
	faArrowRight,
	faArrowUp,
	faArrowUpRightFromSquare,
	faBitcoinSign,
	faCheck,
	faChevronRight,
	faCircleCheck,
	faClockRotateLeft,
	faCopy,
	faEllipsis,
	faShieldHalved,
	faWallet,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

const assets: {
	name: string;
	symbol: string;
	amount: string;
	value: string;
	change: string;
	color: string;
	icon: IconDefinition;
}[] = [
	{
		name: "Bitcoin",
		symbol: "BTC",
		amount: "0.2841 BTC",
		value: "$18,420.16",
		change: "+2.4%",
		color: "bg-orange-100 text-orange-600",
		icon: faBitcoinSign,
	},
	{
		name: "Ethereum",
		symbol: "ETH",
		amount: "1.842 ETH",
		value: "$5,612.38",
		change: "+5.1%",
		color: "bg-indigo-100 text-indigo-600",
		icon: faEthereum,
	},
	{
		name: "USD Coin",
		symbol: "USDC",
		amount: "648.20 USDC",
		value: "$648.20",
		change: "0.0%",
		color: "bg-blue-100 text-blue-600",
		icon: faCircleCheck,
	},
];

const activity = [
	{ kind: "Received", asset: "Ethereum", amount: "+0.42 ETH", value: "+$1,279.60", time: "Today, 10:42 AM", incoming: true, icon: faArrowDown },
	{ kind: "Sent", asset: "USD Coin", amount: "−250.00 USDC", value: "−$250.00", time: "Yesterday, 4:18 PM", incoming: false, icon: faArrowUp },
	{ kind: "Received", asset: "Bitcoin", amount: "+0.018 BTC", value: "+$1,167.84", time: "May 21, 9:06 AM", incoming: true, icon: faArrowDown },
];

type WalletProps = { onDashboard?: () => void };
type Dialog = "send" | "receive" | null;

export default function Wallet({ onDashboard }: WalletProps) {
	const [dialog, setDialog] = useState<Dialog>(null);
	const [copied, setCopied] = useState(false);
	const [sent, setSent] = useState(false);

	function handleSend(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSent(true);
	}

	async function copyAddress() {
		try {
			await navigator.clipboard.writeText("0x71C7656EC7ab88b098defB751B7401B5f6d8976F");
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}

	function closeDialog() {
		setDialog(null);
		setCopied(false);
		setSent(false);
	}

	return (
		<div className="min-h-screen bg-[#f7f9fc] text-slate-900">
			<header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 sm:px-6 md:hidden">
				<span className="text-lg font-bold text-brand-blue">CrypticAI</span>
				<button type="button" onClick={onDashboard} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
					<FontAwesomeIcon icon={faArrowLeft} /> Dashboard
				</button>
			</header>

			<div className="mx-auto flex max-w-360">
				<aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col justify-between border-r border-slate-200 bg-white p-6 md:flex">
					<div>
						<span className="text-xl font-bold text-brand-blue">CrypticAI</span>
						<p className="mt-10 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">Workspace</p>
						<nav className="mt-3 space-y-1">
							<button type="button" onClick={onDashboard} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900">
								<span className="w-4 text-center">◫</span> Dashboard
							</button>
							<button type="button" className="flex w-full items-center gap-3 rounded-lg bg-blue-50 px-3 py-2.5 text-sm font-semibold text-brand-blue">
								<FontAwesomeIcon icon={faWallet} className="w-4" /> Wallet
							</button>
						</nav>
					</div>
					<div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
						<div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
							<FontAwesomeIcon icon={faShieldHalved} /> Protected wallet
						</div>
						<p className="mt-2 text-[11px] leading-relaxed text-slate-500">Your keys stay private and under your control.</p>
					</div>
				</aside>

				<main className="min-w-0 flex-1 px-4 py-6 sm:px-6 md:px-10 md:py-9">
					<div className="flex flex-wrap items-center justify-between gap-4">
						<div>
							<p className="text-xs font-medium text-slate-400">Workspace <span className="px-1">/</span> Wallet</p>
							<h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Your wallet</h1>
						</div>
						<div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700">
							<span className="h-2 w-2 rounded-full bg-emerald-500" /> Ethereum Mainnet
						</div>
					</div>

					<section className="mt-7 grid gap-5 lg:grid-cols-[1.55fr_1fr]">
						<div className="relative overflow-hidden rounded-xl bg-[#173c79] p-6 text-white sm:p-8">
							<div className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full border border-white/10" />
							<div className="pointer-events-none absolute -right-2 -top-14 h-52 w-52 rounded-full border border-white/10" />
							<div className="relative flex flex-wrap items-start justify-between gap-4">
								<div>
									<p className="text-sm font-medium text-blue-100">Total portfolio value</p>
									<p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">$24,680.74</p>
									<p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
										<FontAwesomeIcon icon={faArrowUp} /> $1,124.60 (4.8%) <span className="font-normal text-blue-100">past 30 days</span>
									</p>
								</div>
								<button type="button" aria-label="More wallet options" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white/80 hover:bg-white/10">
									<FontAwesomeIcon icon={faEllipsis} />
								</button>
							</div>
							<div className="relative mt-8 flex flex-wrap gap-2.5">
								<button type="button" onClick={() => setDialog("send")} className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#173c79] transition hover:bg-blue-50">
									<FontAwesomeIcon icon={faArrowUp} /> Send
								</button>
								<button type="button" onClick={() => setDialog("receive")} className="inline-flex items-center gap-2 rounded-lg border border-white/35 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
									<FontAwesomeIcon icon={faArrowDown} /> Receive
								</button>
							</div>
						</div>

						<div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 sm:p-7">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-semibold">Wallet health</p>
									<p className="mt-1 text-xs text-slate-500">Security checks are up to date</p>
								</div>
								<span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
									<FontAwesomeIcon icon={faShieldHalved} />
								</span>
							</div>
							<div className="mt-6 space-y-3">
								{[
									["Approval monitoring", "Active"],
									["Recovery method", "Configured"],
									["Last security scan", "Just now"],
								].map(([label, value]) => (
									<div key={label} className="flex items-center justify-between gap-3 border-t border-slate-100 pt-3 text-xs">
										<span className="text-slate-500">{label}</span>
										<span className="font-semibold text-emerald-700">{value}</span>
									</div>
								))}
							</div>
						</div>
					</section>

					<section className="mt-8 grid gap-8 xl:grid-cols-[1.5fr_1fr]">
						<div className="min-w-0">
							<div className="flex items-end justify-between gap-4">
								<div>
									<h2 className="text-lg font-bold">Your assets</h2>
									<p className="mt-1 text-xs text-slate-500">Tokens held in your connected wallet</p>
								</div>
								<button type="button" className="inline-flex items-center gap-2 text-xs font-semibold text-brand-blue hover:underline">
									Manage assets <FontAwesomeIcon icon={faArrowRight} />
								</button>
							</div>

							<div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
								<div className="hidden grid-cols-[1.4fr_1fr_1fr_auto] gap-4 border-b border-slate-100 px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:grid">
									<span>Asset</span><span>Balance</span><span>24h change</span><span className="text-right">Value</span>
								</div>
								{assets.map((asset) => (
									<div key={asset.symbol} className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-slate-100 px-4 py-4 last:border-0 sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:gap-4 sm:px-5">
										<div className="flex min-w-0 items-center gap-3">
											<span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${asset.color}`}><FontAwesomeIcon icon={asset.icon} /></span>
											<span className="min-w-0"><span className="block truncate text-sm font-semibold">{asset.name}</span><span className="mt-0.5 block text-xs text-slate-400">{asset.symbol}</span></span>
										</div>
										<div className="text-right sm:text-left"><span className="block text-sm font-medium">{asset.amount}</span><span className="mt-0.5 block text-xs text-slate-400 sm:hidden">{asset.change} today</span></div>
										<span className="hidden text-xs font-semibold text-emerald-600 sm:block">{asset.change}</span>
										<span className="text-right text-sm font-semibold">{asset.value}</span>
									</div>
								))}
								<button type="button" className="flex w-full items-center justify-between border-t border-slate-100 px-5 py-3.5 text-xs font-semibold text-brand-blue hover:bg-slate-50">
									Explore tokens <FontAwesomeIcon icon={faChevronRight} />
								</button>
							</div>
						</div>

						<div id="activity" className="min-w-0">
							<div className="flex items-end justify-between gap-4">
								<div>
									<h2 className="text-lg font-bold">Recent activity</h2>
									<p className="mt-1 text-xs text-slate-500">Your latest wallet transactions</p>
								</div>
								<button type="button" className="text-xs font-semibold text-brand-blue hover:underline">View all</button>
							</div>
							<div className="mt-4 rounded-xl border border-slate-200 bg-white px-4 sm:px-5">
								{activity.map((item, index) => (
									<div key={`${item.kind}-${item.asset}-${item.time}`} className={`flex items-center gap-3 py-4 ${index < activity.length - 1 ? "border-b border-slate-100" : ""}`}>
										<span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${item.incoming ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"}`}><FontAwesomeIcon icon={item.icon} className="text-xs" /></span>
										<div className="min-w-0 flex-1">
											<p className="truncate text-sm font-semibold">{item.kind} {item.asset}</p>
											<p className="mt-1 text-[11px] text-slate-400">{item.time}</p>
										</div>
										<div className="shrink-0 text-right">
											<p className={`text-xs font-semibold ${item.incoming ? "text-emerald-600" : "text-slate-700"}`}>{item.amount}</p>
											<p className="mt-1 text-[11px] text-slate-400">{item.value}</p>
										</div>
									</div>
								))}
								<button type="button" className="flex w-full items-center justify-center gap-2 border-t border-slate-100 py-3.5 text-xs font-semibold text-slate-500 hover:text-brand-blue">
									<FontAwesomeIcon icon={faClockRotateLeft} /> Transaction history
								</button>
							</div>
						</div>
					</section>

					<div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 py-5 text-xs text-slate-500">
						<span className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faShieldHalved} className="text-emerald-600" /> Protected by CrypticAI</span>
						<button type="button" onClick={onDashboard} className="inline-flex items-center gap-2 font-semibold text-brand-blue hover:underline">Back to dashboard <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
					</div>
				</main>
			</div>

			{dialog && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) closeDialog(); }}>
					<section role="dialog" aria-modal="true" aria-labelledby="wallet-dialog-title" className="w-full max-w-md rounded-xl bg-white p-5 shadow-2xl sm:p-6">
						<div className="flex items-start justify-between gap-4">
							<div>
								<h2 id="wallet-dialog-title" className="text-lg font-bold">{dialog === "send" ? "Send crypto" : "Receive crypto"}</h2>
								<p className="mt-1 text-xs text-slate-500">{dialog === "send" ? "Review the recipient and amount before sending." : "Share your wallet address to receive assets."}</p>
							</div>
							<button type="button" aria-label="Close dialog" onClick={closeDialog} className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"><FontAwesomeIcon icon={faXmark} /></button>
						</div>
						{dialog === "send" ? (
							sent ? (
								<div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"><FontAwesomeIcon icon={faCheck} className="mr-2" />Demo transfer reviewed. No transaction was broadcast.</div>
							) : (
								<form onSubmit={handleSend} className="mt-6 space-y-4">
									<label className="block text-xs font-semibold text-slate-700">Recipient address<input required minLength={8} placeholder="Wallet address" className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-normal outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100" /></label>
									<label className="block text-xs font-semibold text-slate-700">Amount<input required type="number" min="0.000001" step="any" placeholder="0.00" className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-normal outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100" /></label>
									<button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700">Review transfer <FontAwesomeIcon icon={faArrowRight} /></button>
								</form>
							)
						) : (
							<div className="mt-6">
								<p className="text-xs font-semibold text-slate-700">Your Ethereum address</p>
								<div className="mt-2 break-all rounded-lg bg-slate-50 p-3 font-mono text-xs leading-relaxed text-slate-600">0x71C7656EC7ab88b098defB751B7401B5f6d8976F</div>
								<button type="button" onClick={copyAddress} className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"><FontAwesomeIcon icon={copied ? faCheck : faCopy} />{copied ? "Address copied" : "Copy address"}</button>
								<p className="mt-3 text-[11px] leading-relaxed text-slate-400">Only send assets on the Ethereum network to this address.</p>
							</div>
						)}
					</section>
				</div>
			)}
		</div>
	);
}
