import { ChartLine, PackageIcon, TruckIcon, UsersIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl">Tablero</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-10 lg:gap-0">
        <div className="rounded-lg border border-gray-100 shadow-sm w-60 h-24 space-y-2 p-4">
          <div className="flex justify-between">
            <h1 className="text-sm font-normal">Total productos</h1>

            <PackageIcon className="h-4 text-gray-400" />
          </div>

          <p className="text-2xl font-semibold">245</p>
        </div>

        <div className="rounded-lg border border-gray-100 shadow-sm w-60 h-24 space-y-2 p-4">
          <div className="flex justify-between">
            <h1 className="text-sm font-normal">Clientes</h1>

            <UsersIcon className="h-4 text-gray-400" />
          </div>

          <p className="text-2xl font-semibold">30</p>
        </div>

        <div className="rounded-lg border border-gray-100 shadow-sm w-60 h-24 space-y-2 p-4">
          <div className="flex justify-between">
            <h1 className="text-sm font-normal">Proveedores</h1>

            <TruckIcon className="h-4 text-gray-400" />
          </div>

          <p className="text-2xl font-semibold">245</p>
        </div>

        <div className="rounded-lg border border-gray-100 shadow-sm w-60 h-24 space-y-2 p-4">
          <div className="flex justify-between">
            <h1 className="text-sm font-normal">Ventas del mes</h1>

            <ChartLine className="h-4 text-gray-400" />
          </div>

          <p className="text-2xl font-semibold">245</p>
        </div>
      </div>
    </div>
  );
}
