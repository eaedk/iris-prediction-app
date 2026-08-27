import { NextResponse } from "next/server";

import { predictIris } from "@/lib/iris-model";

import type { IrisInput } from "@/types/iris";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<IrisInput>;

    const {
      sepalLength,
      sepalWidth,
      petalLength,
      petalWidth,
    } = body;

    const values = [
      sepalLength,
      sepalWidth,
      petalLength,
      petalWidth,
    ];

    const invalid = values.some(
      (value) =>
        typeof value !== "number" ||
        !Number.isFinite(value) ||
        value <= 0
    );

    if (invalid) {
      return NextResponse.json(
        {
          error:
            "Les quatre mesures doivent être des nombres positifs.",
        },
        {
          status: 400,
        }
      );
    }

    const input: IrisInput = {
      sepalLength: sepalLength as number,
      sepalWidth: sepalWidth as number,
      petalLength: petalLength as number,
      petalWidth: petalWidth as number,
    };

    const prediction = predictIris([
      input.sepalLength,
      input.sepalWidth,
      input.petalLength,
      input.petalWidth,
    ]);

    return NextResponse.json({
      ...prediction,
      input,
    });
  } catch (error) {
    console.error("Prediction error:", error);

    return NextResponse.json(
      {
        error:
          "Une erreur est survenue pendant la prédiction.",
      },
      {
        status: 500,
      }
    );
  }
}