import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      logo: 'ed1.png', // Replace with the actual path to the KLE logo
      name: 'KLE Technological University - Hubballi (India)',
      degree: 'Bachelor of Engineering - BE, Computer Science',
      duration: '2021 - 2026',
      skills: [
        'C++',
        'Accounting',
        'Selenium Testing',
        'Microsoft PowerPoint',
        'Communication',
        'Microsoft Excel',
        'Content Development',
        'Cascading Style Sheets (CSS)',
        'HTML',
        'Microsoft Word',
        'SQL',
        'Data Analysis',
        'Presentation Skills',
      ],
    },
    {
      logo: 'ed2.png', // Replace with the actual path to the Chetan PU logo
      name: 'Chetan PU Science College, Hubli',
      degree: 'Pre University Degree, Science (PCMB)',
      duration: '2019 - 2021',
      grade: '95%',
      activities: [
        'Bagged second prize in debate, essay, and other activities.',
      ],
    },
    {
      logo: 'ed3.png', // Replace with the actual path to the Guru Nanak Dev Public School logo
      name: 'Guru Nanak Dev Public School, Bidar, Karnataka',
      degree: 'Schooling, CBSE',
      duration: '2009 - 2019',
      grade: '95%',
      activities: [
        'Appointed Deputy Head Girl in Grade 9 and promoted to Head Girl in Grade 10.',
        'Represented the school in quiz and essay competitions.',
      ],
      skills: ['Communication', 'Leadership'],
    },
  ];


  return (
    <section className="education-section">
      <h1 className="section-title">Education</h1>
      <div className="education-cards">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="education-header">
              <img src={edu.logo} alt={`${edu.name} logo`} className="education-logo" />
              <div>
                <h2 className="education-name">{edu.name}</h2>
                {edu.degree && <p className="education-degree">{edu.degree}</p>}
                <div className="education-details-line">
                  <p>
                    {edu.duration && <span className="education-duration">{edu.duration}</span>}
                    {edu.duration && edu.grade && <span className="separator"> · </span>}
                    {edu.grade && <span className="education-grade">Grade: {edu.grade}</span>}
                  </p>
                </div>
                <div className='subheading'>Activities:</div>
                <p>
                  <ul className="education-details">
                    {edu.activities?.length > 0 && (
                      edu.activities.map((activity, idx) => (
                        <li key={idx}>{activity}</li>
                      ))
                    )}
                  </ul>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
};

export default Education;
