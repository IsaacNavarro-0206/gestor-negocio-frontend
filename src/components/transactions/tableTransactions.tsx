"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, TrashIcon } from "lucide-react";

import { Button } from "../ui/button";
import GenericTable from "../shared/genericTable";
import FormEditTransaction from "./editTransaction";

const data: Transactions[] = [
  {
    name: "El barba",
    entityType: "Cliente",
    transactionType: "Salida",
    productName: "Pony litro",
    quantity: 5,
    price: 30000,
    subTotal: 30000 * 5,
    edit: (
      <FormEditTransaction
        data={{
          transactionType: "out",
          entityType: "client",
          entityId: 1,
          transactionsDetails: [
            {
              productId: 1,
              price: 30000,
              quantity: 5,
            },
            {
              productId: 2,
              price: 35000,
              quantity: 7,
            },
          ],
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

const transformToCurrencyCop = (currency: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(currency);
};

type Transactions = {
  edit: React.ReactNode;
  delete: React.ReactNode;
} & TransactionType;

export const columns: ColumnDef<Transactions>[] = [
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
    accessorKey: "entityType",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Entidad
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("entityType")}</div>
    ),
  },
  {
    accessorKey: "transactionType",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Tipo Transaccion
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("transactionType")}</div>
    ),
  },
  {
    accessorKey: "productName",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Producto
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("productName")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Precio
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">
        {transformToCurrencyCop(row.getValue("price"))}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Cantidad
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("quantity")}</div>
    ),
  },
  {
    accessorKey: "subTotal",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Subtotal
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">
        {transformToCurrencyCop(row.getValue("subTotal"))}
      </div>
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

const TableTransactions = () => {
  return (
    <GenericTable
      data={data}
      columns={columns}
      filterPlaceholder="Buscar por nombres"
    />
  );
};

export default TableTransactions;
