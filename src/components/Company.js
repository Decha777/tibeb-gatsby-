import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components';
import Title from './Title'

const StyledCompany = styled.div`
          background-color:${({ theme }) => theme.colors.grey[900]};
          color:${({ theme }) => theme.colors.primary[500]};  
          margin-top: -.1rem;
          padding: 2rem 0;
          font-family: Aldrich;
        
         h1,h2{
              margin:1rem 0;
              text-transform:capitalize;
              text-align: center;
            }  
            .company{
                width: 80vw;
                max-width: 100%;
                margin: 0 auto;
                padding: 1rem;
            }
            .company > *{
                color:${({ theme }) => theme.colors.primary[500]};           
          }
          .company ol {
              margin-left: 4rem;
          }
          .company h3{
              margin-top: 2rem;
          }
`;


const Company = ({ data ,title }) => {
    return (
        <div>
            <StyledCompany>
                <Title title={title} />
                <ReactMarkdown
                    source={data}
                    transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
                    className='company'
                />
            </StyledCompany>
        </div>
    )
}


export default Company

