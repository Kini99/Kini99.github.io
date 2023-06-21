import React from 'react';
import "../Styles/Contact.css";
import {BsFillTelephoneFill} from 'react-icons/bs';
import {FiMail} from 'react-icons/fi';
import {AiFillGithub} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <h1 id="contact">Contact</h1>
      <div id='line'></div>
      <p>Reach out to me here</p>
      <div id="contact-container" className='contact-links'>
        <div id="contact-phone">
          <div id='icon'>
            <BsFillTelephoneFill style={{padding:"5px", marginLeft:"5px"}}/>
          </div>
          <div id='details'>
            +91 9967622465
          </div>
        </div>
        <div id="contact-email">
        <div id='icon'>
           <FiMail style={{ margin:"5px 8px 0 8px", padding:"0", fontSize: '25px'}}/>
          </div>
          <div id='details'>
            kinjalmomaya99@gmail.com
          </div>
        </div>
        {/* <div id="contact-github"> */}
        <Link to="https://github.com/Kini99" target='_blank' id="contact-github">
        <div id='icon'>
           <AiFillGithub style={{ margin:"5px 5px 0 10px", padding:"0", fontSize: '23px', color:"black"}} />
          </div>
          <div id='details'>
            Kini99
          </div>
          </Link>
        {/* </div> */}
        
       {/* <div > */}
       <Link to="https://www.linkedin.com/in/kinjal-momaya-73b124126" target='_blank' id="contact-linkedin">
        <div id='icon'>
            <BsLinkedin style={{ margin:"5px 5px 0 12px", padding:"0", fontSize: '20px', color:"black"}} />
          </div>
          <div id='details'>
            Kinjal Momaya
          </div>
          </Link>
        {/* </div> */}
      <p>Thankyou for visiting 💛 - Kinjal Momaya</p>
      </div>
    </>

  )
}

export default Contact