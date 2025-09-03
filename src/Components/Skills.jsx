import React, { useState } from 'react';
import "../Styles/Skills.css";
import { FaBrain, FaCode, FaDatabase, FaTools, FaRocket, FaChevronRight } from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const skillCategories = [
    {
      title: "AI Engineering",
      icon: <FaBrain />,
      color: "#8B5CF6",
      skills: [
        { name: "LangChain", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAg1AAZAA0" },
        { name: "LangGraph", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langgraph-color.png" },
        { name: "LangSmith", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langsmith-color.png" },
        { name: "n8n", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png" },
        { name: "HuggingFace", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
        { name: "Ollama", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/ollama.png" },
        { name: "LM Studio", icon: "https://pbs.twimg.com/profile_images/1755060270173429760/4WVc54_p_400x400.jpg" },
        { name: "PyTorch", icon: "https://pytorch.org/assets/images/pytorch-logo.png" },
        { name: "Pandas", icon: "https://img.icons8.com/color/512/pandas.png" },
        { name: "Pinecone DB", icon: "https://meta-q.cdn.bubble.io/f1740086062500x125193092753054460/Pinecone-Logo-2327051645.png" },
        { name: "Weaviate", icon: "https://weaviate.io/img/site/weaviate-logo-light.png" },
        { name: "Chroma DB", icon: "https://www.trychroma.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchroma.d840f629.png&w=1920&q=75&dpl=dpl_Dc8K3cwpS2e2VMFRGYDC6jxuUPzS" }
      ]
    },
    {
      title: "Frontend Development",
      icon: <FaCode />,
      color: "#3B82F6",
      skills: [
        { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
        { name: "React.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
        { name: "React Native", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
        { name: "Redux", icon: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" },
        { name: "Tailwind CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaRocket />,
      color: "#10B981",
      skills: [
        { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg" },
        { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
        { name: "Express.js", icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" },
        { name: "Fast API", icon: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" }
      ]
    },
    {
      title: "Database & Storage",
      icon: <FaDatabase />,
      color: "#F59E0B",
      skills: [
        { name: "MongoDB", icon: "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress" },
        { name: "MySQL", icon: "https://www.liveagent.com/app/uploads/2020/11/MySQL-Logo.png" },
        { name: "PostgreSQL", icon: "https://www.postgresql.org/media/img/about/press/elephant.png" },
        { name: "Watermelon DB", icon: "https://watermelondb.dev/img/logo.svg" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools />,
      color: "#EF4444",
      skills: [
        { name: "Git", icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
        { name: "GitHub", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" },
        { name: "VS Code", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" },
        { name: "Socket.io", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/255px-Socket-io.svg.png" },
        { name: "Firebase", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/180px-Firebase_icon.svg.png" },
        { name: "JSON Web Token", icon: "https://jwt.io/img/pic_logo.svg" },
        { name: "NPM", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" },
        { name: "ESLint", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png" },
        { name: "Babel", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Babel_Logo.svg/1200px-Babel_Logo.svg.png" },
        { name: "Swagger", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png" },
        { name: "Figma", icon: "https://assets.asana.biz/transform/ba9b63a3-f255-4088-b5fe-14ab4628f50b/logo-app-figma" },
        { name: "Android Studio", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png" }
      ]
    }
  ];

  return (
    <section id="skills1" className="section">
      <div className="section-content">
        <div className="section-header animate-fade-in-up">
          <h2>My Tech Stack</h2>
          <div className="section-divider"></div>
          <p>Click on a category to explore my skills and technologies</p>
        </div>

        <div className="skills-container">
          {/* Category Navigation */}
          <div className="skill-category-navigation">
            {skillCategories.map((category, index) => (
              <button
                key={category.title}
                className={`category-nav-btn ${activeCategory === index ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
                style={{ '--category-color': category.color }}
              >
                <div className="nav-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <span className="nav-label">{category.title}</span>
                <FaChevronRight className="nav-arrow" />
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="skills-display">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`skills-category-content ${activeCategory === index ? 'active' : ''}`}
                style={{ '--category-color': category.color }}
              >
                {/* <div className="category-header">
                  <div className="category-icon" style={{ color: category.color }}>
                    {category.icon}
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">
                    {category.skills.length} technologies and tools
                  </p>
                </div> */}
                
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className="skill-card"
                      style={{ animationDelay: `${skillIndex * 0.05}s` }}
                    >
                      <div className="skill-icon">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="skill-fallback" style={{ display: 'none' }}>
                          {skill.name.charAt(0)}
                        </div>
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Category Indicators */}
          <div className="category-indicators">
            {skillCategories.map((_, index) => (
              <button
                key={index}
                className={`indicator ${activeCategory === index ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills