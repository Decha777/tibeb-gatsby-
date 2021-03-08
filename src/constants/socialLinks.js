import React from "react"
import {
  FaFacebook,
  FaTelegram
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebook className="social-icon"></FaFacebook>,
    url: "https://www.twitter.com/houseofc0des/",
  },
  {
    id: 2,
    icon: <FaTelegram className="social-icon"></FaTelegram>,
    url: "https://t.me/houseofCodes/",
  },


]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
