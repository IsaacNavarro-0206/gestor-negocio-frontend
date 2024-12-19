"use client";

import { SubmitHandler } from "react-hook-form";
import FormCategories from "./formCategories";

interface FormEditCategroyProps {
  data: CategoryType;
}

const FormEditCategory = ({ data }: FormEditCategroyProps) => {
  const onSubmit: SubmitHandler<CategoryType> = (data) => {
    console.log(data);
  };

  return (
    <FormCategories onSubmit={onSubmit} mode="edit" initialValues={data} />
  );
};

export default FormEditCategory;
