"use client";

import { useState } from "react";
import Balance from "./balance";
import Connect from "./connect";
import Dashboard from "./dashboard";
import Onboarding from "./onboarding";
import SecurePage from "./secure";
import Wallet from "./wallet.";

export default function Home() {
  const [screen, setScreen] = useState<"onboarding" | "secure" | "connect" | "wallet" | "dashboard" | "balance">("onboarding");

  switch (screen) {
    case "onboarding":
      return <Onboarding onGetStarted={() => setScreen("secure")} />;
    case "secure":
      return <SecurePage onConnect={() => setScreen("dashboard")} />;
    case "connect":
      return <Connect onConnect={() => setScreen("dashboard")} onViewDemo={() => setScreen("dashboard")} />;
    case "dashboard":
      return <Dashboard onBalance={() => setScreen("balance")} onWallet={() => setScreen("wallet")} onConnect={() => setScreen("connect")} />;
    case "wallet":
      return <Wallet onDashboard={() => setScreen("dashboard")} />;
    case "balance":
      return <Balance onDashboard={() => setScreen("dashboard")} />;
  }
}
