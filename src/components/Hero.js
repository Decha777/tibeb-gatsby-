import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
// import Gif from '../images/matrix.jfif'
import { graphql, useStaticQuery } from "gatsby"

import styled from 'styled-components';

const StyledHero = styled.div`
     color:${({ theme }) => theme.colors.primary[500]}; 
     @media (max-width: 768px) {
          .section-center{
       line-height: 1px;
       padding: .5rem;
       margin: 2 0;
      
     }
     
}

`;


const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <StyledHero >
      <header className="hero">
        {/* {Gif ? <img src={Gif} alt="hero image" className="hero-img" /> :
        } */}
        <Image fluid={fluid} className="hero-img" />
        <div className="section-center hero-center">
          <h1>WELCOME TO Tibeb Technologies</h1>
          <h3>MULTI-SERVICE IT COMPANY</h3>
          <Link to="/about" className="btn">learn more</Link>
        </div>
      </header>
    </StyledHero>
  )
}

export default Hero
