"use client";

import { SubmitHandler } from "react-hook-form";
import FormClients from "./formClients";

interface FormEditClientProps {
  data: ClientType;
}

const FormEditClient = ({ data }: FormEditClientProps) => {
  const onSubmit: SubmitHandler<ClientType> = (data) => {
    console.log(data);
  };

  return <FormClients onSubmit={onSubmit} mode="edit" initialValues={data} />;
};

export default FormEditClient;
