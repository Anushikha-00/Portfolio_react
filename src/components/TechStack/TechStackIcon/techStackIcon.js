import React from 'react'

function TechStackIcon({ data }) {
   
  return (
    <div className="techstack_image_element_container">
        <img src={data.iconImage} alt={data.iconAltProperty} />
        <p>{data.iconName}</p>
    </div> 
  )
}

export default TechStackIcon