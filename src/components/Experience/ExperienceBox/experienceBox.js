import React from "react";
import "./ExperienceBox.css";

function ExperienceBox({ title, sentences, subtitle, images }) {
    
    // title - string
    // sentences - array of strings
    // subtitle - string 
    // images - array of images

  return( 
    <div className="ex_box_container">
        <p>{title}</p>
        <div>
            {sentences.map((value, key) => (
                <p>{value}</p>
            ))}
        </div>
        <p>{subtitle}</p>
        <div>
            {images.map((value, key) => (
                <img src={value} />
            ))}
        </div>
    </div>
  );
}

export default ExperienceBox;