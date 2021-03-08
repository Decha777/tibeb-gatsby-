import React from "react"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h2>Follow Us</h2>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <span>
          Designed by: Tibeb Technologies
        </span>
        <span>
          Copyright. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
