import Head from "next/head";
import React from "react";
interface ISEO {
  title: string;
  description: string;
}
export const SEO: React.FunctionComponent<ISEO> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};
