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
      
      <h2>AI Engineering Skills</h2>
      <div id="skills">
        <div className='skills-card'>
          <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAg1AAZAA0" alt="LangChain" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>LangChain</h2>
        </div>

        <div className='skills-card'>
          <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langgraph-color.png" alt="LangGraph" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>LangGraph</h2>
        </div>

        <div className='skills-card'>
          <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langsmith-color.png" alt="LangSmith" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>LangSmith</h2>
        </div>

        <div className='skills-card'>
          <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png" alt="n8n" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>n8n</h2>
        </div>

        <div className='skills-card'>
          <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="HuggingFace" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>HuggingFace</h2>
        </div>

        <div className='skills-card'>
          <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/ollama.png" alt="Ollama" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Ollama</h2>
        </div>

        <div className='skills-card'>
          <img src="https://pbs.twimg.com/profile_images/1755060270173429760/4WVc54_p_400x400.jpg" alt="LM Studio" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>LM Studio</h2>
        </div>

        <div className='skills-card'>
          <img src="https://pytorch.org/assets/images/pytorch-logo.png" alt="PyTorch" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>PyTorch</h2>
        </div>

        <div className='skills-card'>
          <img src="https://img.icons8.com/color/512/pandas.png" alt="Pandas" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Pandas</h2>
        </div>

        <div className='skills-card'>
          <img src="https://meta-q.cdn.bubble.io/f1740086062500x125193092753054460/Pinecone-Logo-2327051645.png" alt="Pinecone" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Pinecone DB</h2>
        </div>

        <div className='skills-card'>
          <img src="https://weaviate.io/img/site/weaviate-logo-light.png" alt="Weaviate" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Weaviate</h2>
        </div>

        <div className='skills-card'>
          <img src="https://www.trychroma.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchroma.d840f629.png&w=1920&q=75&dpl=dpl_Dc8K3cwpS2e2VMFRGYDC6jxuUPzS" alt="Chroma" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Chroma DB</h2>
        </div>
      </div>

      <h2>Frontend Skills</h2>
      <div id="skills">
        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>JavaScript</h2>
        </div>

        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>TypeScript</h2>
        </div>

        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>React.js</h2>
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
          <img src={tw} alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Tailwind CSS</h2>
        </div>
      </div>

      <h2>Backend Skills</h2>
      <div id="skills">
        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>Python</h2>
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
          <img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Fast API</h2>
        </div>
      </div>

      <h2>Database Skills</h2>
      <div id="skills">
        <div className='skills-card'>
          <img src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>MongoDB</h2>
        </div>

        <div className='skills-card'>
          <img src="https://www.liveagent.com/app/uploads/2020/11/MySQL-Logo.png" alt="image" className='skills-card-img' style={{ height: "55%" }} />
          <h2 className='skills-card-name'>MySQL</h2>
        </div>

        <div className='skills-card'>
          <img src="https://www.postgresql.org/media/img/about/press/elephant.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>PostgreSQL</h2>
        </div>

        <div className='skills-card'>
          <img src="https://watermelondb.dev/img/logo.svg" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Watermelon DB</h2>
        </div>
      </div>
      <h2>Tools & Technologies</h2>
      <div id="skills">
        <div className='skills-card'>
          <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Git</h2>
        </div>

        <div className='skills-card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>GitHub</h2>
        </div>

        <div className='skills-card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>VS Code</h2>
        </div>

        <div className='skills-card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/255px-Socket-io.svg.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Socket.io</h2>
        </div>

        <div className='skills-card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/180px-Firebase_icon.svg.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Firebase</h2>
        </div>

        <div className='skills-card'>
          <img src={jwt} alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>JSON Web Token</h2>
        </div>

        <div className='skills-card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>NPM</h2>
        </div>

        <div className='skills-card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>ESLint</h2>
        </div>

        <div className='skills-card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Babel_Logo.svg/1200px-Babel_Logo.svg.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Babel</h2>
        </div>

        <div className='skills-card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Swagger</h2>
        </div>

        <div className='skills-card'>
          <img src="https://assets.asana.biz/transform/ba9b63a3-f255-4088-b5fe-14ab4628f50b/logo-app-figma" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Figma</h2>
        </div>

        <div className='skills-card'>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png" alt="image" className='skills-card-img' style={{ height: "57%" }} />
          <h2 className='skills-card-name'>Android Studio</h2>
        </div>
      </div>
    </div>
  )
}

export default Skills