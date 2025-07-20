const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Node.js'];
  return (
    <section id="skills" className="container">
      <h2>My Skillset</h2>
      <div className="skill-box">
        {skills.map(skill => <span key={skill} className="skill">{skill}</span>)}
      </div>
    </section>
  );
};

export default Skills;
