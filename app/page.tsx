"use client";

import { useState } from "react";
import Connect from "./connect";
import Dashboard from "./dashboard";
import Onboarding from "./onboarding";
import SecurePage from "./secure";

export default function Home() {
  const [screen, setScreen] = useState<"onboarding" | "secure" | "wallet" | "dashboard">("onboarding");

  switch (screen) {
    case "onboarding":
      return <Onboarding onGetStarted={() => setScreen("secure")} />;
    case "secure":
      return <SecurePage onConnect={() => setScreen("wallet")} />;
    case "wallet":
      return <Connect onConnect={() => setScreen("dashboard")} onViewDemo={() => setScreen("dashboard")} />;
    case "dashboard":
      return <Dashboard />;
  }
}
