import React from 'react';
import "../Styles/Contact.css";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaDownload, FaMapMarkerAlt, FaClock, FaRocket } from 'react-icons/fa';

// Custom X (Twitter) Icon Component
const XIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Contact = () => {
  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1f-1o5e_4QVXGYl1XvfpCYNzQLMegZJed/view", "_blank");
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 9967622465",
      link: "tel:+919967622465",
      color: "#10B981"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "kinjalmomaya99@gmail.com",
      link: "mailto:kinjalmomaya99@gmail.com",
      color: "#3B82F6"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "Kini99",
      link: "https://github.com/Kini99",
      color: "#1F2937"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Kinjal Momaya",
      link: "https://www.linkedin.com/in/kinjal-momaya",
      color: "#0077B5"
    },
    {
      icon: <XIcon />,
      title: "X (Twitter)",
      value: "@kinjal_momaya",
      link: "https://x.com/kinjal_momaya",
      color: "#000000"
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="section-content">
        <div className="section-header animate-fade-in-up">
          <h2>Get In Touch</h2>
          <div className="section-divider"></div>
          <p>Let's collaborate and bring your ideas to life with cutting-edge AI technologies</p>
        </div>

        <div className="contact-container">
          {/* Contact Information - Centered */}
          <div className="contact-info-centered animate-fade-in-up">
            <div className="contact-intro">
              <h3>Let's Connect!</h3>
              <p>
                I'm always excited to discuss new opportunities, innovative projects, 
                and how AI can solve real-world problems. Feel free to reach out!
              </p>
            </div>

            <div className="contact-methods-grid">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method-card"
                  style={{ '--method-color': info.color }}
                >
                  <div className="method-icon">
                    {info.icon}
                  </div>
                  <div className="method-content">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                  <div className="method-arrow">
                    <FaRocket />
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-actions">
              <button className="btn btn-primary" onClick={handleResumeClick}>
                <FaDownload />
                Download Resume
              </button>
            </div>

            <div className="contact-status">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-footer animate-fade-in-up">
          <p>Thank you for visiting! 💛 - Kinjal Momaya</p>
        </div>
      </div>
    </section>
  )
}

export default Contact