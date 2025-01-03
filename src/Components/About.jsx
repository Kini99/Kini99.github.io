import React from "react";
import "../Styles/About.css";
import pic from "../Images/kinjal.jpg";

const About = () => {
  return (
    <div id="about">
      <h1 className="about-h1" title="About Me" id="about.about.section">
        About
      </h1>
      <div id="line"></div>
      <p>More about my professional and personal interests</p>
      <div id="about-container" className="about-section">
        <div>
          <img
            src={pic}
            alt="My picture did not load i guess..."
            className="about-img home-img"
          />
          <a
            href="https://drive.google.com/file/d/1It3gBsrcPZeR_GeumkNLrBtxWLw6pU0p/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="nav-link resume"
            id="resume-link-2"
          >
            <button id="resume-button-2">RESUME</button>
          </a>
        </div>
        <div className="about-content" id="user-detail-intro">
          <p>
            Greetings! I'm Kinjal Momaya, a passionate Full Stack Developer
            specializing in building exceptional web and mobile applications.
            With 1.5 years of professional experience, I have honed my skills in
            the MERN stack and React Native to create user-friendly, scalable
            solutions. Currently, I'm on an exciting journey to deepen my
            expertise in Android and iOS development, aiming to deliver seamless
            digital experiences across platforms.
          </p>
          <p>
            When I'm not coding, you'll find me exploring my creative side
            through painting or experimenting in the kitchen with new recipes.
          </p>
          <p>
            I thrive on continuous learning and enjoy turning innovative ideas
            into reality. Let's collaborate and bring your vision to life with
            cutting-edge technologies and thoughtful designs!
          </p>
          <p id="transparent">
            HTML CSS Javascript React Nodejs Express MongoDB
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
