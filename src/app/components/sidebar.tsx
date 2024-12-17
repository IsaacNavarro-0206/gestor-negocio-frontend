import Link from "next/link";
import React from "react";
import {
    Grid3X3Icon,
  HouseIcon,
  PackageIcon,
  ReceiptText,
  TruckIcon,
  UsersIcon,
} from "lucide-react";

function Sidebar() {
  return (
    <div className="bg-gray-100 w-1/4 h-full p-4">
      <h1 className="text-2xl font-bold mb-3">Gestor</h1>

      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              className="flex items-center hover:bg-slate-200 rounded-md p-3 gap-2"
            >
              <HouseIcon />

              <p className="text-lg">Inicio</p>
            </Link>
          </li>

          <li>
            <Link
              href="/transactions"
              className="flex items-center hover:bg-slate-200 rounded-md p-3 gap-2"
            >
              <ReceiptText />

              <p className="text-lg">Transacciones</p>
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              className="flex items-center hover:bg-slate-200 rounded-md p-3 gap-2"
            >
              <PackageIcon />

              <p className="text-lg">Productos</p>
            </Link>
          </li>
          
          <li>
            <Link
              href="/categories"
              className="flex items-center hover:bg-slate-200 rounded-md p-3 gap-2"
            >
              <Grid3X3Icon />

              <p className="text-lg">Categorías</p>
            </Link>
          </li>

          <li>
            <Link
              href="/clients"
              className="flex items-center hover:bg-slate-200 rounded-md p-3 gap-2"
            >
              <UsersIcon />

              <p className="text-lg">Clientes</p>
            </Link>
          </li>

          <li>
            <Link
              href="/suppliers"
              className="flex items-center hover:bg-slate-200 rounded-md p-3 gap-2"
            >
              <TruckIcon />

              <p className="text-lg">Proveedores</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
