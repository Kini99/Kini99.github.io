import React from "react";
import "../Styles/Github.css";
import { FaGithub, FaExternalLinkAlt, FaCode, FaCalendarAlt, FaChartLine } from 'react-icons/fa';

export default function Github() {
  return (
    <section id="github" className="section">
      <div className="section-content">
        <div className="section-header animate-fade-in-up">
          <h2>My GitHub</h2>
          <div className="section-divider"></div>
          <p>Explore my code repositories and development activity</p>
        </div>

        <div className="github-container">
          {/* GitHub Profile Link */}
          <div className="github-profile-card animate-fade-in-left">
            <div className="profile-header">
              <FaGithub className="github-icon" />
              <h3>GitHub Profile</h3>
            </div>
            <p>Check out my repositories, contributions, and coding journey</p>
            <a 
              href="https://github.com/Kini99" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link-btn"
            >
              <FaExternalLinkAlt />
              Visit My Profile
            </a>
          </div>

          {/* GitHub Statistics */}
          <div className="github-stats-section animate-fade-in-up">
            <div className="stats-header">
              <FaChartLine className="stats-icon" />
              <h3>GitHub Statistics</h3>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=kini99&show_icons=true&theme=dark&hide_border=true&bg_color=0D1117"
                  alt="GitHub Stats"
                  className="github-stat-image"
                />
              </div>
              
              <div className="stat-card">
                <img
                  src="https://github-readme-streak-stats.herokuapp.com?user=kini99&theme=dark&hide_border=true&background=0D1117"
                  alt="GitHub Streak"
                  className="github-stat-image"
                />
              </div>
            </div>
          </div>

          {/* Top Languages */}
          <div className="github-languages-section animate-fade-in-up">
            <div className="languages-header">
              <FaCode className="languages-icon" />
              <h3>Most Used Languages</h3>
            </div>
            
            <div className="languages-card">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=kini99&layout=compact&theme=dark&hide_border=true&bg_color=0D1117"
                alt="Top Languages"
                className="github-lang-image"
              />
            </div>
          </div>

          {/* GitHub Calendar */}
          <div className="github-calendar-section animate-fade-in-up">
            <div className="calendar-header">
              <FaCalendarAlt className="calendar-icon" />
              <h3>Contribution Calendar</h3>
            </div>
            
            <div className="calendar-card">
              <img
                src="https://ghchart.rshah.org/kini99"
                alt="GitHub Contribution Calendar"
                className="github-calendar-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}