import React, { useEffect, useState, Component,Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import './detailNews.css';
import i18n from "i18next";
import {initReactI18next, useTranslation } from "react-i18next";

import NewsImage from '../assets/img/news.jpg';


function DetailNews() {

  const history = useHistory();
    const { id } = useParams();
    const [apiData, setApiData] = useState([]);
    const [urlThumbnail, setUrlThumbnail] = useState();
    const [date, setDate] = useState();
    const [title, setTitle] = useState();

    useEffect(() => {
      
      console.log(id);
      axios.get("http://192.168.195.195:5000/api/v1/newspost/"+id)
      .then((res) => {
        setApiData(res.data.contents[t("code")]);
	setDate(res.data.publishDate);
	setUrlThumbnail(res.data.thumbnailURL);
	setTitle(res.data.contents[t("code")].title);
        console.log(res.data.contents[t("code")]);
        }).catch((err) => {
        console.log(err);
      });
    },[]);

    const {t}= useTranslation();
// const renderNews = () => {
//         // console.log(value.data);
//         return (
//              <div className="entry-content">
//                <div dangerouslySetInnerHTML={{ __html: apiData.data}} />
//              </div>
// )}


    return (
   <Suspense fallback="loading">
    	<div className="detail-News">
            
     	<div className="container" data-aos="fade-up">
<div className="row">

         <div className="col-lg-8 entries justify-content-center mt-3 mb-3">

           <div className="entry entry-single">
           <h2 className="entry-title">
               <p>{title}</p>
             </h2>
             <div className="entry-meta">
               <ul>
                 <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">{date}</time></a></li>
               </ul>
             </div>
             <div class="entry-img">
             <img src={`http://192.168.195.195:5000${urlThumbnail}`} alt="Thumbnail Berita" className="img-fluid w-100 d-flex justify-content-center my-5 "/>
             </div>

            
		{/* {renderNews} */}
    <div className="entry-content" id="content">
               <div dangerouslySetInnerHTML={{ __html: apiData.data}} />
             </div>
           </div>
           </div>
           </div>
          </div>
        </div>
  </Suspense>
       );
}
export default DetailNews;