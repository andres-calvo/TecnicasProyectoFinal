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
    </Head>
  );
};
