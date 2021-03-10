import React from "react"
import { Link } from 'gatsby'
import logo from "../images/logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import styled from 'styled-components';
import digital from '../images/digital-7.ttf'

const StyledText = styled.span`
    @font-face {
      font-family: "digital-7";
      src: url(${digital}) format("truetype");
    }
    font-family: "digital-7";
    color:${({ theme }) => theme.colors.primary[500]}; 
    text-transform:capitalize;
    font-size: 1.7rem;
    margin-left: 1rem;
    font-weight: 700;
    letter-spacing: .4rem;
`;
const NavBar = styled.nav`
  background-color:${({ theme }) => theme.colors.grey[900]};
  color:${({ theme }) => theme.colors.primary[500]};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  z-index: 200;
`;


const Navbar = ({ toggleSidebar }) => {
  return (
    <NavBar>
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>
          <StyledText>tibeb technologies</StyledText>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </NavBar>
  )
}

export default Navbar