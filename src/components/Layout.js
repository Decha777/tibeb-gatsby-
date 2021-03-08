import React from "react"
import { ThemeProvider } from 'styled-components';
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { GlobalStyle, theme } from "../globalStyles";
import "../main.css"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
