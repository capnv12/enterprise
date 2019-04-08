import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'

export default ({pageContext}) => (
    <Layout>
        <h1>{pageContext.title}</h1>
    </Layout>
)