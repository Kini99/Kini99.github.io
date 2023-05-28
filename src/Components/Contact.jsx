import React from 'react';
import "../Styles/Contact.css";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <div id='line'></div>
      <p>Reach out to me here</p>
      <div id="contact" className='contact-links'>
        <div id="contact-phone">
          <div id='icon'>
            <img src={PhoneIcon} alt="" />
          </div>
          <div id='details'>
            +91 9967622465
          </div>
        </div>
        <div id="contact-email">
        <div id='icon'>
            <img src={EmailIcon} alt="" />
          </div>
          <div id='details'>
            kinjalmomaya99@gmail.com
          </div>
        </div>
        <div id="contact-github">
        <div id='icon'>
            <img src={GitHubIcon} alt="" />
          </div>
          <div id='details'>
            Kini99
          </div>
        </div>
        <div id="contact-linkedin">
        <div id='icon'>
            <img src={LinkedInIcon} alt="" />
          </div>
          <div id='details'>
            Kinjal Momaya
          </div>
        </div>
      <p>Made with ❤️ by Kinjal Momaya</p>
      </div>
    </>

  )
}

export default Contact