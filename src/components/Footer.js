import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.css';
// import { Button } from './Button';

import logoFooter from '../assets/img/logoFooter.png';

function Footer() {

    return (
<div className='footer-container'>
      {/* <section className='footer-subscription d-flex flex-row'>
        <div>
        <p className='footer-subscription-heading'>
         Have any Question in your mind?
        </p>
        <p className='footer-subscription-text'>
         Let-us now! we are help you.
        </p>
        </div>
        <div className="footer-button d-flex allign-items-end ml-auto">
        <button type="button" className="btn text-white button-contact bg-danger w-15" >Let's Meet Up</button>
        </div>
      </section> */}
      <div className='footer-links'>
      {/* <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              
            <img className="cover" src={logoFooter} alt="" />
            </Link>
          </div> */}
        <div className='footer-link-wrapper mx-auto'>
            <div >
                <div>
                     <img className="cover w-50 h-50" src={logoFooter} alt="" />
                </div>
                <div className="text-light">
                   <p>Gedung Medan Pemuda Jl. Pemuda Surabaya</p>
                   <p>Cell : (62) 819 79 555xxx</p>
                   <p>E-mail : info@kyodo-i.com</p>
                </div>
            </div>
        </div>
            <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Company</h2>
            <Link to='/'>About Us</Link>
            <Link to='/'>Our Team</Link>
            <Link to='/'>products</Link>
            <Link to='/'>Contacts</Link>
            <Link to='/'>About Us</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Our Service</h2>
            <Link to='/'>Digital Marketing</Link>
            <Link to='/'>Bussines analysis</Link>
            <Link to='/'>How it Work</Link>
            <Link to='/'>fix & flip</Link>
            <Link to='/'>Social Activation</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Quick Link</h2>
            <Link to='/'>Contact us</Link>
            <Link to='/'>Term & Condition</Link>
            <Link to='/'>Latest News</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Help Desk</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
         
          <small class='website-rights'>Copyright @2022 All Right Reserved.Design by kyodo-i.com</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
    );
}
export default Footer;
