import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Home.css";
import phone_img from "../Images/phone_img.jpeg"

const Home = () => {
  return (
    <div id="home" className='home'>
      <div id='home-details'>
        <h1>Hey!</h1>
        <h2 id='user-detail-name'>I'm Kinjal Momaya.</h2>
        {/* <h3>A Full Stack Developer.</h3>
         */}
         <a href="https://github.com/DenverCoder1/readme-typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Time+New+Roman&color=black&size=25&left=true&vCenter=true&width=400&height=50&lines=Full+Stack+Web+Developer++;MERN+Developer++;" className='a-img' id="user-detail-intro"/></a>
         <br/>
        <Link to={"/contact"}><button className='contact'>Hire Me</button></Link>
        <Link to={"/about"} ><button className='about'>Learn More</button></Link>
        <div className='flex'><div></div> <h3>Currently looking for opportunities</h3></div>
      </div>
      <div>
<div>
<div className="phone">
        <div className="inner-skin">
          <div className="phone-content">
            <h1 className="title">Hello There!</h1>
            <img src={phone_img} alt="image" className='bounce' />
            <h2 className="subtitle">Let's build together...</h2>
            <Link to={"/contact"} className='nav-link contact'><button className='button-rainbow'>Connect with me!</button></Link>
          </div>
        </div>
      </div>
</div>
      </div>
      
    </div>
  )
}

export default Home

{/* <div className="phone">
        <div className="inner-skin">
          <div className="phone-content">
            <h1 className="title">Hello There!</h1>
            <img src={phone_img} alt="image" className='bounce' />
            <h2 className="subtitle">Let's build together...</h2>
            <Link to={"/contact"} className='nav-link contact'><button className='button-rainbow'>Connect with me!</button></Link>
          </div>
        </div>
      </div> */}

{/* <div className='terminal-container'>
<div className="recruitment-notifier">
    <h3 className="title">Recruitment Status :</h3>
    <h1><span className="notification-status"></span>Open to Work</h1>
  </div>
      <div className='terminal'>
      <header className="terminal-header">
        <div className="terminal-header-buttons">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimise"></div>
          <div className="terminal-button expand"></div>
        </div>
      </header>
      <div className="terminal-body">
      <h1 id="user-detail-name" className='color-orange'>I am Kinjal Momaya,</h1>
      <a href="https://github.com/DenverCoder1/readme-typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Time+New+Roman&color=orange&size=25&left=true&vCenter=true&width=600&height=50&lines=Full+Stack+Web+Developer++;MERN+Developer++;Frontend Specialist" className='a-img'/></a>

      <h3 id="user-detail-intro" className='color-green'>Here are some facts about me:</h3>
      <p className='color-yellow'>✅ Full Stack Web Developer</p>
      <p className='color-orange'>✅ 1200+ Hours of Coding</p>
      <p className='color-red'>✅ 100+ Hours of DSA</p>
      <p className='color-violet'>✅ 5 Major Projects | 25+ Mini Projects</p>
      <p className='color-indigo'>✅ One of the top performers of the batch at Masai School</p>
     <h2> <a href="https://drive.google.com/file/d/1Iv46uAZkxIfhftVBNBiJrc-GbB3d0F2C/view?usp=share_link" target="_blank" className='nav-link resume' id="resume-link-2">VIEW RESUME</a></h2>
      </div>
    </div>
    </div> */}