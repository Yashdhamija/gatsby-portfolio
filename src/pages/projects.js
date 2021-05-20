import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        github
        description
        stack {
          id
          tech
        }
        url
        title
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

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <Layout>
      <SEO title="My Projects" description="These are my projects" />
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export default ProjectsPage
