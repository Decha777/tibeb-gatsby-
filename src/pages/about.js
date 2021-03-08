import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Company from "../components/Company";

const About = ({ data }) => {
    const { allStrapiAbout: { nodes: info } } = data

    return (
        <Layout>
            <SEO title="about" />
            <Company title='about us' data={info[0].info}  />
        </Layout>
    )
}

export default About
export const query = graphql`
{
    allStrapiAbout {
    nodes {
      info
    }
  }
}`