import React from "react";
import "./Experience.css";
import ExperienceBox from "./ExperienceBox/ExperienceBox";
import react from "../../images/techStack/react.png";
import js from "../../images/techStack/js.png";
import html from "../../images/techStack/html.png";

function Experience() {
  const experienceData = [
    {
      title: "Badi Company",
      sentences: [
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      ],
      subtitle: "Tech Used",
      images: [react, js, html],
    },
  ];

  return (
    <div className="ex_container">
      <p className="ex_title">Experience</p>
      <div className="ex_experiencebox_container">
        {experienceData.map((value, key) => (
          <ExperienceBox
            title={value.title}
            sentences={value.sentences}
            subtitle={value.subtitle}
            images={value.images}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;