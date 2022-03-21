import type { NextPage } from "next";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO title="TuBanco | Home" description="Bienvenido a tu banco" />
      Hola
    </Layout>
  );
};

export default Home;
