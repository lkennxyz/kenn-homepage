import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import twitter from "../images/twitter-icon.svg"
import github from "../images/github-icon.svg"
import linkedIn from "../images/linkedin-icon.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`dev`, `javascript`]} />
    <div style={{ maxWidth: `300px`, margin: `auto`, borderRadius: `50%` }}>
      <Image className="mainPic"/>
    </div>
    <div className="links">
      <div className="me">
        <a href="https://blog.kenn.dev">
          blog
        </a>
        <a href="https://github.com/lkennxyz/azure-stt-helper">
          azure STT helper
        </a>
        <a href="https://github.com/lkennxyz/azure-sst-helper-example">
          azure STT helper example
        </a>
        <a href="https://overkill.kenn.dev">
          Project Overkill
        </a>
      </div>
      <div className="social">
        <a href="https://twitter.com/lkennxyz">
          <span className="icon">
            <img src={twitter} alt="twitter"/>
          </span>
          <p>twitter</p>
        </a>
        <a href="https://github.com/lkennxyz">
          <span className="icon">
            <img src={github} alt="github"/>
          </span>
          <p>github</p>
        </a>
        <a href="https://www.linkedin.com/in/lkennxyz">
          <span className="icon">
            <img src={linkedIn} alt="linkedin"/>
          </span>
          <p>linkedIn</p>
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
