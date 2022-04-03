import type { NextPage } from 'next'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Cedula, FullName, Email, Age, CivilStatus, WorkStatus } from '../components/form-inputs'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { ClientDb } from '../interfaces/client.interface'
import { DeleteClientInDb } from '../services/delete.service'
import { SearchClientInDb, UpdateClientInDb } from '../services/update.service'
import styles from "../styles/pages/update.module.scss"
const Delete:NextPage = () => {
  const [client, setClient] = useState<ClientDb>({} as ClientDb);

  return (
    <Layout>
      <SEO title="TuBanco | Eliminar cliente" description="Eliminar cliente del banco" />
      Eliminar Cliente
      <SearchClient setClient={setClient} />
      <ClientData client={client} />
    </Layout>
  )
}

export default Delete

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
  const formRef = useRef<HTMLDivElement>(null)
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
      const inputs =formRef.current?.querySelectorAll("input")
      inputs?.forEach(input => input.disabled=true)

    }
  }, [client]);

  if (!client?.name) return null;
  const updateClient = async(e: React.FormEvent) => {
    e.preventDefault();
    methods.trigger();
    if (isValid) {
      await DeleteClientInDb(client);
    }
  };

  return (
    <div className={`${styles.form2} ${styles.formDelete}`}>
      <FormProvider {...methods}>
        <div className={styles.form} ref={formRef}>
          <FullName label="Nombre" name="name" />
          <Cedula label="Cedula" name="clientId" />
          <Email label="Correo Electronico" name="email" />
          <Age label="Edad" name="age" />
          <CivilStatus />
          <WorkStatus />
        </div>
        <button type="submit" onClick={updateClient} className="btn-style">
          Eliminar
        </button>
      </FormProvider>
    </div>
  );
};