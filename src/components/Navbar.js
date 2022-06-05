import React, { Component, useState, Suspense } from 'react';
import { Link } from "react-router-dom";
import {Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import cookies from 'js-cookie'
import classNames from 'classnames'
import i18n from "i18next";
import {initReactI18next, useTranslation } from "react-i18next";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Login from './LoginForm';
import Regis from './RegisForm';

import logo from '../assets/img/Logo.png';
import america from '../assets/img/america.png';
import indonesia from '../assets/img/indonesia.png';
import { height } from '@mui/system';

require('./Translate')

function MenuNavbar() {
  const [flag, setFlag] = useState('en');
  const {t}= useTranslation();


  const onChange=(event) => {
    setFlag(event.target.value)
    i18n.changeLanguage(event.target.value)
  }
    return (
    // <div className="App">
    <Suspense fallback="loading">
    <div className="lp-container">
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar sticky-top">
            <Container>
            <Navbar.Brand href="#home"> <img src={logo}></img></Navbar.Brand>
            {/* <Container classname="navbar d-flex justify-content-end mr-auto"> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="menu-navbar collapse navbar-collapse justify-content-end text-dark ">
                <Nav.Link href="/">{t("menuNav1")}</Nav.Link>
                <Nav.Link href="/Profile">{t("aboutBg")}</Nav.Link>
                <Nav.Link href="/service">{t("menuNav3")}</Nav.Link>
                {/* <Nav.Link href="#about">{t("menuNav4")}</Nav.Link> */}
                <Nav.Link href="/Contact">{t("menuNav5")}</Nav.Link>
                <Popup modal trigger={<button type="button" className="btn text-white button-contact bg-danger">Masuk</button>} position="right center">
                <Login/>
                </Popup>
                <div>|</div>
                <Popup modal trigger={<button type="button" className="btn text-white button-contact bg-primary">Daftar</button>} position="right center">
                <Regis/>
                </Popup>
                {/* <select name="language" onChange={onChange}> 
                    <option style={{backgroundImage: `url("https://www.worldatlas.com/upload/9f/69/0a/id-flag.jpg")`}} value="en">
                    </option>
                    <option value="id">
                    <img src={indonesia}></img>
                    </option>
                </select> */}
                <FormControl sx={{ m: 1, minWidth: 50 }}>
        {/* <Select
        name="language"
          value={flag}
          onChange={onChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem  value="en"><img style={{width: "30px", height:"auto"}} src={america} /></MenuItem>
          <MenuItem value="id"><img style={{width: "30px", height:"auto"}} src={indonesia} /></MenuItem>
          
        </Select> */}
      </FormControl>
                
                {/* {languages.map(({ code, country_code}) => ( */}
                   {/* <li className="dropdown"><a href="#"><span className="text-secondary"><img src={america}></img></span> 
                   <i className="bi bi-chevron-down"></i></a> 
                  <ul>
                  <li key={""} className=""><a href="#"><img src={indonesia}></img></a>
                  </li>
                  </ul>
                  </li>  */}
          </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div> 
         </Suspense>
// </div>
        );
}
export default MenuNavbar;
