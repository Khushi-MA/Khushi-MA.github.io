import React from 'react';  
import './Projects.css'; // Importing the CSS for styling

const projects = [
  {
    id: 1,
    title: 'Analysing Sentiments of Twitter Dataset with DistilBERT and TF-IDF (Python)',
    image: 'distilbert-project.jpg',
    description: `Developed a sentiment analysis model to accurately classify text-based content, achieving 86% accuracy using DistilBERT, outperforming TF-IDF models (Logistic Regression: 82%, SVM: 83%). 
    • Managed data preprocessing and evaluated model performance metrics.`,
  },
  {
    id: 2,
    title: 'IPL Tickets Using NFT Tokens (Ethereum, Ganache, React)',
    image: 'nft-marketplace.jpg',
    description: `Developed a secure, user-friendly NFT marketplace for buying IPL tickets. 
    • Designed the front-end interface with a focus on attractiveness and intuitive user experience. 
    • Documented the project to support the writing of a research paper.`,
  },
  {
    id: 3,
    title: 'Multilingual Text Classification Using IndicCorp Dataset (Python)',
    image: 'indiccorp-classification.jpg',
    description: `To detect languages in a multilingual environment, a Multinomial Naive Bayes classifier is applied to the IndicCorp dataset, achieving 73.37% accuracy in identifying Indian languages like Hindi, Bengali, Tamil, etc.`,
  },
  {
    id: 4,
    title: 'Food Distribution System (Full Stack Java, SQL, React)',
    image: 'food-distribution.jpg',
    description: `Built a website to connect surplus food holders (restaurants and individuals) with NGOs. 
    • Designed and implemented the database schema and developed RESTful APIs using Java for data handling. 
    • Was responsible for designing the user interface with React.`,
  },
  {
    id: 5,
    title: 'Contact Application (Dockerized Website with Kubernetes)',
    image: 'contact-application.jpg',
    description: `Sole developer for creating, building, deploying, and monitoring a containerized application using Docker and Kubernetes.`,
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
