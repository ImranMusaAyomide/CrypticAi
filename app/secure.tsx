import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faWallet } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const securityOptions = [
  {
    title: "Connect Existing Wallet",
    description: "Use MetaMask, Coinbase Wallet, or Rabby to securely access your wallet.",
    icon: faWallet,
    active: true,
  },
  {
    title: "Create New Wallet",
    description: "Set up a new wallet, back it up, and start managing your digital assets securely.",
    icon: faShieldAlt,
    active: false,
  },
];

const checklist = [
  "Security Checklist",
  "CrypticAI never stores your seed phrase or private keys on our servers.",
  "Transaction signatures are always verified and securely monitored in real time.",
];

export default function SecurePage() {
  return (
    <div className="min-h-screen bg-[#f5f7ff] text-slate-900">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="text-sm font-semibold tracking-[0.22em] text-[#1e3a8a]">CRYPTICAI</div>
        <nav className="hidden items-center gap-6 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:flex">
          <a href="#" className="transition hover:text-[#1d4ed8]">Safety</a>
          <a href="#" className="transition hover:text-[#1d4ed8]">Networks</a>
          <a href="#" className="transition hover:text-[#1d4ed8]">Docs</a>
          <a href="#" className="transition hover:text-[#1d4ed8]">Login</a>
        </nav>
      </header>

      <main className="mx-auto grid max-w-6xl gap-10 px-6 pb-14 pt-2 md:grid-cols-[1.08fr_0.92fr] md:items-start">
        <section className="pt-4">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#1d4ed8]">
            <span className="h-2 w-2 rounded-full bg-[#1d4ed8]" />
            Secure wallet
          </div>

          <h1 className="max-w-lg text-4xl font-bold leading-[1.04] tracking-[-0.06em] text-slate-900 sm:text-5xl">
            Secure Your
            <span className="mt-1 block text-slate-900">Digital Identity</span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
            Connect your wallet to experience the future of Web3. CRYPTICAI uses end-to-end
            encryption to keep your keys safe while you explore and transact with confidence.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-[10px] text-slate-600">
            {['Wallet security', 'Key protection', 'AI monitoring', 'Smart routing'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[28px] border border-blue-100 bg-white p-4 shadow-[0_30px_80px_rgba(59,130,246,0.12)] sm:p-6">
            <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.25),_rgba(96,165,250,0.12)_35%,_rgba(255,255,255,0)_70%)] blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7b4ff] bg-[radial-gradient(circle,_rgba(255,255,255,0.9),_rgba(255,255,255,0.12)_40%,_rgba(147,197,253,0.1)_60%,_rgba(255,255,255,0)_75%)] shadow-[0_0_35px_rgba(168,85,247,0.35)]" />
            <div className="relative flex items-center justify-center rounded-[20px] bg-[#0f172a] p-5 sm:p-8">
              <img src="/web3one.svg" alt="WEB3 artwork" className="block w-full max-w-[420px]" />
            </div>
          </div>
        </section>

        <aside className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:p-6">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-[15px] font-semibold text-slate-900">Get Started</h2>
            <button type="button" aria-label="Close" className="text-lg text-slate-400">
              ×
            </button>
          </div>

          <p className="text-[11px] text-slate-400">Choose how you want to access your assets.</p>

          <div className="mt-5 space-y-3">
            {securityOptions.map((option) => {
              const card = (
                <>
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg text-slate-600">
                    <FontAwesomeIcon icon={option.icon} className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-slate-900">{option.title}</span>
                      {option.active && (
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-emerald-700">
                          secure
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-[11px] leading-5 text-slate-500">{option.description}</p>
                  </div>
                </>
              );
              const className = `flex w-full items-start gap-3 rounded-2xl border p-3 text-left transition ${
                option.active
                  ? "border-blue-200 bg-blue-50 shadow-[0_10px_30px_rgba(96,165,250,0.12)]"
                  : "border-slate-200 bg-slate-50 hover:border-slate-300"
              }`;

              return option.title === "Connect Existing Wallet" ? (
                <Link key={option.title} href="/connect" className={className}>
                  {card}
                </Link>
              ) : (
                <button key={option.title} type="button" className={className}>
                  {card}
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Security Checklist
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                Live
              </span>
            </div>

            <div className="space-y-2.5">
              {checklist.slice(1).map((item) => (
                <div key={item} className="flex items-start gap-2 text-[11px] leading-5 text-slate-600">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center text-[11px] text-slate-400">
            Skip for now, or continue with a demo wallet →
          </div>
        </aside>
      </main>
    </div>
  );
}
