import type { NextPage } from "next";
import { useEffect } from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { getClientsData } from "../services/home.service";

const Home: NextPage = () => {
  useEffect(() => {
    getClientsData().then((resp) => console.log(resp));
  }, []);

  return (
    <Layout>
      <SEO title="TuBanco | Home" description="Bienvenido a tu banco" />
      Hola
    </Layout>
  );
};

export default Home;
