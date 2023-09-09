import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX Design",
    description:
      "Elevating digital interactions with Expert UI/UX Development, ensuring Aesthetic & Functional harmony.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Create Dynamic & Responsive Applications that seamlessly integrate MongoDB, Express.js, React.js, and Node.js for exceptional user experiences.",
  },
  {
    id: 3,
    image: Image3,
    title: "BI Designer",
    description:
      "Empowering your business decisions, leverage Power BI to create insightful visualizations for informed growth.",
  },
];


const Services = () => {
  return <section className='services container section' id='services'>
  <h2 className='section___title'>Services</h2>

  <div className='services___container grid'>
    {data.map(({id, image, title, description}) =>{
      return (
        <div className='services___card' key={id}>
          <img src={image} alt="" className='services___img'/>
          <h3 className='services___title'>{title}</h3>
          <p className='services___description'>{description}</p>
        </div>
      )
    })}
  </div>
  </section>
}

export default Services