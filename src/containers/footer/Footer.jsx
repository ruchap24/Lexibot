import React from 'react'
import "./footer.css"
import logoUrl from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others?
        </h1>
      </div>
      <div className="gpt3__footer-button">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logoUrl} alt="gpt3 logo" />
        </div>
        {/* <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
          <p><a href="https://www.linkedin.com/in/rucha-patil-9928b92a5/" target="_blank" rel="noopener noreferrer">My Profile</a></p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div> */}
        <div className="gpt3__footer-links_div">
          <h4><b>Get in touch</b></h4>
          <p><a href="https://www.linkedin.com/in/rucha-patil-9928b92a5/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
          <p><a href="mailto:patilrucha991@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a></p>
        </div>
      </div>
      <div className="gpt3__footer-rights">
        <b>MADE WITH ❤️ BY RUCHA PATIL</b>
      </div>
    </div>
  )
}

export default Footer