import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import image from '../../assets/docs/pp.jpg';
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src= {image}

                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                  I am a passionate Data Science and AI Engineer with strong interest in Machine Learning, Deep Learning, Generative AI, and Agentic AI systems. I enjoy building intelligent applications that solve real-world problems using data-driven approaches.

                  I have experience working with Python, ML models, and full-stack development, and I am continuously improving my skills in AI systems, LLM-based applications, and modern data science tools.

                  My goal is to contribute to impactful AI products and pursue advanced research in Data Science and Artificial Intelligence.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
