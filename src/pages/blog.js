import React, {
  useState
} from "react"

import Layout from '../components/Layout'
import Title from "../components/Title"
import SEO from "../components/SEO"
import { Button } from '../components/ui'

import { graphql, Link } from "gatsby"
import Image from 'gatsby-image'

import { MdDateRange } from 'react-icons/md'
import { AiFillTag } from 'react-icons/ai'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

import styled from 'styled-components/macro';


const Styledblog = styled.main`
background-color:${({ theme }) => theme.colors.grey[100]};
display: grid;
grid-template-columns: 2fr 1fr;
padding: 3rem;
height:fit-content;
min-height: calc(100vh - 9rem);
@media (max-width: 786px){
grid-template-columns:1fr;
}

`;
const StyledCenter = styled.section`

display:flex;
flex-flow: column nowrap;

.hr:not(first-child){
  height: 1px;
  margin: 0 auto;
  width: 93%;
  background-color: #0c0b0b;
}
  
`;

const StyledSide = styled.section`
background-color:${({ theme }) => theme.colors.grey[200]};
display:flex;
flex-flow: column nowrap;
margin: auto 0;
justify-content: space-around;
align-items:center;
`;
const StyledPost = styled.article`
height: fit-content;
width:70%;
margin:auto 0;
display:flex;
flex-flow:column nowrap;
align-items:center;

.sm-card{
  padding:.2rem;
  margin: 2rem 0;
  height:fit-content;
  display:flex;
  flex-flow: column nowrap;
  justify-content:center;
  background-color: #fff;
  img{
    z-index: 0;
  }
  .date{
      width:fit-content;
      display:flex;
      flex-flow: row wrap;
      justify-content:flex-start;
      margin:-1.5rem 0;
      z-index: 10;
      color:black;
      background:white;
      border: 1px var(--clr-primary-1) solid;
      span{
        margin:0 .4rem ;
        font-size: .95rem;
        text-transform:capitalize;

        *{
          margin: 0 .3rem;
          align-self:center;
        }
      }
  }
  h4{
  margin-top: 1.7rem;
  font-size:1.2rem;
  color:var(--clr-primary-1);
  }
}
`;
const StyledCategory = styled.article`
height: 30rem;
margin: 1rem;
display:flex;
flex-flow: column nowrap;
justify-content:center;

h4{
  text-align: center;
  font-size:1.7rem;;
  margin:1rem 0;
}
ul{
  display:flex;
  flex-flow: row wrap;
  li{
    background-color: var(--clr-secondary-1);
    padding: .5rem 2rem;
    margin: .5rem 1rem;
    border-radius: 3rem;
    cursor:pointer;
    transition: ${({ theme }) => theme.variables.transition};

    :hover{
     box-shadow:${({ theme }) => theme.boxShadow.xl};
    }
  }
}

`;


const StyledCard = styled.article`
background-color:${({ theme }) => theme.colors.white};
height: fit-content;
margin: 2rem 2.5rem;
padding: .5rem;
display:flex;
flex-flow: column nowrap;
overflow:hidden;

 .blog-img {
   z-index: 0;
   height:25rem;
   overflow:hidden;
   .img{
     transition:${({ theme }) => theme.variables.transition};
     height:100%;
     width:100%;
     background-position:center;
     background-size:cover;
     :hover{
       transform:scale(1.2);
  
     }
   }

 }
 .date{
   width:fit-content;
    align-self:center;
   display: flex;
   justify-content: space-between;
   background-color:var(--clr-secondary-1);
  
   text-align:center;
   padding: .8rem 2rem;;
   margin : -2.3rem 0;
   z-index: 2;
   border-radius: 4rem;
   span{
     text-transform: capitalize;
     margin:0 1rem;
   }
 }
  h3{
    margin-top:3rem ;
    margin-bottom:1rem 0;
  }
 p{
   color:${({ theme }) => theme.colors.grey[600]};
 }

`;

const StyledPagination = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
li  {  
    width:fit-content;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 1rem 1.5rem;
    margin:.3rem;
    border-radius:50%;
    cursor: pointer;
    list-style:none;
        .active {
            color: white;
            background-color: ${({ theme }) => theme.colors.primary[500]};
        }

}
 
`;

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  const allCategories = ['all', ...new Set(blogs.map((item) => item.tag[0].name))];
  const popularpost = blogs.filter((item) => item.popular === true);
  const [blogItems, setblogItems] = useState(blogs);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setblogItems(blogs);
      return;
    }
    const newItems = blogs.filter((item) => item.tag[0].name === category);
    setblogItems(newItems);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogItems.slice(indexOfFirstItem, indexOfLastItem);


  const pages = [];
  for (let i = 1; i <= Math.ceil(blogItems.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  }

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + 1);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn} > &hellip;</li>
  }
  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}>&hellip</li>
  }

  const handleLoadMore = () => {
    setItemsPerPage(itemsPerPage + 5)
  }
  const renderPageNumbers = pages.map(number => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (<li
        key={number}
        id={number}
        onClick={handleClick}
        className={currentPage === number ? 'active' : null}
      >{number}</li>)
    }
    else { return null; }
  })


  return (
    <Layout>
      <SEO title="Blog" />
      <Styledblog>
        <StyledCenter>
          <Title title='blogs' />
          {currentItems.map(item => {
            const { id, title, image, date, tag, slug, content } = item
            return (<section key={id}>
              <hr className='hr' />
              <StyledCard key={id}>
                {image && (
                  <div className="blog-img">
                    <Image fluid={image.childImageSharp.fluid} className='img' />
                  </div>
                )}
                <div className="date">
                  <span><MdDateRange></MdDateRange> {date}</span>
                  <span><AiFillTag></AiFillTag>{tag[0].name}</span>
                </div>
                <h3>{title}</h3>
                <p className="richtex">{content.slice(0, 240).concat("...")}</p>
                <Link to={`/blogs/${slug}`}>
                  <Button btnWidth="fit-content">read more <AiOutlineRight></AiOutlineRight></Button>
                </Link>
              </StyledCard>
            </section>)
          })
          }
          <StyledPagination >
            <li>
              <Button
                btnWidth="fit-content"
                onClick={handlePrevbtn}
                disabled={currentPage === pages[0] ? true : false}
                className='btn '
              ><AiOutlineLeft></AiOutlineLeft></Button>
              {pageDecrementBtn}
              {renderPageNumbers}
              {pageIncrementBtn}

              <Button
                btnWidth="fit-content"

                onClick={handleNextbtn}
                disabled={currentPage === pages[pages.length - 1] ? true : false}

              >
                <AiOutlineRight></AiOutlineRight>
              </Button>
            </li>

          </StyledPagination>
        </StyledCenter>
        <StyledSide>
          <StyledCategory>
            <Title title='popular tags' />
            <ul>
              {categories.map((category, index) => {
                return (
                  <ul key={index}>
                    <li onClick={() => filterItems(category)}>{category}</li>
                  </ul>

                );
              })}
            </ul>
          </StyledCategory>
          <StyledPost>
            <Title title='popular posts' />
            {
              popularpost.map(blog => {
                return (
                  <div className="sm-card" key={blog.id}>
                    {blog.image && (
                      <Image fluid={blog.image.childImageSharp.fluid} className="blog-img" />
                    )}
                    <div className="date">
                      <span><MdDateRange></MdDateRange>{blog.date}</span>
                      <span><AiFillTag></AiFillTag>{blog.tag[0].name}</span>
                    </div>
                    <Link to={`/blogs/${blog.slug}`}>
                      <h4>{blog.title}</h4>
                    </Link>
                  </div>
                )
              })
            }
          </StyledPost>
        </StyledSide>
      </Styledblog>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        desc
        content
        date(formatString: "MMMM Do, YYYY")
        id
        title
        popular
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
  }
`
export default Blog
