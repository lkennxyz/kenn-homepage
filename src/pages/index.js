import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from '../components/project';
import { social, projects } from '../data/links.json';

const IndexPage = () => (
  <Layout social={social}>
    <SEO title="Home" keywords={[`dev`, `javascript`]} />
    <div className="ContentBody">
      <div className="Projects">
        {
          projects.map((el, i) => (
            <Project
              key={`project-${i}`}
              project={el}
            />
          ))
        }
      </div>
    </div>
  </Layout>
)

export default IndexPage
