/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const contentStyle = css`
  margin: 0 150px;

  @media (max-width: 576px) {
    margin: auto;
    max-width: 90%;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content" css={contentStyle}>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
