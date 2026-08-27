import Link from "next/link";

import {
  Database,
  Flower2,
  Ruler,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import StatCard from "@/components/StatCard";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}

      <header className="mb-10">
        <p className="mb-2 font-medium text-violet-600">
          Machine Learning × Next.js
        </p>

        <h1 className="text-4xl font-bold tracking-tight">
          Bienvenue sur Iris Classifier
        </h1>

        <p className="mt-3 max-w-2xl text-lg text-slate-500">
          Une application de démonstration permettant de
          classifier une fleur d&apos;iris à partir de ses
          caractéristiques morphologiques.
        </p>
      </header>

      {/* Stats */}

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={Database}
          title="Échantillons"
          value={150}
          description="Dataset Iris"
        />

        <StatCard
          icon={Flower2}
          title="Espèces"
          value={3}
          description="Setosa, Versicolor, Virginica"
        />

        <StatCard
          icon={Ruler}
          title="Variables"
          value={4}
          description="Sépales et pétales"
        />

        <StatCard
          icon={Sparkles}
          title="Modèle"
          value="RF"
          description="Random Forest"
        />
      </section>

      {/* Dataset */}

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-violet-600">
              Dataset Iris
            </span>

            <h2 className="mt-2 text-2xl font-bold">
              Un classique du Machine Learning
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Chaque fleur est représentée par quatre
              mesures exprimées en centimètres.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Longueur du sépale",
                "Largeur du sépale",
                "Longueur du pétale",
                "Largeur du pétale",
              ].map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl bg-slate-50 px-4 py-3 text-sm"
                >
                  ✓ {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-violet-50 p-7">
            <Flower2
              size={48}
              className="mb-5 text-violet-600"
            />

            <h3 className="text-xl font-semibold">
              Essaie le modèle
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Entre les quatre mesures d&apos;une fleur et
              obtiens son espèce prédite.
            </p>

            <Link
              href="/prediction"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700"
            >
              Faire une prédiction
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* fonctionnement */}

      <section className="mt-8">
        <h2 className="text-2xl font-bold">
          Comment ça fonctionne ?
        </h2>

        <div className="mt-5 grid gap-5 md:grid-cols-3">

          <Step
            number="01"
            title="Mesurer"
            description="Saisissez les quatre mesures de la fleur."
          />

          <Step
            number="02"
            title="Classifier"
            description="Les caractéristiques sont envoyées au modèle Random Forest."
          />

          <Step
            number="03"
            title="Obtenir le résultat"
            description="L'espèce prédite est retournée à l'interface."
          />

        </div>
      </section>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6">
      <span className="text-sm font-bold text-violet-600">
        {number}
      </span>

      <h3 className="mt-3 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </article>
  );
}