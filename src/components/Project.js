import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
// import { StaticImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({ title, description, github, url, image, stack, index }) => {
  // console.log(image)
  // const img = image

  return (
    <article className="project">
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      {/* {image && (
        <StaticImage
          src={img}
          alt="project-image"
          className="project-img"
          placeholder="blurred"
        />
      )} */}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "project"}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.tech}</span>
          })}
        </div>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithubSquare className="project-icon" />
            </a>
          )}
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              <FaShareSquare className="project-icon" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  // github: PropTypes.string.isRequired,
  // url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
