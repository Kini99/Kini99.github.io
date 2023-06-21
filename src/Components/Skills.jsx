import React from 'react';
import "../Styles/Skills.css";

const Skills = () => {
  return (

    <div id="skills1">
      <h1>My Tech Stack</h1>
      <div id='line'></div>
      <p>Technologies I'm skilled in and tools I'm currently using</p>
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
          <img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>Redux</h2>
        </div>

        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>SASS</h2>
        </div>

        <div className='skills-card'>
          <img src="data:image/png;base64,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" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>Chakra-UI</h2>
        </div>

        <div className='skills-card'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAllBMVEX///8AgcsAsP8AeskArP+w3f+rxuawy+iX1P8Af8qXveIArv8AeMgAfMkAsv8Aqf8Am+egwuQAcsb3+v2o2//l9f9NldK00OrX7v/b6fWf2P+mx+bI3fDl7/hFu/+MuOBno9hyyP+Hzv/u+f92q9tdwP9endbE5f89kNHM6v8ths2i0fS/1ezR5PMAlObB3fUPjtczpOgIWgjSAAAEbElEQVR4nO3abXuqOBAG4JDQ1UjASqxW62ul1rp69pz//+d28D1kggmCH3bzfOSi9i4MYTKWEB8fHx8fHx8fHx8fHx+f/0tkw59j8/kvn7UQ5h+G4y0bQzfsPyxoxelfhuNWhpCGs5+HBPsB4wwxHI5bGmgULleVBTJjcRDoBjjO4bitIVe0KxJ6AgSIoXM6bm8ARfJSQbDb5n+sbhhu49NxFwOl4de7o2C0FsffVDDA8eB83M2Ql4XTanEoBMwwF0FVAyi6Y1uF/BBXQcHQYQ8YQDH7tiJMNowHDRko7S7f7v7QNBOKoG4D3JDP8hsi58ptaMIACtovUbQCTdCAgZYs3/kCrBNMBi6GlQ2mslhlKSYwGHg6mFgQjAZYLbSywArBbOBsa3MRygxwQ5IXRTHcMoMAM8R8brvWlBjysrgu39N18XksM3CxHlkK7hiuZTE1FQJqEMKuEOwMNIraksgexwqBGwzz2NDZWRhmsDIgl2L29wC7DTHfcNywnzoRbg3h+O2riyCSX4gAnrtpS+AG19waoJf6numK5FUzcLHZQQ/FGjEQOdZuiG6Ig17+3DVlIORt2Y1KDTzNjje8OQMo1LJQDVwMzk9+k4a8LEKDQWyuC3CzBiLbUYQYYna7AFsYpM1jajAcyqJo4OlCWYDvGyZbm+tjNBDyfrohJwM8j3v1hHsG6PGFYw+j7bXkSxJeDGz7UXwPlhvkHBZ41z4K2e/JT3hOc0OcZvqWtNQwDBz3mybDoSzAkC6w2ioxTDbHV0wtBkJ+Zr82+JvYaJguTtvNugxE/mNoiDLDXm94fdPXZTBkd9vaFXqY4CmGvdra1bW/cDDIrNBYPd/wERQ77GcbJlu9tXuuYbTANnsPGd5p6GSYx1iHzfjtq8TVQMg4jKwNLa0Q8sSio5zlbiCr5bFXuGvYbzABZ4vCq6SCIV+Ow/uGaRZjPT4b7ItnVjJAaUJZlBs6eCEwZEtV0UBIO+qWGI5vYq0QYnRvXdkA3bTRMEKHLzxe491idQMoDMe/GVIJnG13+OmrNa9uMKVPX4MigvEefrLs3U4J6jOESaIqoBAM3zbs1GFNjQaaJPT3BQHPo2HIMioOa+o0QHd9vhTmQpCZNjOr13BSQN/Qwc8qTNGbMYCC/g4yw+5thy7kVnscJwNcihlei9MFNi6CPbrjWMjCAOl+6orVPEUWci5MhfOogUZUHZ0SOcSm6LA5NBRODQa4FF+3E/UJOrXjzFQ49Rho1L18IYoPT3lq2JrVZziMTnOFRFs7+2m5gwGbWobJt7x8vakkDqyn5fbBR6c0/CN0ANwGh2m5S7DRKTY7zYc1NRfCNbKfaEWBGJBhTZ1ZLcPojiGu+XlE8l4oi4KhsUJQo4xOVcNxiv6MyPF1dKoYYt5oIai5mahfDYaZWXO5lMXZ8KRCUHMcnZ4NbFP7wmyTVTt/Tg8G2HNX/3+ex5Iv32Dg4smFoOZnFr0Kfc/93Mj+H7evMX18fHx8fHx8fHx8fP6D+RfkXE2iSM9i7AAAAABJRU5ErkJggg==" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>Material UI</h2>
        </div>

        <div className='skills-card'>
          <img src="https://www.cypress.io/images/layouts/navbar-brand.svg" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>Cypress</h2>
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
          <img src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>MongoDB</h2>
        </div>

        <div className='skills-card'>
          <img src="data:image/png;base64,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" alt="image" className='skills-card-img' />
          <h2 className='skills-card-name'>Github</h2>
        </div>
      
    </div>
    </div>
  )
}

export default Skills