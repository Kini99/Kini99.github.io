import React from 'react';
import "../Styles/About.css";
import pic from "../Images/kinjal.jpg"

const About = () => {
  return (
    <div id="about">
    <h1 className='about-h1' title='About Me' id="about.about.section" >About </h1>
    <div id='line'></div>
    <p>Know more about my professional and personal interests</p>
    <div  id="about-container" className="about-section">
      <div>
    <img src={pic} alt="My Picture did not load i guess..." className='about-img home-img'/>
    <a href="https://drive.google.com/file/d/1Iv46uAZkxIfhftVBNBiJrc-GbB3d0F2C/view?usp=share_link" target="_blank" className='nav-link resume' id="resume-link-2"><button>RESUME</button></a>
    </div>
      <div className='about-content' id="user-detail-intro">
      <p>
      Greetings! I'm Kinjal Momaya, a full stack web developer based in India. I have embarked on an exciting journey to pursue my passion for web development. Alongside my expertise in web technologies, I am eager to expand my skill set to include Android and iOS development. When I'm not immersed in coding, you'll find me indulging in painting or cooking delicious meals. With a focus on continuous learning and a knack for crafting exceptional digital experiences, I am dedicated to delivering innovative solutions that meet and exceed client expectations. Looking forward to collaborating with you and bringing your ideas to life!</p>
      <p id="transparent">HTML CSS Javascript React Nodejs Express MongoDB</p>
    </div>
    </div>
    </div>
  )
}

export default About;