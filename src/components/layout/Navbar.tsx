import { Cloud, Rocket } from "lucide-react";

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  "Console",
  "Architecture",
  "AWS",
  "Terraform",
  "Scripts",
  "Deploy",
  "Roadmap",
];

export function Navbar({
  activePage,
  onNavigate,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <button
          onClick={() => onNavigate("Console")}
          className="flex items-center gap-2"
        >
          <div className="rounded-lg bg-slate-900 p-2">
            <Cloud className="h-5 w-5 text-white" />
          </div>

          <span className="text-lg font-bold tracking-tight text-slate-900">
          CloudOps <span className="text-emerald-600">Forge</span> 
          </span>
        </button>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className={`
                inline-block text-sm font-medium
                transition-all duration-300 ease-in-out
                hover:-translate-y-1
                hover:scale-110
                hover:text-emerald-600
                ${
                  activePage === item
                    ? "text-emerald-600"
                    : "text-slate-600"
                }
              `}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Deploy Button */}
        <button
          onClick={() => onNavigate("Deploy")}
          className="
            flex items-center gap-2
            rounded-lg
            bg-slate-900
            px-4 py-2
            text-sm font-medium text-white
            transition-all duration-300 ease-in-out
            hover:-translate-y-1
            hover:scale-105
            hover:bg-slate-700
            hover:shadow-lg
          "
        >
          <Rocket className="h-4 w-4" />
          Run Deploy
        </button>

      </div>
    </header>
  );
}