/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import MovinWriteup from "../images/Movinpng.png" 


const MovinPageStyle = css`
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

  .image {
    display: block;
    width: 100%;
   

    background-size: cover;
    background-position: center;
    background-color: transparent;
    

    &#writeup {
      background-image: url(${MovinWriteup});
      height: 8472px;
      width: 100%;
  
    }

  
  }

`;


const MovinPage = () => (
    <Layout>
      <SEO title="Design" />
      <div className="Content" css={MovinPageStyle} >
          <div className="image" id="writeup"></div>

       
        
      </div>
    </Layout>
  )
  
  export default MovinPage