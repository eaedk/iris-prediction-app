import {
  getNumbers,
  getClasses,
} from "ml-dataset-iris";

import type {
  IrisSample,
  IrisSpecies,
} from "@/types/iris";

export function getIrisDataset(): IrisSample[] {
  const numbers = getNumbers();
  const classes = getClasses();

  return numbers.map((row, index) => ({
    id: index + 1,

    sepalLength: row[0],
    sepalWidth: row[1],
    petalLength: row[2],
    petalWidth: row[3],

    species: classes[index]
      .replace(/^Iris-/i, "")
      .toLowerCase() as IrisSpecies,
  }));
}