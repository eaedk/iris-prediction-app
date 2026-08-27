export type IrisSpecies = "setosa" | "versicolor" | "virginica";

export type IrisInput = {
  sepalLength: number;
  sepalWidth: number;
  petalLength: number;
  petalWidth: number;
};

export type IrisPrediction = {
  classId: number;
  species: IrisSpecies;
  input: IrisInput;
};

export type IrisSample = {
  id: number;
  sepalLength: number;
  sepalWidth: number;
  petalLength: number;
  petalWidth: number;
  species: IrisSpecies;
};