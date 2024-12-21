"use client";

import { SubmitHandler } from "react-hook-form";
import FormTransactions from "./formTransactions";

interface FormEditTransactionProps {
  data: TransactionFormType;
}

const FormEditTransaction = ({ data }: FormEditTransactionProps) => {
  const onSubmit: SubmitHandler<TransactionFormType> = (data) => {
    console.log(data);
  };

  return (
    <FormTransactions onSubmit={onSubmit} mode="edit" initialValues={data} />
  );
};

export default FormEditTransaction;
