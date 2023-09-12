import React from 'react';
import "../Styles/Skills.css";
import tw from "../Images/tw.png";
import chakra from "../Images/chakra.png";
import material from "../Images/material.png";

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
          <img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="image" className='skills-card-img' style={{height:"57%"}} />
          <h2 className='skills-card-name'>Redux</h2>
        </div>

        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="image" className='skills-card-img' style={{height:"57%"}}/>
          <h2 className='skills-card-name'>SASS</h2>
        </div>

        <div className='skills-card'>
          <img src={tw} alt="image" className='skills-card-img' style={{height:"57%"}}/>
          <h2 className='skills-card-name'>Tailwind CSS</h2>
        </div>

        <div className='skills-card'>
          <img src={chakra} alt="image" className='skills-card-img' style={{height:"57%"}}/>
          <h2 className='skills-card-name'>Chakra-UI</h2>
        </div>

        <div className='skills-card'>
          <img src={material} alt="image" className='skills-card-img' style={{height:"57%"}}/>
          <h2 className='skills-card-name'>Material UI</h2>
        </div>

        <div className='skills-card'>
          <img src="https://www.cypress.io/images/layouts/navbar-brand.svg" alt="image" className='skills-card-img'/>
          <h2 className='skills-card-name'>Cypress</h2>
        </div>

        <div className='skills-card'>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="image" className='skills-card-img' style={{height:"55%"}}/>
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

        {/* <div className='skills-card'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAaVBMVEX///8AAAD8/PxMTEzr6+vv7++4uLgtLS3l5eX29vbMzMxQUFDb29vDw8PT09Pz8/NdXV0cHBxAQEAnJyeBgYGHh4ebm5tYWFiOjo4NDQ2hoaFnZ2c7OztsbGyysrKpqak0NDR4eHgVFRWBKEP0AAAGLklEQVR4nNVb6ZqqOhAk7CKg4Ia7+P4PeWBAZelKQmj97q2fAxMqSe/dWtb/FwsvjNMo8SskURqH3uKnX49vu+syz0QHWb687m7xL3gs/OIgJDgU/ldpxHdH9vkXnHv8ne+79+VRh0CN4/LushNIr9rfb1lcU1YCvtYFDOH4XN+3/cCEQI3AtzkYREYn8D6JaDaB8DyHQI1zOIuAXcwlUKOYcRvphYOBEBdj5djzEKixNyLgLfkYCLH0pjNIOAnUSKYyOHEzEOI0jUHJz0CI7RQGs40BjbM2gRWrIHaxXOkxWOTfYiBErhXP2LN8ggqOhqW0pXHZfBzUHL4kiR8oZXL3bQZC7OQM/O8zEEIaTKW/YCCExHF6TM5ZhQv2WeXoZcdPksKZGDx/8Fyfksgfb6xEDG7jNRrX4t6NrNWhTayIuONGM3CJVd4GNd5O/H5WvJOZkHhMZzrX8Yt5l2Gx0Sew2Xevm0gCrhQDKkbpx1uudjC77W+SMjZEBONR+cpQg8N1+yA7F6dbFLurytzaKzeObqfi/Mr218OwnbI2wVgrKKbHcQrgb4Jzka5IQ2+v0uIcbMaWJ6ZUamQkKZERG+I7riJlpp4vMmr14f5IgacoGIEU5EEcRx6CuHBReJDL94+hJN/JwYpMFHo2kj4E8eCiAKoD3WMAUcJ3ZaHKdz9vhOCVp0EWRsF7gi1+tIfwTw3m1yf+EKH1P96KlpYKdx4Kd7T+W+Vi9IZY8lDAqdGrQCnxPiyV1AVevxVIG8cjimBXFzgszxtnQ4UqDdY8DCxrDT/R6ASs52yYdLLSShjtNBEJzJ8m10UwYM3mL7dyUW1VvxqgAbTPoL4JmL6wVvSh4tdpDaoqHTgZWBZK2Os0AUkroyTUQNJQax1I4h4sNfQPbOAFKhvtAn2BOZcpSvo7lbdE0sh8D/gmUvSEiN9nIgTJcYJiBUezPKePFSij3ZCbXDNLYyWPQPUKOoH4gjRCedwiszCpXqwHsNk1MgtMkUIXIGq4oBC/UC85FUDqAovMOH95CpkFtPV3snC06L//kIJAp8AarzQAUcsRpXu/M00blEnxG+gFMNAPCyQRGbubQlGBAwMq3gEIC0ePB6sET9jGH15AfYYSJpTsWol0soC1hQc3BVRBuMHzOTIPBsWg0lJFTbACwlTeeAGWOSIrROwevBRQw+cZSqo8rDcByorNTmHuz+qvYZWjzqbwuAhbecGyPPiRusCAxzUYjwGXs+qUCcojozSQDYk/1NIInahgzO9xK74JCiQ1P7NZoBEkgzFNmIwrn0zJrWw4qLlrW9b8Y+AgY7BpgzNpF3S204aWucbLH0M38YeZ8iDvbb5L/SCdaeHM0M1U3uzO3i+q5ul2hnbSVTW6PwNffcuxeQTDY+m3oHUJFPLTrexS53y7HfN9Fb6H/siYbCdeR6rR6u/2zrumoW3WpKOw/7GPNM/CjfS6/L1ddY7hdTrU0GngbJM49GCmZXthnJSO5sRwf4Cgq5fPVwoBItvnYws4LMrHlJmTQfOtd/dl2w9CoS3snOOwgMDQCfYdRdBmlLRdkRjtKbOiI/kue4/zlgMlVeQMyAv682njml6YUS9Qu5Jmm9rDWVTePHDqrW6Ow075qJ72oCA1CTv456yROXt0sgq3pTlyQ29kEOq3wetiuC1FH1vudt8A5YuBt2o10y77f1ZYSD29hEfZ3/C7+pl+LuOyU1VfbB3jhOPisGdZN59yU3gqy3JbJKG6h40aQF0Ekn30L9IoZpN0wN+QilMv0LuY9O01BogVZYPerJ1JsUdNQWpdrWFuNXGSXouCuqi66t3lfnIRVkUh16iprnpqkU+dqFFQCLSqun3VFEs/7B6F6ljkFGTq2EU80KvMWW/vtyRKkvtufVVwkFLItWPgUGJeVHP1MgqXCb/tk9iXGRR0fhXQWaiEZ2lMYXLrE5UljCkY2Bjg+E0pGI3LeWQoejGicDYtIN6IYpwJhSeYP9dBOF5PNWBCUFjOazKNflE6mUIwv79z6icYwTQKmYEijBEWgSmFoOBq9Hmd2Fo5bNSJgU1qMxi318rKSOqVyxxmqAFAWNSOQx1x/HVlc7Yb6GMV+ZFGxLHQe+2/hH9S6U4w3h71IgAAAABJRU5ErkJggg==" alt="image" className='skills-card-img' style={{height:"55%"}}/>
          <h2 className='skills-card-name'>Github</h2>
        </div> */}
      
    </div>
    </div>
  )
}

export default Skills