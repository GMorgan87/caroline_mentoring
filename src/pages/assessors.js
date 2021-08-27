import React from "react"
import Layout from "../components/layout"

export default props => {
  return (
    <Layout pageTitle="Assessors" pageDescription="Needs Assessors">
      <div>Needs Assessors</div>
      <div>
        At Clear Mind Mentoring we use a tailored approach in matching individual student needs with suitably qualified Non-Medical support staff.
        Our support staff come from a range of professional backgroundsincluding Psychology, Teaching, Counselling and Occupational Therapy.
        As well as offering professional knowledge, our staff have undertaken extensive post-graduate training and engage in ongoing relevant Continuing Professional Development (CPD).  
      </div>
      <div>
        <div id="dsaRates">Current DSA NMHP rates:</div>
        <table>
          <thead>
            <tr>
              <td>Suport Role</td>
              <td>Rate</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Specialist Mentor - AS</td>
              <td>£50</td>
            </tr>
            <tr>
              <td>Specialist Mentor - MH</td>
              <td>£50</td>
            </tr>
          </tbody>
        </table>
        <div>
          We can provide support at the best place to meet the student's needs and make sure it is as accessible as possible.
        </div>
        <div>
          <ul>
            <li>In Person at the student's University or College</li>
            <li>Online via video link or by phone</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
