import React from 'react'

const Home = () => {
  return (
    <div id="home">
        <h1 id="user-detail-name">Kinjal Momaya</h1>
        <img src="https://placehold.co/600x400" alt="image" className='home-img' />
        <h3 id="user-detail-intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laborum eum officia blanditiis odio? Quisquam nisi mollitia praesentium veniam quas eius enim. Possimus dignissimos impedit facilis laboriosam quos? Ab, non.</h3>
        <a href="https://drive.google.com/file/d/1Iv46uAZkxIfhftVBNBiJrc-GbB3d0F2C/view?usp=share_link" target="_blank" className='nav-link resume' id="resume-link-2">Resume</a>
    </div>
  )
}

export default Home