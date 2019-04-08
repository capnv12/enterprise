/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./css/layout.css"
import MainMenu from "./MainMenu";

const Layout = ({ children }) => (
  <div className='layout'>
    <Header/>
    <main className='main'>{children}</main>
  </div>
)


export default Layout
