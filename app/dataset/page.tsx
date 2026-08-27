import { Database, Flower2 } from "lucide-react";

import DatasetChart from "@/components/DatasetChart";
import DatasetTable from "@/components/DatasetTable";

import { getIrisDataset } from "@/lib/iris-dataset";

export default function DatasetPage() {
  const data = getIrisDataset();

  const setosa = data.filter(
    (sample) => sample.species === "setosa"
  ).length;

  const versicolor = data.filter(
    (sample) => sample.species === "versicolor"
  ).length;

  const virginica = data.filter(
    (sample) => sample.species === "virginica"
  ).length;

  return (
    <div className="mx-auto w-full max-w-[1400px]">
      <header>
        <p className="font-medium text-violet-600">
          Data exploration
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-950">
          Explorer le dataset
        </h1>

        <p className="mt-3 text-lg text-slate-500">
          Explore les caractéristiques des 150 fleurs
          présentes dans le dataset Iris.
        </p>
      </header>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_280px] text-slate-500">
        {/* Graphique */}
        <DatasetChart data={data} />

        {/* Statistiques */}
        <aside className="space-y-4">
          <DatasetStat
            icon={<Database />}
            label="Échantillons"
            value={data.length}
          />

          <DatasetStat
            icon={<Flower2 />}
            label="Setosa"
            value={setosa}
          />

          <DatasetStat
            icon={<Flower2 />}
            label="Versicolor"
            value={versicolor}
          />

          <DatasetStat
            icon={<Flower2 />}
            label="Virginica"
            value={virginica}
          />
        </aside>
      </div>

      {/* Tableau */}
      <div className="mt-8 text-slate-500">
        <DatasetTable data={data} />
      </div>
    </div>
  );
}

function DatasetStat({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="text-violet-600">
          {icon}
        </div>

        <span className="text-sm font-medium">
          {label}
        </span>
      </div>

      <strong className="text-xl text-violet-600">
        {value}
      </strong>
    </div>
  );
}