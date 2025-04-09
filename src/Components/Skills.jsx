import React from 'react';
import "../Styles/Skills.css";
import tw from "../Images/tw.png";
import chakra from "../Images/chakra.png";
import material from "../Images/material.png";
import reactnative from "../Images/reactnative.png";
import jwt from "../Images/jwt.png";

const Skills = () => {
  return (

    <div id="skills1">
      <h1>My Tech Stack</h1>
      <div id='line'></div>
      <p>Technologies I'm skilled in and tools I'm currently using</p>
      <h2>Tech Skills</h2>
      <div id="skills">
        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>HTML</h2>
        </div>

        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>CSS</h2>
        </div>

        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>SASS</h2>
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
          <img src={reactnative} alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>React Native</h2>
        </div>

        <div className='skills-card'>
          <img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Redux</h2>
        </div>

        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="image" className='skills-card-img' style={{ height: "55%" }} />
          <h2 className='skills-card-name'>Node.js</h2>
        </div>

        <div className='skills-card'>
          <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>Express.js</h2>
        </div>

        <div className='skills-card'>
          <img src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>MongoDB</h2>
        </div>

        <div className='skills-card'>
          <img src="https://www.liveagent.com/app/uploads/2020/11/MySQL-Logo.png" alt="image" className='skills-card-img' style={{ height: "55%" }} />
          <h2 className='skills-card-name'>MySQL</h2>
        </div>

        <div className='skills-card'>
          <img src="https://miro.medium.com/v2/resize:fit:300/1*veOyRtKTPeoqC_VlWNUc5Q.png" alt="image" className='skills-card-img' style={{ height: "55%" }} />
          <h2 className='skills-card-name'>Jest</h2>
        </div>

        <div className='skills-card'>
          <img src="https://www.cypress.io/images/layouts/cypress-logo.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>Cypress</h2>
        </div>

      </div>
      <h2>Tech Tools</h2>
      <div id="skills">

      <div className='skills-card'>
          <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Git</h2>
        </div>

        <div className='skills-card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Github</h2>
        </div>

        <div className='skills-card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>VS Code</h2>
        </div>

        <div className='skills-card'>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Android Studio</h2>
        </div>

        <div className='skills-card'>
          <img src="https://assets.asana.biz/transform/ba9b63a3-f255-4088-b5fe-14ab4628f50b/logo-app-figma" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Figma</h2>
        </div>

        <div className='skills-card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Swagger</h2>
        </div>

        <div className='skills-card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>EsLint</h2>
        </div>

        <div className='skills-card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Babel_Logo.svg/1200px-Babel_Logo.svg.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Babel</h2>
        </div>

        <div className='skills-card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>NPM</h2>
        </div>

        <div className='skills-card'>
          <img src={jwt} alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>JSON Web Token</h2>
        </div>

        <div className='skills-card'>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/255px-Socket-io.svg.png"} alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Socket.io</h2>
        </div>

        <div className='skills-card'>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/180px-Firebase_icon.svg.png"} alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Firebase</h2>
        </div>

        <div className='skills-card'>
          <img src={tw} alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Tailwind CSS</h2>
        </div>

        <div className='skills-card'>
          <img src={chakra} alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Chakra-UI</h2>
        </div>

        <div className='skills-card'>
          <img src={material} alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Material UI</h2>
        </div>

      </div>
    </div>
  )
}

export default Skills