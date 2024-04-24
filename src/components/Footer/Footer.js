import React from 'react'
import "./Footer.css"
import { assets } from '../../images/assets';

const Footer = () => {
  return (
    <>
      <div className='border-line'></div>
      <div className="footer">
        <h2>Question ? Call 000-800-919-1694</h2>
        <div className="row">
          <div className="col">
            <a href="#">FAQ</a>
            <a href="#">Investor Relation</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </div>

          <div className="col">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Notices</a>
          </div>

          <div className="col">
            <a href="#">Account</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Only on Netflix</a>
          </div>

          <div className="col">
            <a href="#">Media Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact us</a>
          </div>
        </div>
        <button className='language-btn'>English <img src={assets.down_icon}/></button>
        <p className='copyright-text'>Netflix India</p>
      </div>
    </>
  );
}

export default Footer