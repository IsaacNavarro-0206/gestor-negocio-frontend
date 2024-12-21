"use client";

import FormCreateTransaction from "app/components/transactions/createTransaction";
import TableTransactions from "app/components/transactions/tableTransactions";

const Transactions = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Transacciones</h1>

        <FormCreateTransaction />
      </div>

      <TableTransactions />
    </div>
  );
};

export default Transactions;
