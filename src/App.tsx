import { useState } from "react";

import { Navbar } from "./components/layout/Navbar";

import { Console } from "./pages/Console";
import { Architecture } from "./pages/Architecture";
import { AWS } from "./pages/AWS";
import { Terraform } from "./pages/Terraform";
import { Scripts } from "./pages/Scripts";
import { Deploy } from "./pages/Deploy";
import { Roadmap } from "./pages/Roadmap";

function App() {
  const [activePage, setActivePage] = useState("Console");

  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar
        activePage={activePage}
        onNavigate={setActivePage}
      />

      {activePage === "Console" && <Console />}

      {activePage === "Architecture" && <Architecture />}

      {activePage === "AWS" && <AWS />}

      {activePage === "Terraform" && <Terraform />}

      {activePage === "Scripts" && <Scripts />}

      {activePage === "Deploy" && <Deploy />}

      {activePage === "Roadmap" && <Roadmap />}

    </div>
  );
}

export default App;