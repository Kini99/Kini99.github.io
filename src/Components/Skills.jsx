import React from 'react';
import "../Styles/Skills.css";

const Skills = () => {
  return (
    <>
      <h1 id="skills">My Tech Stack</h1>
      <div id='line'></div>
      <p>Technologies I'm skilled in and tools I'm currently using</p>

      <div id="skills-container">

        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>HTML</h2>
        </div>

        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>CSS</h2>
        </div>

        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>Javascript</h2>
        </div>

        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>Typescript</h2>
        </div>

        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>React</h2>
        </div>
        
        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>SASS</h2>
        </div>

        <div className='skills-card'>
          <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fraw.githubusercontent.com%2Freduxjs%2Fredux%2Fmaster%2Flogo%2Flogo.png&tbnid=CKxX-QYLUfEJrM&vet=12ahUKEwjb1ZW9lpX_AhV1T3wKHapUBOMQMygCegUIARC6AQ..i&imgrefurl=https%3A%2F%2Fgithub.com%2Freduxjs%2Fredux%2Fblob%2Fmaster%2Flogo%2FREADME.md&docid=KvCmrB6gRnjVhM&w=3440&h=3109&q=redux%20svg&ved=2ahUKEwjb1ZW9lpX_AhV1T3wKHapUBOMQMygCegUIARC6AQ" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>Redux</h2>
        </div>

        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>Node.js</h2>
        </div>

        <div className='skills-card'>
          <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>Express.js</h2>
        </div>

        <div className='skills-card'>
          <img src="https://www.mongodb.com/" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>MongoDB</h2>
        </div>
      </div>
    </>
  )
}

export default Skills