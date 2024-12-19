"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, TrashIcon } from "lucide-react";

import { Button } from "../ui/button";
import GenericTable from "../shared/genericTable";
import FormEditSupplier from "./editSupplier";

const data: Suppliers[] = [
  {
    name: "Zulami Chary",
    contact: "28939283",
    edit: (
      <FormEditSupplier data={{ name: "Zulami Chary", contact: "28939283" }} />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Bavaria",
    contact: "233223",
    edit: <FormEditSupplier data={{ name: "Bavaria", contact: "233223" }} />,
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Postobon",
    contact: "237823",
    edit: <FormEditSupplier data={{ name: "Postobon", contact: "237823" }} />,
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Meico",
    contact: "meico@correo.com",
    edit: (
      <FormEditSupplier data={{ name: "Meico", contact: "meico@correo.com" }} />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Coca cola",
    contact: "cocacola@correo.com",
    edit: (
      <FormEditSupplier
        data={{ name: "Coca cola", contact: "cocacola@correo.com" }}
      />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Alexis",
    contact: "alexis@correo.com",
    edit: (
      <FormEditSupplier
        data={{ name: "Alexis", contact: "alexis@correo.com" }}
      />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
];

type Suppliers = {
  edit: React.ReactNode;
  delete: React.ReactNode;
} & SupplierType;

export const columns: ColumnDef<Suppliers>[] = [
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
    accessorKey: "contact",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Contacto
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("contact")}</div>
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

const TableSuppliers = () => {
  return (
    <GenericTable
      data={data}
      columns={columns}
      filterPlaceholder="Buscar por nombres"
    />
  );
};

export default TableSuppliers;
