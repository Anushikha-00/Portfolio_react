import React from "react";
import "./About.css";
import githubImage from "../../images/github.png";
import linkedinImage from "../../images/linkedin.png";

function About() {
  return (
    <div className="about_container">
      <p className="about_text1">
        <span className="highlighted_text">Hi,</span> my name is
      </p>
      <p className="about_text2">Anushikha</p>
      <p className="about_text3">
        I am a  <span className="highlighted_text">Developer</span>
      </p>
      <p className="about_description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <div>
        <a
          href="https://www.linkedin.com/in/harshit-chopra-b98a94189/"
          target="_blank"
        >
          <img src={linkedinImage} alt="linkedinImage" />
        </a>
        <a href="https://github.com/harshitchopra7" target="_blank">
          <img src={githubImage} alt="githubImage" />
        </a>
      </div>
      <a href="mailto: harshit1@gmail.com">
        <button className="about_button">Get in Touch</button>
      </a>
    </div>
  );
}

export default About;