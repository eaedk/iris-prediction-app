"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Sparkles,
  Database,
  Info,
} from "lucide-react";

const links = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/prediction", label: "Prédiction", icon: Sparkles },
  { href: "/dataset", label: "Dataset", icon: Database },
  { href: "/about", label: "À propos", icon: Info },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed h-screen w-72 bg-slate-950 p-6 text-white">
      <h1 className="mb-1 text-2xl font-bold">
        🌸 Iris Classifier
      </h1>

      <p className="mb-10 text-sm text-slate-400">
        Classification des fleurs d'iris
      </p>

      <nav className="space-y-2">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl p-4 ${
                active
                  ? "bg-violet-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}