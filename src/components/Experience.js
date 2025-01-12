import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'KLETech-Center of Excellence in Visual Intelligence (CEVI)',
      logo: 'ed1.png',
      location: 'Hubli, Karnataka, India',
      skills: ['Machine Learning', 'Deep Learning'],
      roles: [
        {
          title: 'Project Intern',
          duration: 'Jul 2024 - Present · 7 mos',
          type: 'Internship · Hybrid',
          description: 'Working on projects involving machine learning and deep learning applications.'
        }
      ]
    },
    {
      company: 'Make in BVB (MiB)',
      logo: 'e2.png',
      location: 'KLE Technological University, Hubballi',
      skills: ['Leadership', 'Budgeting', 'Content Writing', 'Blogging'],
      roles: [
        {
          title: 'Student President',
          duration: 'Dec 2023 - Present · 1 yr 2 mos',
          type: 'Full-time · Hybrid',
          description: 'Leading club activities and managing team operations.'
        },
        {
          title: 'Content Creator',
          duration: 'Feb 2022 - Sep 2024 · 2 yrs 8 mos',
          type: 'Part-time',
          description: 'Created content for Make in BVB blog on Medium platform.'
        }
      ]
    }
  ];

  return (
    <div>

    <h1>Experience</h1>
    <div className="uia-timeline__container">
      
      <div className="uia-timeline__line"></div>
      <div className="uia-timeline__groups">
        {experiences.map((exp, index) => (
          <div className="uia-timeline__point" key={index}>
            <div className="uia-timeline__dot"></div>
            <div className="uia-timeline__point-intro">
              <div className="company-header">
                <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
                <div>
                  <h2 className="uia-timeline__company">{exp.company}</h2>
                  <div className="uia-timeline__location">{exp.location}</div>
                </div>
              </div>
              {exp.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="role-content">
                  <h3 className="role-name">{role.title}</h3>
                  <div className="uia-timeline__details">
                    <span>{role.duration}</span> · <span>{role.type}</span>
                  </div>
                  <div className="uia-timeline__point-description">{role.description}</div>
                </div>
              ))}
              <div className="uia-timeline__skills">
                Skills: {exp.skills.join(' · ')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Experience;
