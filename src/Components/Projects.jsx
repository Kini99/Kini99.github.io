import React from 'react'

const Projects = () => {
  return (
    <div id="projects">
        <h1>Projects</h1>
        {/* Project Card 1 */}
        <div className='project-card'>
<img src="https://placehold.co/600x400" alt="image" />
<h2 className='project-title'>Title</h2>
<p className='project-description'>Description</p>
<p className='project-tech-stack'>TechStack</p>
<p className='project-github-link'>Github Link</p>
<p className='project-deployed-link'>Deployed Link</p>
        </div>
    </div>
  )
}

export default Projects