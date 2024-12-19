"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, TrashIcon } from "lucide-react";

import { Button } from "../ui/button";
import GenericTable from "../shared/genericTable";
import FormEditCategory from "./editCategory";

const data: Categories[] = [
  {
    name: "Ron",
    edit: <FormEditCategory data={{ name: "Ron" }} />,
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Cerveza lata",
    edit: <FormEditCategory data={{ name: "Cerveza lata" }} />,
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Cerveza botella",
    edit: <FormEditCategory data={{ name: "Cerveza botella" }} />,
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Whisky",
    edit: <FormEditCategory data={{ name: "Whisky" }} />,
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Tequila",
    edit: <FormEditCategory data={{ name: "Tequila" }} />,
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Aguardiente",
    edit: <FormEditCategory data={{ name: "Aguardiente" }} />,
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
];

type Categories = {
  name: string;
  edit: React.ReactNode;
  delete: React.ReactNode;
};

export const columns: ColumnDef<Categories>[] = [
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

const TableCategories = () => {
  return (
    <GenericTable
      data={data}
      columns={columns}
      filterPlaceholder="Buscar por categorías"
    />
  );
};

export default TableCategories;
