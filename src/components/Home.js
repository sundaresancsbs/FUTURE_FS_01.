import React from 'react';

const Home = () => {
  return (
    <section id="home">
      <div className="hero">
        {/* Left Content */}
        <div>
          <h1>Hello, I’m <span className="highlight">Sundaresan</span></h1>
          <p>
            A passionate developer from India, currently pursuing CSBS at Sri Eshwar College of Engineering.
            I build real-world projects and love solving problems using C, C++, Python, and JavaScript.
          </p>
          <a href="/RESUME (1).pdf" download className="btn">Download Resume</a>
        </div>
        {/* Removed profile image */}
      </div>
    </section>
  );
};

export default Home;
