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
import Cntdwn from "../images/screen1.png"
import UserProfile from "../images/User Profile.png"


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

    .Nunito {
      margin-top: 10%;
      margin-right: 14%;
    }

    .dpagetext {
      margin-top: -63px;
      align-items: left;
    }
  }


  .links {
    margin-top: 48px;

    display: flex;
    gap: 96px;
    flex-direction: column;
    align-items: center;
    

    .link-card {
      width: 100%;
      height: auto;
      
      border-radius: 24px;
     
      margin: 0;
      padding: 0;
      position: relative;
      background-color: rgba(0,0,0,0.7);

      .image {
        display: block;
       
       

        background-size: cover;
        background-position: center;
        background-color: transparent;
        

        &#logo {
          
          background-image: url(${MovinLogo});
          height: auto;
          width: auto;
          padding-left: 24%;
          padding-top: 33%;
          float: left;
        }
        
        &#landingpage {
          background-image: url(${MovinLanding});
          height: 300px;
          width: 13%;
          margin-top: 4%;
          margin-right 3%;
          float: right;
          
        }

        &#deckpage {
          background-image: url(${MovinDeck});
          height: 300px;
          width: 13%;
          margin-top: 4%;
          margin-right 3%;
          float: right;
          
        }

        &#cntdwn {
          background-image: url(${Cntdwn});
          height: 300px;
          width: 13%;
          margin-top: 1%;
          margin-right 3%;
          float: right;
        }

      
      }

      .h1 {
        position: absolute;
        text-align: left;
        margin-top: 13%;

       
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
          <div className="text">
            <span className="Nunito">Movin'</span>
          </div>
        </div>
        <div className="link-card">
          <div className="image" id="cntdwn"></div>
          <div className="image" id="userprofile"></div>
          <div className="text">
            <span className="dpagetext">Daily UI Challenges</span>
          </div>
        </div>
      </div>
      
    </div>
  </Layout>
)

export default DesignPage
