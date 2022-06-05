import React, { Component, useState, Suspense } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "i18next";
import {initReactI18next, useTranslation } from "react-i18next";

import profileImage from '../assets/img/profile.png';
import aboutProfile from '../assets/img/about.png';
import check from '../assets/img/check.png';

require('./Translate')

function Profile() {
  const {t}= useTranslation();

    return (
<Suspense fallback="loading">    
<div className="Profile">
  {/* -----background------ */}
<div className="background">
<div className="position-relative Header">
            <img className="cover" src={profileImage} alt="" />
            <div className="position-absolute showcase-container">
            <div className="text-header">
            <h1 className="text-head">{t("bgProfile")}</h1>
            </div>
            </div>
</div>
</div>

<div className="about">

<div className="container" data-aos="fade-up">
  <div className="row gx-0">
  <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
      <div className="image">
    <img className="img-fluid" src={aboutProfile} alt="" />
    </div>
    </div>
    <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div className="content">
        <h3>{t("aboutBg")}</h3>
        <h2>{t("aboutTitle")}</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, habitasse nec mauris sagittis imperdiet lobortis porttitor. Ipsum mi sed aliquet ut. Turpis viverra volutpat sed eu porta morbi egestas. Eros, ut hac rutrum ut augue vitae, nec, ut. Nibh nibh quam sed massa, tincidunt sit aenean. Ut.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, habitasse nec mauris sagittis imperdiet lobortis porttitor. Ipsum mi sed aliquet ut. Turpis viverra volutpat sed eu porta morbi egestas. Eros, ut hac rutrum ut augue vitae, nec, ut. Nibh nibh quam sed massa, tincidunt sit aenean. Ut.
        </p>
      </div>
    </div>

    
  </div>
</div>
</div>
{/* ------contents-------- */}

<div className="content">
  <div className="content-feature">
  <div className="d-flex flex-row justify-content-center w-75 mx-auto">
    <div className="vision mx-auto">
  <h5 className="text-center">{t("profileTitle1")}</h5>

          <div className=" d-flex flex-row w-100">
            <div className="">
            <div className="d-flex justify-content-center">
            <div className="icon d-flex justify-content-end align-items-center">
                <img className="" src={check} alt="" />
              </div>  
            </div>
            </div>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>

            <div className=" d-flex flex-row w-100">
            <div className="">
            <div className="d-flex justify-content-center">
            <div className="icon d-flex justify-content-end align-items-center">
                <img className="" src={check} alt="" />
              </div>  
            </div>
            </div>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
          
            <div className=" d-flex flex-row w-100">
            <div className="">
            <div className="d-flex justify-content-center">
            <div className="icon d-flex justify-content-end align-items-center">
                <img className="" src={check} alt="" />
              </div>  
            </div>
            </div>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
    </div>
          
          <div className='misson mx-auto'>
          <h5 className="text-center">{t("profileTitle2")}</h5>
          <div className="d-flex flex-row w-100">
            <div className="">
              <div className="d-flex justify-content-center">
            <div className="icon d-flex justify-content-end align-items-center">
                <img className="" src={check} alt="" />
              </div>  
            </div>
            </div>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>

            <div className="d-flex flex-row w-100">
            <div className="">
              <div className="d-flex justify-content-center">
            <div className="icon d-flex justify-content-end align-items-center">
                <img className="" src={check} alt="" />
              </div>  
            </div>
            </div>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>

            <div className="d-flex flex-row w-100">
            <div className="">
              <div className="d-flex justify-content-center">
            <div className="icon d-flex justify-content-end align-items-center">
                <img className="" src={check} alt="" />
              </div>  
            </div>
            </div>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
        </div>
  </div>
  </div>
</div>
</div>
</Suspense>

    );
}
export default Profile;

