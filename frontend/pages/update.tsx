import React from 'react'
import { Layout } from '../components/layout'
import type { NextPage } from 'next'
import { SEO } from '../components/seo'

const Update:NextPage = () => {
  return (
    <Layout>
      <SEO title="TuBanco | Actualizar cliente" description="Actualiza los datos de los clientes registrados" />
      Update
    </Layout>
  )
}

export default Update