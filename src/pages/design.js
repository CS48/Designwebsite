/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import MovinImg from "../images/movin.png"

const DesignPageStyle = css`
  .text {
    margin-top: 64px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .display {
      margin-bottom: 36px;
      border-bottom: solid 3px white;
    }
  }

  .links {
    margin-top: 48px;

    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 96px;

    .link-card {
      position: relative;
      border-radius: 24px;
      overflow: hidden;

      .image {
        max-width: 100%;
        max-height: 100%;
        
      
        background-size: cover;
        background-position: center;
        background-color: rgba(0,0,0,0.7);

        transition: all 0.3s ease-out;

        &:hover {
          background-color: transparent;
        }

        &#movin {
          background-image: url(${MovinImg});
        }

      }

      h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

const DesignPage = () => (
  <Layout>
    <SEO title="Design" />
    <div className="Content" css={DesignPageStyle} >
      <div className="text" >
        <span className="display">Design</span>
      </div>
      <div className="links">
        <div className="link-card">
          <div className="image" id="movin"></div>
        </div>
        <div className="link-card">
          <h1>Daily UI Challenges</h1>
        </div>
      </div>
      
    </div>
  </Layout>
)

export default DesignPage
