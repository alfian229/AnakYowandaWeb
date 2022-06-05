import { Link } from "react-router-dom";
import React, { useEffect, useState, Component,Suspense } from "react";
import axios from 'axios';
import i18n from "i18next";
import {initReactI18next, useTranslation } from "react-i18next";

import news1 from '../assets/img/picture1.png';
import news2 from '../assets/img/picture2.png';
import news3 from '../assets/img/picture3.png';


import detailNews from "./detailNews"

function News() {

  const [apiData, setApiData] = useState([]);

    useEffect(() => {
        
          axios.get("http://192.168.195.195:5000/api/v1/newspost/latest?publish=1&limit=4")
                .then((res) => {
                  console.log(res.data);
                  setApiData(res.data.latestNewspost);
                  }).catch((err) => {
                  console.log(err);
                });
    },[]);
    console.log(apiData)

    const {t}= useTranslation();
    // console.log(t("code"));

    return (
 <Suspense fallback="loading">
   <div id="Berita">
            <div className="title">
                <h3>{t("news")}</h3>
                <p>
                    The purpose of lorem ipsum is to create a natural looking block of text that doesn't distract from the layout laying out pages with meaningle
                </p>
            </div>
            <div id="divItemBerita">
                {apiData.map((value, index) => (
                <Link className="itemBerita" to={`/detailNews/${value.slug}`} key={value._id}>
                    <div className="thumbnail">
                        <img src={`http://192.168.195.195:5000${value.thumbnailURL}`} />
                    </div>
                    <div className="detailBerita">
                        <h6>{value.contents[t("code")].title}</h6>
                        <p>{value.publishDate}</p>
                    </div>
                </Link>
                ) ) }
            </div>
        </div>
{/* <div className="news">
  <div className="title justify-content-center">
        <div className="text-center">
            <h1 className="text-black">Never Miss Latest News</h1>
            <p className="text-black">The purpose of lorem ipsum is to create a natural looking block of text that doesn'tdistract
from the layout laying out pages with meaningle</p>
        </div>
    </div>

    <div className="content-news">
    <div className="image d-flex flex-row justify-content-center">

          {apiData.map((value, index) => (
          <Link to={`/detailNews/${value.slug}`} key={value._id} className="mx-auto w-25">
              <div className="d-flex justify-content-center align-items-center">
                <img className="imageNews" src={`http://192.168.195.195:5000${value.thumbnailURL}`} alt="" />
              </div>
            <div className="pl-4">
              <h5>{value.contents[t("code")].title}</h5>
              <p className="text-primary">{value.publishDate} </p>
            </div>
          </Link>
          ) ) }
    </div>
    </div>
</div> */}
</Suspense>

        );
    }
    export default News;     