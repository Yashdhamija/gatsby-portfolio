import React from "react"
import { Link } from "gatsby"
// import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { StaticImage } from "gatsby-plugin-image"

// const query = graphql`
//   {
//     file(relativePath: { eq: "hero-img.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const Hero = () => {
  // const {
  //   file: {
  //     childImageSharp: { fluid },
  //   },
  // } = useStaticQuery(query)

  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm yash</h1>
            {/* TO-DO - ADD A TAGLINE ?? */}
            <h4>Software engineer and UI/UX Designer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <StaticImage
          src="../assets/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
        {/* <Image fluid={fluid} className="hero-img" /> */}
      </section>
    </header>
  )
}

export default Hero
