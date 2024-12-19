"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, TrashIcon } from "lucide-react";

import { Button } from "../ui/button";
import GenericTable from "../shared/genericTable";
import FormEditProduct from "./editProducts";

const data: Products[] = [
  {
    name: "Ron viejo de Caldas",
    stock: 15,
    category: "Ron",
    edit: (
      <FormEditProduct
        data={{ name: "Ron viejo de Caldas", stock: 15, category: "Ron" }}
      />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Aguila ligth",
    stock: 35,
    category: "Cerveza botella",
    edit: (
      <FormEditProduct
        data={{ name: "Aguila ligth", stock: 35, category: "Cerveza botella" }}
      />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Aguila negra",
    stock: 25,
    category: "Cerveza lata",
    edit: (
      <FormEditProduct
        data={{ name: "Aguila negra", stock: 25, category: "Cerveza lata" }}
      />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Old Par",
    stock: 10,
    category: "Whisky",
    edit: (
      <FormEditProduct
        data={{ name: "Old Par", stock: 10, category: "Whisky" }}
      />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Tequila",
    stock: 15,
    category: "Tequila",
    edit: (
      <FormEditProduct
        data={{ name: "Tequila", stock: 15, category: "Tequila" }}
      />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Tequila",
    stock: 15,
    category: "Tequila",
    edit: (
      <FormEditProduct
        data={{ name: "Tequila", stock: 15, category: "Tequila" }}
      />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
];

type Products = {
  edit: React.ReactNode;
  delete: React.ReactNode;
} & ProductType;

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nombre
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "stock",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Stock
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("stock")}</div>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Categoría
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "edit",
    header: "Editar",
    cell: ({ row }) => <div>{row.getValue("edit")}</div>,
  },
  {
    accessorKey: "delete",
    header: "Eliminar",
    cell: ({ row }) => <div>{row.getValue("delete")}</div>,
  },
];

const TableProducts = () => {
  return (
    <GenericTable
      data={data}
      columns={columns}
      filterPlaceholder="Buscar por productos"
    />
  );
};

export default TableProducts;
