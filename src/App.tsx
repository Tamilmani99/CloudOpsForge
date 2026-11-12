import { useRef, useState } from "react";

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

  const consoleRef = useRef<HTMLDivElement>(null);
  const architectureRef = useRef<HTMLDivElement>(null);
  const awsRef = useRef<HTMLDivElement>(null);
  const terraformRef = useRef<HTMLDivElement>(null);
  const scriptsRef = useRef<HTMLDivElement>(null);
  const deployRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);

  const sections = {
    Console: consoleRef,
    Architecture: architectureRef,
    AWS: awsRef,
    Terraform: terraformRef,
    Scripts: scriptsRef,
    Deploy: deployRef,
    Roadmap: roadmapRef,
  };

  const handleNavigate = (page: string) => {
    setActivePage(page);

    sections[page as keyof typeof sections]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      <section
        ref={consoleRef}
        id="console"
        className="scroll-mt-24"
      >
        <Console />
      </section>

      <section
        ref={architectureRef}
        id="architecture"
        className="scroll-mt-24"
      >
        <Architecture />
      </section>

      <section
        ref={awsRef}
        id="aws"
        className="scroll-mt-24"
      >
        <AWS />
      </section>

      <section
        ref={terraformRef}
        id="terraform"
        className="scroll-mt-24"
      >
        <Terraform />
      </section>

      <section
        ref={scriptsRef}
        id="scripts"
        className="scroll-mt-24"
      >
        <Scripts />
      </section>

      <section
        ref={deployRef}
        id="deploy"
        className="scroll-mt-24"
      >
        <Deploy />
      </section>

      <section
        ref={roadmapRef}
        id="roadmap"
        className="scroll-mt-24"
      >
        <Roadmap />
      </section>

    </div>
  );
}

export default App;