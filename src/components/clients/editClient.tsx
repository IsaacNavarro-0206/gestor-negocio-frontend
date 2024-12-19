"use client";

import { SubmitHandler } from "react-hook-form";
import FormClients from "./formClients";

type FormValues = {
    name: string;
    email?: string;
    phone: string;
    address: string;
  };

interface FormEditClientProps {
  data: FormValues;
}

const FormEditClient = ({ data }: FormEditClientProps) => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return <FormClients onSubmit={onSubmit} mode="edit" initialValues={data} />;
};

export default FormEditClient;
