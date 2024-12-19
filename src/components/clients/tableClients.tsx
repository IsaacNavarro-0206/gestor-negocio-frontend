"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, TrashIcon } from "lucide-react";

import { Button } from "../ui/button";
import GenericTable from "../shared/genericTable";
import FormEditClient from "./editClient";

const data: Clients[] = [
  {
    name: "Memo",
    email: "",
    phone: "2323",
    address: "Carrer 19",
    edit: (
      <FormEditClient
        data={{
          name: "Memo",
          email: "",
          phone: "2323",
          address: "Carrer 19",
        }}
      />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Al lado del barba",
    email: "",
    phone: "2323",
    address: "Carrer 19a",
    edit: (
      <FormEditClient
        data={{
          name: "Al lado del barba",
          email: "",
          phone: "2323",
          address: "Carrer 19a",
        }}
      />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "El barba",
    email: "",
    phone: "2323",
    address: "Carrer 19b",
    edit: (
      <FormEditClient
        data={{
          name: "El barba",
          email: "",
          phone: "2323",
          address: "Carrer 19b",
        }}
      />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Andrea Piña",
    email: "",
    phone: "2323",
    address: "Carrer 19c",
    edit: (
      <FormEditClient
        data={{
          name: "Andrea Piña",
          email: "",
          phone: "2323",
          address: "Carrer 19c",
        }}
      />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "Colcodeco",
    email: "",
    phone: "2323",
    address: "Carrer 19d",
    edit: (
      <FormEditClient
        data={{
          name: "Colcodeco",
          email: "",
          phone: "2323",
          address: "Carrer 19d",
        }}
      />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
  {
    name: "CEFI Emanuel",
    email: "",
    phone: "2323",
    address: "Carrer 19e",
    edit: (
      <FormEditClient
        data={{
          name: "CEFI Emanuel",
          email: "",
          phone: "2323",
          address: "Carrer 19e",
        }}
      />
    ),
    delete: (
      <Button variant="ghost">
        <TrashIcon color="red" />
      </Button>
    ),
  },
];

type Clients = {
  edit: React.ReactNode;
  delete: React.ReactNode;
} & ClientType;

export const columns: ColumnDef<Clients>[] = [
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
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Teléfono
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("phone")}</div>
    ),
  },
  {
    accessorKey: "address",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Dirección
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("address")}</div>
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

const TableClients = () => {
  return (
    <GenericTable
      data={data}
      columns={columns}
      filterPlaceholder="Buscar por nombres"
    />
  );
};

export default TableClients;
