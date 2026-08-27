import PredictionForm from "@/components/PredictionForm";

export default function PredictionPage() {
  return (
    <div className="mx-auto w-full max-w-[1400px]">
      <header className="mb-8">
        <p className="font-medium text-violet-600">
          Machine Learning
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-950">
          Faire une prédiction
        </h1>

        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Entrez les mesures d&apos;une fleur
          d&apos;iris pour prédire son espèce
          avec le modèle Random Forest.
        </p>
      </header>

      <PredictionForm />
    </div>
  );
}