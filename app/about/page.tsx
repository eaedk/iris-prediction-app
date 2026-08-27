import {
  Brain,
  Database,
  Code2,
  Trees,
  type LucideIcon,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <header>
        <p className="font-medium text-violet-600">
          À propos
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-950">
          À propos de l&apos;application
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Iris Classifier est une application full-stack Next.js
          permettant d&apos;explorer le dataset Iris et
          d&apos;utiliser un modèle de Machine Learning pour
          classifier des fleurs.
        </p>
      </header>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        <InfoCard icon={Database} title="Dataset">
          Le dataset Iris contient 150 fleurs réparties entre
          Setosa, Versicolor et Virginica.
        </InfoCard>

        <InfoCard icon={Trees} title="Modèle">
          Un modèle Random Forest utilise les quatre
          caractéristiques physiques pour prédire l&apos;espèce.
        </InfoCard>

        <InfoCard icon={Brain} title="Machine Learning">
          Le modèle apprend la relation entre les mesures des fleurs
          et leur espèce à partir des données d&apos;entraînement.
        </InfoCard>

        <InfoCard icon={Code2} title="Architecture">
          Next.js gère l&apos;interface, la navigation, l&apos;API
          serveur et l&apos;appel au modèle.
        </InfoCard>
      </section>

      <section className="mt-8 rounded-2xl bg-slate-950 p-8 text-white">
        <p className="text-sm font-semibold text-violet-400">
          PIPELINE
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {[
            "Formulaire",
            "API Next.js",
            "4 features",
            "Random Forest",
            "Prédiction",
          ].map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <div className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-center text-sm">
                {item}
              </div>

              {index < 4 && (
                <span className="hidden text-violet-400 md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

type InfoCardProps = {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
};

function InfoCard({
  title,
  icon: Icon,
  children,
}: InfoCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
        <Icon size={22} />
      </div>

      <h2 className="text-lg font-semibold text-slate-900">
        {title}
      </h2>

      <div className="mt-2 leading-7 text-slate-600">
        {children}
      </div>
    </article>
  );
}