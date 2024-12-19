"use client";

import FormCreateClient from "app/components/clients/createClient";
import TableClients from "app/components/clients/tableClients";

const Clients = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Clientes</h1>

        <FormCreateClient />
      </div>

      <TableClients />
    </div>
  );
};

export default Clients;
