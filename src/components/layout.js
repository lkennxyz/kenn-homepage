/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import { Theme } from "./theme";
import Header from "./header";
import "../styles/app.scss";

const Layout = ({ social, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
          }
        }
      }
    `}
    render={data => {
      const [dark, setDark] = useState(false);
      const [big, setBig] = useState(false);
      useEffect(() => {
        if (document.getElementsByTagName("body")[0].height > window.innerHeight)
          setBig(() => true);
        const systemDark = window.matchMedia('(prefers-color-scheme : dark)');
        setDark(systemDark.matches);
      }, []);
      return (
        <Theme dark={dark} big={big}>
          <div className="Layout">
            <Header dark={dark} setDark={setDark} siteTitle={data.site.siteMetadata.title} social={social} />
            <div className="Content">{children}</div>
          </div>
        </Theme>
      );
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
