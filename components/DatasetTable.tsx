import type {
  IrisSample,
} from "@/types/iris";

export default function DatasetTable({
  data,
}: {
  data: IrisSample[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

      <div className="border-b p-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Aperçu des données
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Les 10 premiers échantillons.
        </p>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-left text-sm">

          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Sépale L.</th>
              <th className="p-4">Sépale l.</th>
              <th className="p-4">Pétale L.</th>
              <th className="p-4">Pétale l.</th>
              <th className="p-4">Espèce</th>
            </tr>
          </thead>

          <tbody>
            {data.slice(0, 10).map((row) => (
              <tr
                key={row.id}
                className="border-t"
              >
                <td className="p-4">
                  {row.id}
                </td>

                <td className="p-4">
                  {row.sepalLength}
                </td>

                <td className="p-4">
                  {row.sepalWidth}
                </td>

                <td className="p-4">
                  {row.petalLength}
                </td>

                <td className="p-4">
                  {row.petalWidth}
                </td>

                <td className="p-4 capitalize">
                  {row.species}
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}