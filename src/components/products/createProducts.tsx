"use client";

import { SubmitHandler } from "react-hook-form";
import GenericForm from "./formProducts";

type FormValues = {
  name: string;
  stock: number;
  category: string;
};

const FormCreateProduct = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return <GenericForm onSubmit={onSubmit} mode="create" />;
};

export default FormCreateProduct;
