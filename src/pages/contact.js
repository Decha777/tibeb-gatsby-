import React from "react"
import Layout from "../components/Layout"
import ContactForm from '../components/ContactForm'
import SEO from "../components/SEO"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactForm />
    </Layout>
  )
}

export default Contact
