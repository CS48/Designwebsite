/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const ArtPageStyle = css`
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
    grid-template-rows: 80px auto 80px; 
    
    
    

    .link-card {
      width: 100%;
      height: auto;
      align-self: center;
      
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
        


      h1 {
        text-align: center;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;




const ArtPage = () => (
    <Layout>
      <SEO title="Art" />
      <div className="Content" css={ArtPageStyle} >
        <div className="text" >
          <span className="display">Art</span>
        </div>
        <div className="links">
          <h1>Coming Soon</h1>
          
        </div>..
        
      </div>
    </Layout>
  )
  
  export default ArtPage