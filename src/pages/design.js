/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import MovinLogo from "../images/movinlogo.png"
import MovinLanding from "../images/movinlanding.png"
import MovinDeck from "../images/movindeck.png"

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
      width: 100%;
      float: left;
      margin: 0;
      padding: 0;
      position: relative;
      background-color: rgba(0,0,0,0.7);

      .image {
        display: block;
       
       
        padding-top: 40%;
        background-size: cover;
        background-position: center;
        background-color: rgba(0,0,0,0.7);

        transition: all 0.3s ease-out;

        &:hover {
          background-color: transparent;
        }

        &#logo {
          background-image: url(${MovinLogo});
          height: 3%;
          width: 3%;
          padding-left: 33%;
          float: left;
        }
        
        &#landingpage {
          background-image: url(${MovinLanding});
          height: 80%;
          width: auto;
          float: right;
        }

        &#deckpage {
          background-image: url(${MovinDeck});
          height: 80%;
          width: auto;
          
          float: right;
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
          <div className="image" id="logo"></div>
          <div className="image" id="deckpage"></div>
          <div className="image" id="landingpage"></div>
          <h1>Movin'</h1>
        </div>
        <div className="link-card">
          <h1>Daily UI Challenges</h1>
        </div>
      </div>
      
    </div>
  </Layout>
)

export default DesignPage
