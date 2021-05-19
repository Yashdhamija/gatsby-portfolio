import React from "react"
import Title from "./Title"
import { useState } from "react"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

export const query = graphql`
  {
    allStrapiJobs(sort: { order: DESC, fields: id }) {
      nodes {
        strapiId
        company
        date
        position
        description {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [index, setIndex] = useState(0)
  const { company, position, date, description } = jobs[index]

  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, curIndex) => {
            return (
              <button
                key={job.strapiId}
                onClick={() => setIndex(curIndex)}
                className={`job-btn ${index === curIndex && "active-btn"}`}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map(desc => {
            return (
              <div key={desc.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{desc.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
