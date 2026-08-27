import {
  getNumbers,
  getClassesAsNumber,
} from "ml-dataset-iris";

import {
  RandomForestClassifier,
} from "ml-random-forest";

import type {
  IrisSpecies,
} from "@/types/iris";

const species: IrisSpecies[] = [
  "setosa",
  "versicolor",
  "virginica",
];

const trainingSet = getNumbers();
const trainingLabels = getClassesAsNumber();

const model = new RandomForestClassifier({
  seed: 42,
  maxFeatures: 0.8,
  replacement: true,
  nEstimators: 100,
});

model.train(
  trainingSet,
  trainingLabels
);

export function predictIris(
  features: number[]
) {
  if (features.length !== 4) {
    throw new Error(
      "Une fleur Iris doit avoir exactement 4 caractéristiques."
    );
  }

  const classId = model.predict([
    features,
  ])[0];

  return {
    classId,
    species: species[classId],
  };
}