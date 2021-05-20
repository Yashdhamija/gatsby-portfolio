import React from "react"
import { Link } from "gatsby"

const resume_link =
  "https://yashdhamija.github.io/portfolio/YashDhamija_Resume.pdf"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  // {
  //   id: 4,
  //   text: "blog",
  //   url: "/blog/",
  // },
  {
    id: 4,
    text: "contact",
    url: "/contact/",
  },
  // {
  //   id: 4,
  //   text: "Resume",
  //   url: "https://yashdhamija.github.io/portfolio/YashDhamija_Resume.pdf",
  // },
]

export default ({ styleClass, toggleSidebar }) => {
  const tempLinks = data.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url} onClick={toggleSidebar}>
          {link.text}
        </Link>
      </li>
    )
  })

  // option of adding class, for styling (different for when used by sidebar on smaller screens vs navbar)
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
      <li>
        <a href={resume_link} target="_blanf" rel="noreferrer">
          Resume
        </a>
      </li>
    </ul>
  )
}
