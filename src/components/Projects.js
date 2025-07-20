import React from 'react';

const projects = [
  {
    title: 'Task Management System',
    image: '/project 1.png',
    tech: ['React', 'CSS'],
    link: 'task-mangement-system-92wd-git-main-sundaresan-mws-projects.vercel.app',
    github: 'https://github.com/sundaresancsbs/Task-Mangement-System'
  },
  {
    title: 'Foodie blog app ',
    image: '/project 2.jpg',
    tech: ['nextjs', 'CSS'],
    link: 'https://your-health-app.com',
    github: 'https://github.com/sundaresancsbs/foodie-app-blog'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p><strong>Tech:</strong> {proj.tech.join(', ')}</p>
            <div className="project-links">
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn">Live</a>
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
