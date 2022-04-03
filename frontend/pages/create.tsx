import React from "react";
import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { SEO } from "../components/seo";
import {
  FullName,
  Email,
  CivilStatus,
  Age,
  WorkStatus,
  Cedula,
} from "../components/form-inputs";
import styles from "../styles/pages/create.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { CreateForm, registrarCliente } from "../services/register.service";

const Create: NextPage = () => {
  const methods = useForm<CreateForm>({
    mode: "onChange",
  });

  const { isValid } = methods.formState;
  const onClick = (e: React.FormEvent) => {
    e.preventDefault();
    methods.trigger();
    if (isValid) {
      console.log("Enviado al back");
      registrarCliente(methods.getValues());
    }
  };
  return (
    <Layout>
      <SEO
        title="TuBanco | Registrar cliente"
        description="Registrar clientes para un credito"
      />
      <div className={styles.content}>
        <h2 className={styles.contentTitle}>Registrar</h2>
        <FormProvider {...methods}>
          <form>
            <div className={styles.form}>
              <FullName label="Nombre" name="name" />
              <Cedula label="Cedula" name="clientId" />
              <Email label="Correo Electronico" name="email" />
              <Age label="Edad" name="age" />
              <CivilStatus />
              <WorkStatus />
            </div>
            <button
              type="submit"
              className={`btn-style ${styles.submitBtn}`}
              onClick={onClick}
            >
              Registrar
            </button>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
};

export default Create;
