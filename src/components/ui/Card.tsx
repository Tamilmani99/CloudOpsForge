import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        ease-in-out
        hover:-translate-y-1
        hover:scale-[1.02]
        hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}