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
} from "../components/form-inputs";
import styles from "../styles/pages/create.module.scss";
import { FormProvider, useForm } from "react-hook-form";
interface CreateForm {
  fullname: string;
  email: string;
  age: number;
  civilstatus: string;
  work: string;
}
const Create: NextPage = () => {
  const methods = useForm<CreateForm>({
    mode: "onChange",
  });
  const { isValid, errors } = methods.formState;
  const onClick = (e:React.FormEvent)=>{
    e.preventDefault()
    if(isValid){
      console.log("Enviado al back")
    }
  }
  console.log(Object.entries(errors))
  return (
    <Layout>
      <SEO
        title="TuBanco | Registrar cliente"
        description="Registrar clientes para un credito"
      />
      <div className={styles.content}>
        <h2 className={styles.contentTitle}>Registrar</h2>
        <FormProvider {...methods}>
          <form className={styles.form}>
            <FullName label="Nombre" name="fullname" />
            <Email label="Correo Electronico" name="email" />
            <Age label="Edad" name="age" />
            <CivilStatus />
            <WorkStatus />
            <button className="btn-style" onClick={onClick}>
              Registrar
            </button>
            {errors &&
              Object.entries(errors).map((error) => <span>{error[1]}</span>)}
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
};

export default Create;
