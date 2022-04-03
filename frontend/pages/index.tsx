import type { NextPage } from "next";
import { CSSProperties, useEffect, useState } from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { useMediaQuery } from "../hooks";
import { ClientDb } from "../interfaces/client.interface";
import { getClientsData } from "../services/home.service";
import styles from "../styles/pages/home.module.scss";
const rowOrder = [
  "name",
  "age",
  "email",
  "clientId",
  "civilstatus",
  "work",
  "score",
];
const rowMobileOrder= ["name","age","score"]
const header:{[key:string]:string} = {
  name: "Nombre",
  age: "Edad",
  email: "Email",
  clientId: "Cédula",
  civilstatus: "Estado civil",
  work: "Trabaja",
  score: "Puntaje",
};
const Home: NextPage = () => {
  const [tableHeader, setTableHeader] = useState(rowOrder);
  const [colCount, setColCount] = useState(7)
  const [clients, setClients] = useState<Array<ClientDb>>([]);
  const isDesktop = useMediaQuery("(min-width:1024px)")
  useEffect(() => {
    getClientsData().then((resp) => setClients(resp));
  }, []);
  useEffect(() => {
    setTableHeader(isDesktop? rowOrder:rowMobileOrder)
    setColCount(isDesktop? 7:3)
  }, [isDesktop])
  
  return (
    <Layout>
      <SEO title="TuBanco | Home" description="Bienvenido a tu banco" />
      Últimos clientes
      <div>
        <table className={styles.table}>
          <tbody className={styles.grid} style={{"--columns":colCount} as CSSProperties}>
            {/* <tr className={styles.header}> */}
              {tableHeader.map(col => <td key={col} title={header[col]}>{header[col]}</td>)}
            {/* </tr> */}
            {clients.map((client) => {
              return <ClientRow key={client._id} client={client} tableHeader={tableHeader}/>;
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Home;
const ClientRow = ({client,tableHeader}:{client:{[key:string]:any},tableHeader:string[]})=>{
  return (
    <>{tableHeader.map(col => {
      const value = ClientCol({data:client[col]})
      return (
        <td key={col+client._id} title={value}>{value}</td>
      )})}
    </>
  )
}
const ClientCol = ({data}:{data:any})=>{
  if(typeof data == "boolean"){

    return data? "Si":"No"
  }
  return data
}