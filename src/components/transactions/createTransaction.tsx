"use client";

import { SubmitHandler } from "react-hook-form";
import FormTransactions from "./formTransactions";

const FormCreateTransaction = () => {
  const onSubmit: SubmitHandler<TransactionFormType> = (data) => {
    console.log(typeof data, data);
  };

  return <FormTransactions onSubmit={onSubmit} mode="create" />;
};

export default FormCreateTransaction;
