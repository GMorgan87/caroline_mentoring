import React from "react"
import Layout from "../components/layout"


export default props => {

  return (
    <Layout pageTitle="Clear Mind Mentoring" pageDescription="Learn more about us">
      <div className="buttons">
        <a href="/students">
          <div className="button link">Students</div>
        </a>
        <a href="/assessors">
          <div className="button link">DSA Rates</div>
        </a>
      </div>
    </Layout>
  )
}
