"use client";

import { SubmitHandler } from "react-hook-form";
import GenericForm from "./GenericFormProducts";

type FormValues = {
  name: string;
  stock: number;
  category: string;
};

interface FormEditProductProps {
  data: FormValues;
}

const FormEditProduct = ({ data }: FormEditProductProps) => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return <GenericForm onSubmit={onSubmit} mode="edit" initialValues={data} />;
};

export default FormEditProduct;
