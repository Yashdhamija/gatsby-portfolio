import React from "react"

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
    </div>
  )
}

// TO-DO - For prop, title - add prop type and mark as required

export default Title
