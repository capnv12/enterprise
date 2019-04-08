import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainMenu from './MainMenu'
import './css/header.css'

const Header = () => {
  return (<header className='header'>
    <MainMenu />
  </header>);
}

export default Header
