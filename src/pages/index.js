import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Services from "../components/Services"
import Blogs from "../components/Blogs"
import Hero from "../components/Hero"
import SEO from '../components/SEO'
import Company from "../components/Company"
import ContactForm from "../components/ContactForm"

import styled from 'styled-components';
import img from '../images/Abract01.png'


const StyledBg = styled.div`
 background:url(${img}) no-repeat ${({theme}) => theme.colors.grey[100]};
 background-size:contain;
 background-position:right;
 width: 100vw;
 max-width:100%;
 padding:2rem 0;
 
`;

export default ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
    allStrapiAbout: { nodes: info }
  } = data
    


  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Hero />
      <Company data={info[0].info}  title='our company' />
      <StyledBg>
        <Blogs data={blogs} title="recent blogs" showLink />
      </StyledBg>
      <Services />
      <ContactForm />
    </Layout>
  )
}
export const query = graphql`
  {
  allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
    nodes {
      slug
      content
      desc
      date(formatString: "MMMM Do")
      id
      title
      tag{
        id
        name
      }
      image {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
allStrapiAbout {
  nodes {
    info
        }
    }
  }
`
