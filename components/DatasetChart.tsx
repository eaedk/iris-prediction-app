"use client";

import { useState } from "react";

import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type {
  IrisSample,
} from "@/types/iris";

type Props = {
  data: IrisSample[];
};

const features = {
  sepalLength: "Longueur du sépale",
  sepalWidth: "Largeur du sépale",
  petalLength: "Longueur du pétale",
  petalWidth: "Largeur du pétale",
};

type Feature = keyof typeof features;

export default function DatasetChart({
  data,
}: Props) {
  const [xFeature, setXFeature] =
    useState<Feature>("sepalLength");

  const [yFeature, setYFeature] =
    useState<Feature>("sepalWidth");

  const setosa =
    data.filter(
      (sample) => sample.species === "setosa"
    );

  const versicolor =
    data.filter(
      (sample) => sample.species === "versicolor"
    );

  const virginica =
    data.filter(
      (sample) => sample.species === "virginica"
    );

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Visualisation des données
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Compare deux caractéristiques du dataset.
          </p>
        </div>

        <div className="flex gap-3">

          <select
            value={xFeature}
            onChange={(event) =>
              setXFeature(
                event.target.value as Feature
              )
            }
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            {Object.entries(features).map(
              ([key, label]) => (
                <option
                  key={key}
                  value={key}
                >
                  X : {label}
                </option>
              )
            )}
          </select>

          <select
            value={yFeature}
            onChange={(event) =>
              setYFeature(
                event.target.value as Feature
              )
            }
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            {Object.entries(features).map(
              ([key, label]) => (
                <option
                  key={key}
                  value={key}
                >
                  Y : {label}
                </option>
              )
            )}
          </select>

        </div>
      </div>

      <div className="h-[500px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <ScatterChart
            margin={{
              top: 20,
              right: 30,
              bottom: 30,
              left: 20,
            }}
          >

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              type="number"
              dataKey={xFeature}
              name={features[xFeature]}
              unit=" cm"
              domain={["dataMin - 0.5", "dataMax + 0.5"]}
            />

            <YAxis
              type="number"
              dataKey={yFeature}
              name={features[yFeature]}
              unit=" cm"
              domain={["dataMin - 0.5", "dataMax + 0.5"]}
            />

            <Tooltip
              cursor={{
                strokeDasharray: "3 3",
              }}
            />

            <Legend />

            <Scatter
              name="Setosa"
              data={setosa}
              fill="#6d28d9"
            />

            <Scatter
              name="Versicolor"
              data={versicolor}
              fill="#16a34a"
            />

            <Scatter
              name="Virginica"
              data={virginica}
              fill="#e11d48"
            />

          </ScatterChart>
        </ResponsiveContainer>
      </div>

    </section>
  );
}