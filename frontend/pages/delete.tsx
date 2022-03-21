import type { NextPage } from 'next'
import React from 'react'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'

const Delete:NextPage = () => {
  return (
    <Layout>
      <SEO title="TuBanco | Eliminar cliente" description="Eliminar cliente del banco" />
      Eliminar Cliente
    </Layout>
  )
}

export default Delete