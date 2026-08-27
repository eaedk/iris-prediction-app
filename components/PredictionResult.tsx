import {
  CheckCircle2,
  Flower2,
} from "lucide-react";

import type {
  IrisPrediction,
  IrisSpecies,
} from "@/types/iris";

type Props = {
  prediction: IrisPrediction;
};

const labels: Record<IrisSpecies, string> = {
  setosa: "Setosa",
  versicolor: "Versicolor",
  virginica: "Virginica",
};

export default function PredictionResult({
  prediction,
}: Props) {
  const {
    species,
    confidence,
    probabilities,
    input,
  } = prediction;

  return (
    <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid lg:grid-cols-[320px_1fr]">
        {/* Fleur */}

        <div className="flex min-h-[320px] items-center justify-center bg-violet-50">
          <Flower2
            size={150}
            strokeWidth={1.2}
            className="text-violet-600"
          />
        </div>

        {/* Résultat */}

        <div className="p-8">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Espèce prédite
          </p>

          <h2 className="mt-2 text-5xl font-bold text-violet-600">
            Iris {labels[species]}
          </h2>

          <div className="mt-5 flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 font-medium text-emerald-700">
            <CheckCircle2 size={19} />

            Confiance :{" "}
            {(confidence * 100).toFixed(1)} %
          </div>

          <p className="mt-5 text-slate-600">
            Le modèle classe cette fleur comme
            appartenant à l&apos;espèce{" "}
            <strong className="text-slate-900">
              Iris {labels[species]}
            </strong>.
          </p>

          <div className="mt-8">
            <h3 className="mb-4 font-semibold text-slate-900">
              Probabilités
            </h3>

            <Probability
              label="Setosa"
              value={probabilities.setosa}
            />

            <Probability
              label="Versicolor"
              value={probabilities.versicolor}
            />

            <Probability
              label="Virginica"
              value={probabilities.virginica}
            />
          </div>
        </div>
      </div>

      {/* valeurs */}

      <div className="border-t border-slate-200 p-8">
        <h3 className="mb-5 text-lg font-semibold text-slate-900">
          Valeurs utilisées
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Measurement
            label="Longueur sépale"
            value={input.sepalLength}
          />

          <Measurement
            label="Largeur sépale"
            value={input.sepalWidth}
          />

          <Measurement
            label="Longueur pétale"
            value={input.petalLength}
          />

          <Measurement
            label="Largeur pétale"
            value={input.petalWidth}
          />
        </div>
      </div>
    </section>
  );
}

function Probability({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const percentage = value * 100;

  return (
    <div className="mb-4">
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-slate-700">
          {label}
        </span>

        <span className="font-semibold text-slate-900">
          {percentage.toFixed(1)} %
        </span>
      </div>

      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-violet-600 transition-all"
          style={{
            width: `${Math.min(
              100,
              Math.max(0, percentage)
            )}%`,
          }}
        />
      </div>
    </div>
  );
}

function Measurement({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="text-xs font-medium text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-lg font-bold text-slate-900">
        {value} cm
      </p>
    </div>
  );
}