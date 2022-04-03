import React, { FunctionComponent, useEffect, useState } from "react";
import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { SEO } from "../components/seo";
import {
  Age,
  Cedula,
  CivilStatus,
  Email,
  FullName,
  WorkStatus,
} from "../components/form-inputs";
import { FormProvider, useForm } from "react-hook-form";
import { SearchClientInDb, UpdateClientInDb } from "../services/update.service";
import styles from "../styles/pages/update.module.scss";
import { ClientDb } from "../interfaces/client.interface";
const Update: NextPage = () => {
  const [client, setClient] = useState<ClientDb>({} as ClientDb);
  return (
    <Layout>
      <SEO
        title="TuBanco | Actualizar cliente"
        description="Actualiza los datos de los clientes registrados"
      />
      Actualizar cliente
      <SearchClient setClient={setClient} />
      <ClientData client={client} />
    </Layout>
  );
};

export default Update;
interface ISearchClient {
  setClient: React.Dispatch<React.SetStateAction<ClientDb>>;
}
const SearchClient: FunctionComponent<ISearchClient> = ({ setClient }) => {
  const methods = useForm({
    mode: "onChange",
  });

  const { isValid } = methods.formState;
  const search = async (e: React.FormEvent) => {
    e.preventDefault();
    methods.trigger();
    if (isValid) {
      const { clientId } = methods.getValues();
      const client = await SearchClientInDb({ clientId });
      setClient(client ?? null);
    }
  };
  return (
    <div className={styles.form1}>
      <FormProvider {...methods}>
        <Cedula label="Cédula" name="clientId" />
        <button type="submit" onClick={search} className="btn-style">
          Enviar
        </button>
      </FormProvider>
    </div>
  );
};

const ClientData = ({ client }: { client: ClientDb }) => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: client,
  });

  const { isValid } = methods.formState;
  console.log(client);
  useEffect(() => {
    if (client?.name) {
      const data = {...client,work:client.work? "Si":"No"}
      //@ts-ignore
      methods.reset(data);
    }
  }, [client]);

  if (!client?.name) return null;
  const updateClient = (e: React.FormEvent) => {
    e.preventDefault();
    methods.trigger();
    if (isValid) {
      UpdateClientInDb(methods.getValues());
    }
  };

  return (
    <div className={styles.form2}>
      <FormProvider {...methods}>
        <div className={styles.form}>
          <FullName label="Nombre" name="name" />
          <Cedula label="Cedula" name="clientId" />
          <Email label="Correo Electronico" name="email" />
          <Age label="Edad" name="age" />
          <CivilStatus />
          <WorkStatus />
        </div>
        <button type="submit" onClick={updateClient} className="btn-style">
          Actualizar
        </button>
      </FormProvider>
    </div>
  );
};
