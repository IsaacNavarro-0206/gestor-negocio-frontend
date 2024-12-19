"use client";

import { SubmitHandler } from "react-hook-form";
import FormCategories from "./formCategories";

type FormValues = {
  name: string;
};
interface FormEditCategroyProps {
  data: FormValues;
}

const FormEditCategory = ({ data }: FormEditCategroyProps) => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <FormCategories onSubmit={onSubmit} mode="edit" initialValues={data} />
  );
};

export default FormEditCategory;
