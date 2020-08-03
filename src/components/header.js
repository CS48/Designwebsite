/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import LinkedIn from '../images/social/linkedin.svg'
import Dribbble from '../images/social/dribbble.svg'

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;

    li {
      margin-right: 24px;

      &:last-of-type {
        margin-right: 0;
      }

      &#home {
        font-size: 20px;
        font-weight: 700;
      }

      a {
        text-decoration: none;

        &:hover {
          border-bottom: solid 1px white;
        }
      }
    }
  }

  .social-icons {
    a {
      margin-right: 24px;

      &:last-of-type {
        margin-right: 0;
      }

      img {
        width: 32px;
      }
    }
  }
`;

const Header = () => {
  return (
    <header css={headerStyle}>
      <ul>
        <li id="home"><Link to='/'>Calvin Stewart</Link></li>
        <li><Link to='/'>Resume</Link></li>
      </ul>
      <div className="social-icons">
        <Link to='https://www.linkedin.com/in/calvinmstewart'><img src={LinkedIn} alt="LinkedIn" /></Link>
        <Link to='https://dribbble.com/CS_dribble'><img src={Dribbble} alt="Dribbble" /></Link>
      </div>
    </header>
  );
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
