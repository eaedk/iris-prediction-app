"use client";

import {
  type FormEvent,
  useState,
} from "react";

import {
  RotateCcw,
  Sparkles,
} from "lucide-react";

import PredictionResult from "@/components/PredictionResult";

import type {
  IrisInput,
  IrisPrediction,
} from "@/types/iris";

const initialValues: IrisInput = {
  sepalLength: 5.1,
  sepalWidth: 3.5,
  petalLength: 1.4,
  petalWidth: 0.2,
};

const examples = {
  setosa: {
    sepalLength: 5.1,
    sepalWidth: 3.5,
    petalLength: 1.4,
    petalWidth: 0.2,
  },

  versicolor: {
    sepalLength: 5.9,
    sepalWidth: 2.8,
    petalLength: 4.3,
    petalWidth: 1.3,
  },

  virginica: {
    sepalLength: 6.3,
    sepalWidth: 3.3,
    petalLength: 6.0,
    petalWidth: 2.5,
  },
};

export default function PredictionForm() {
  const [values, setValues] =
    useState<IrisInput>(initialValues);

  const [prediction, setPrediction] =
    useState<IrisPrediction | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  function updateValue(
    key: keyof IrisInput,
    value: string
  ) {
    setValues((current) => ({
      ...current,
      [key]: Number(value),
    }));

    setPrediction(null);
    setError(null);
  }

  function loadExample(
    species: keyof typeof examples
  ) {
    setValues(examples[species]);
    setPrediction(null);
    setError(null);
  }

  function reset() {
    setValues(initialValues);
    setPrediction(null);
    setError(null);
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setPrediction(null);
    setError(null);

    try {
      const response = await fetch("/api/predict", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ??
            "Impossible d'effectuer la prédiction."
        );
      }

      setPrediction(data);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Une erreur inconnue est survenue."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">
              Mesures de la fleur
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Saisissez les quatre caractéristiques
              morphologiques en centimètres.
            </p>
          </div>

          <div className="rounded-xl bg-violet-100 p-3 text-violet-600">
            <Sparkles size={24} />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Field
            label="Longueur du sépale"
            value={values.sepalLength}
            onChange={(value) =>
              updateValue("sepalLength", value)
            }
          />

          <Field
            label="Largeur du sépale"
            value={values.sepalWidth}
            onChange={(value) =>
              updateValue("sepalWidth", value)
            }
          />

          <Field
            label="Longueur du pétale"
            value={values.petalLength}
            onChange={(value) =>
              updateValue("petalLength", value)
            }
          />

          <Field
            label="Largeur du pétale"
            value={values.petalWidth}
            onChange={(value) =>
              updateValue("petalWidth", value)
            }
          />
        </div>

        <div className="mt-7">
          <p className="mb-3 text-sm font-medium text-slate-600">
            Exemples rapides
          </p>

          <div className="flex flex-wrap gap-2">
            <ExampleButton
              label="Setosa"
              onClick={() =>
                loadExample("setosa")
              }
            />

            <ExampleButton
              label="Versicolor"
              onClick={() =>
                loadExample("versicolor")
              }
            />

            <ExampleButton
              label="Virginica"
              onClick={() =>
                loadExample("virginica")
              }
            />
          </div>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Sparkles size={18} />

            {loading
              ? "Classification..."
              : "Prédire l'espèce"}
          </button>

          <button
            type="button"
            onClick={reset}
            className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <RotateCcw size={18} />
            Réinitialiser
          </button>
        </div>
      </form>

      {prediction && (
        <PredictionResult
          prediction={prediction}
        />
      )}
    </div>
  );
}

type FieldProps = {
  label: string;
  value: number;
  onChange: (value: string) => void;
};

function Field({
  label,
  value,
  onChange,
}: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </span>

      <div className="relative">
        <input
          type="number"
          min="0.1"
          max="10"
          step="0.1"
          required
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-14 text-slate-950 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
        />

        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
          cm
        </span>
      </div>
    </label>
  );
}

function ExampleButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-violet-200 bg-violet-50 px-3 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-100"
    >
      {label}
    </button>
  );
}