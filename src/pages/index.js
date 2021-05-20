import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
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

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="This is Home page" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="Featured Projects" showLink />
    </Layout>
  )
}
