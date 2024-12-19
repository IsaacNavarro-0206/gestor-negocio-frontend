"use client";

import { SubmitHandler } from "react-hook-form";
import FormProducts from "./formProducts";

interface FormEditProductProps {
  data: ProductType;
}

const FormEditProduct = ({ data }: FormEditProductProps) => {
  const onSubmit: SubmitHandler<ProductType> = (data) => {
    console.log(data);
  };

  return <FormProducts onSubmit={onSubmit} mode="edit" initialValues={data} />;
};

export default FormEditProduct;
