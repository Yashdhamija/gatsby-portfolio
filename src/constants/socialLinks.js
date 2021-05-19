import React from "react"
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://www.github.com/Yashdhamija",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/yashdhamija/",
  },
  // {
  //   id: 3,
  //   icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
  //   url: "https://www.facebook.com/yash.dhamija.31",
  // },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/y_dhamija",
  },
]

export default ({ styleClass }) => {
  const links = data.map(link => {
    return (
      <li key={link.id}>
        <a
          href={link.url}
          target="_blank"
          className="social-link"
          rel="noreferrer"
        >
          {link.icon}
        </a>
      </li>
    )
  })

  // option to put classname for any specific styling
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
