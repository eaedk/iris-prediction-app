import {
  getNumbers,
  getClassesAsNumber,
} from "ml-dataset-iris";

import {
  RandomForestClassifier,
} from "ml-random-forest";

import type {
  IrisProbabilities,
  IrisSpecies,
} from "@/types/iris";

const SPECIES: readonly IrisSpecies[] = [
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

model.train(trainingSet, trainingLabels);

export function predictIris(features: number[]) {
  if (features.length !== 4) {
    throw new Error(
      "La prédiction nécessite exactement 4 caractéristiques."
    );
  }

  if (
    features.some(
      (value) =>
        typeof value !== "number" ||
        !Number.isFinite(value) ||
        value <= 0
    )
  ) {
    throw new Error(
      "Toutes les caractéristiques doivent être des nombres positifs."
    );
  }

  const classId = model.predict([features])[0];

  const species = SPECIES[classId];

  if (!species) {
    throw new Error("Classe prédite inconnue.");
  }

  const rawProbabilities = SPECIES.map((_, label) => {
    const probability = model.predictProbability(
      [features],
      label
    )[0];

    return probability ?? 0;
  });

  const probabilities: IrisProbabilities = {
    setosa: rawProbabilities[0],
    versicolor: rawProbabilities[1],
    virginica: rawProbabilities[2],
  };

  return {
    classId,
    species,
    confidence: probabilities[species],
    probabilities,
  };
}