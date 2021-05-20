import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="Opps!" description="This is error page" />
      <main className="error-page">
        <div className="error-container">
          <h1>Oops! The path does not exist!</h1>
          <Link to="/" className="btn">
            Home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
