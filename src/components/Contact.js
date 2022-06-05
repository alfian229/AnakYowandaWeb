import React, { useEffect, useState,Component, Suspense } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import i18n from "i18next";
import {initReactI18next, useTranslation } from "react-i18next";


import contactImage from '../assets/img/contactImage.png';
import location from '../assets/img/location.png';
import emailImg from '../assets/img/email.png';
import phoneImg from '../assets/img/phone.png';

require('./Translate')

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  function uploadData(){
    if(!name || !email || !phone || !comment ){
        alert('Semua Input Field Harus Terisi.');
    } else{
      const variables = {
        name: name,
        email : email,
        phone : phone,
        message : comment
      }
        axios
        .post('http://192.168.195.195:5000/api/v1/contact/', variables)
        .then((res) => {
            console.log("sukses");
            console.log(res.data);
            alert('Data terkirim. Terima kasih atas pertanyaan, kritik, dan saran yang anda berikan.');
            setName("");
            setEmail("");
            setPhone("");
            setComment("");
        }).catch((err) => {
            console.log(err);
            alert('Coba Lagi, Data Gagal Dikirim.');
        });
    }
  }

  const {t}= useTranslation();
  
    return (
<Suspense fallback="loading">
<div className="contactPage">

{/* ----------background-------- */}
<div className="background">
<div className="position-relative Header">
            <img className="cover" src={contactImage} alt="" />
            <div className="position-absolute showcase-container">
            <div className="text-header">
            <h1 className="text-head">{t("contactBg")}</h1>
            </div>
            </div>
</div>
</div>
<section id="contact" className="contact mb-5">
      <div className="container">
        <div className="row pt-4 mb-4">
          <div className="col">
            <h2>{t("contactTitle")}</h2>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-6" data-aos="fade-left" data-aos-duration="2000">
            <form className="contact input">
              <div className="form-group">
                <label for="name">{t("name")}</label>
                <input type="text" className="form-control" id="name" placeholder={t("contentName")}
                        value={name} onChange={(e) => setName(e.target.value)}>
                </input>
              </div>
              <div className="form-group mt-2">
                <label for="email">{t("email")}</label>
                <input type="text" className="form-control" id="email" placeholder={t("contentEmail")}
                        value={email} onChange={(e) => setEmail(e.target.value)}>
                </input>
              </div>
              <div className="form-group mt-2">
                <label for="phone">{t("phone")}</label>
                <input type="text" className="form-control" id="phone" placeholder={t("contentPhone")}
                         value={phone} onChange={(e) => setPhone(e.target.value)}>
                </input>
              </div>
              <div className="form-group mt-2">
                <label for="comment">{t("message")}</label>
                <textarea name="comment" id="comment" className="form-control h-25" placeholder={t("contentMessage")}
                        value={comment} onChange={(e) => setComment(e.target.value)}>
                </textarea>
              </div>
              <div className="form-group mt-4">
                <button type="button" className="btn text-white button-contact" onClick={uploadData}>{t("submit")}</button>
              </div>
            </form>
          </div>

          <div className="col-lg-4" data-aos="fade-right" data-aos-duration="2000">
          <div className="title text-primary">
                    <h1>PT Kyodo News Digital Indonesia</h1>
            <div className="card-contact text-dark text-left mb-3 bg-light">
              <div className="card-body">
                <p className="card-text"><img src={location}></img>  Gedung Perkantoran Medan Pemuda
                    Jl. Pemuda No.27-31, Embong Kaliasin, Kec. Genteng,
                    Gedung Perkantoran Medan Pemuda</p>
                <p className="card-text"><img src={emailImg}></img>  info@kyodo-i.com</p>
                <p className="card-text"><img src={phoneImg}></img>  +51853458243</p>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.7894670822875!2d112.74520461448195!3d-7.264784294756165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9625a99ad9b%3A0xc01a0806118d70e8!2sGedung%20Perkantoran%20Medan%20Pemuda!5e0!3m2!1sid!2sid!4v1646642884729!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
              </div>
            </div>
            {/* <ul className="list-group">
              <li className="list-group-item"><h1>Location</h1></li>
              <li className="list-group-item">Gedung Perkantoran Medan Pemuda</li>
              <li className="list-group-item">Jl. Pemuda No.27-31, Embong Kaliasin, Kec. Genteng, </li>
              <li className="list-group-item">Kota Surabaya, Jawa Timur 60271</li>
            </ul> */}
          </div>
        </div>
        </div>

      </div>
    </section>
</div>
</Suspense>
);
}
export default Contact;
