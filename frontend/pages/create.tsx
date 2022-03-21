import React from 'react'
import { Layout } from '../components/layout'
import type { NextPage } from 'next'
import { SEO } from '../components/seo'

const Create:NextPage = () => {
  return (
    <Layout>
      <SEO title="TuBanco | Registrar cliente" description="Registrar clientes para un credito" />
      Registrar
    </Layout>
  )
}

export default Create