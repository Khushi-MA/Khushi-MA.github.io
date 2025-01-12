import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Analysing Sentiments of Twitter Dataset with DistilBERT and TF-IDF',
    image: 'p (1).png',
    description: `Developed a sentiment analysis model to accurately classify text-based content, achieving 86% accuracy using DistilBERT, outperforming TF-IDF models (Logistic Regression: 82%, SVM: 83%). 
    • Managed data preprocessing and evaluated model performance metrics.`,
  },
  {
    id: 2,
    title: 'IPL Tickets Using NFT Tokens',
    image: 'p (2).png',
    description: `Developed a secure, user-friendly NFT marketplace for buying IPL tickets. 
    • Designed the front-end interface with a focus on attractiveness and intuitive user experience. 
    • Documented the project to support the writing of a research paper.`,
  },
  {
    id: 3,
    title: 'Multilingual Text Classification Using IndicCorp Dataset',
    image: 'p (3).png',
    description: `To detect languages in a multilingual environment, a Multinomial Naive Bayes classifier is applied to the IndicCorp dataset, achieving 73.37% accuracy in identifying Indian languages like Hindi, Bengali, Tamil, etc.`,
  },
  {
    id: 4,
    title: 'Food Distribution System',
    image: 'p (4).png',
    description: `Built a website to connect surplus food holders (restaurants and individuals) with NGOs. 
    • Designed and implemented the database schema and developed RESTful APIs using Java for data handling. 
    • Was responsible for designing the user interface with React.`,
  },
  {
    id: 5,
    title: 'Contact Application',
    image: 'p (5).png',
    description: `Sole developer for creating, building, deploying, and monitoring a containerized application using Docker and Kubernetes.`,
  },
];

const Projects = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = (description) => {
    setPopupContent(description);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="projects-section">
      <h1 className="section-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">
              {project.description}
              <a href="#" onClick={() => openPopup(project.description)}>
                Know More
              </a>
            </p>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>{projects.find((project) => project.description === popupContent)?.title}</h3>
            <p>{popupContent}</p>
            <span className="close-btn" onClick={closePopup}>
              Close
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
