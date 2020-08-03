/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import DesignImg from "../images/design-img.png"
import ArtImg from "../images/art-img.png"

const indexPageStyle = css`
  .text {
    margin-top: 64px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .display {
      margin-bottom: 36px;
    }
  }

  .links {
    margin-top: 48px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 96px;

    .link-card {
      position: relative;
      border-radius: 24px;
      overflow: hidden;

      .image {
        width: 100%;
        padding-top: 66%;
        background-size: cover;
        background-position: center;
        background-color: rgba(0,0,0,0.7);

        filter: blur(4px);
        -webkit-filter: blur(4px);

        transition: all 0.3s ease-out;

        &:hover {
          background-color: transparent;
          filter: blur(0px);
          -webkit-filter: blur(0px);
        }

        &#design {
          background-image: url(${DesignImg});
        }

        &#art {
          background-image: url(${ArtImg});
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content" css={indexPageStyle}>
      <div className="text">
        <span className="display">Calvin Stewart</span>
        <h3>Product Designer. UX/UI Designer. Artist.</h3>
      </div>
      <div className="links">
        <div className="link-card">
          <div className="image" id="design"></div>
          <h1>Design</h1>
        </div>
        <div className="link-card">
          <div className="image" id="art"></div>
          <h1>Art</h1>
        </div>
      </div>
    </div>

  </Layout>
)

export default IndexPage
