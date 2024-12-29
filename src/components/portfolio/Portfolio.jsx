import "./portfolio.css";
import IMG1 from "../../assets/Coffee-Store -Website.png";
import IMG3 from "../../assets/Portfolio preview.png";
import IMG2 from "../../assets/reservation-form.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Hospital reservation form",
      img: IMG2,
      description: "A booking website for doctor's appointments at the hospital. The website is mainly functionally developed with JavaScript",
      technologies: "HTML | CSS | JavaScript",
      link: "https://booking-task.vercel.app/",
      github: "https://github.com/Mona-Lisa15/Booking-Task",
    },
    {
      id: 2,
      title: "To Do List",
      img: IMG3 ,
      description:"Designed and implemented a dynamic task management application with features like task creation,categorization,and real-time updates.",
      technologies: "Html | CSS | JavaScript | React Js",
      link: "https://task-list-gules.vercel.app/",
      github: "https://github.com/Mona-Lisa15/TaskList",
    },
    {
      id: 3,
      title: "Coffee-Store-Website",
      img: IMG1,
      description: "Developed a modern,responsive coffee store website featuring online ordering,menu display,and a seamless user experience.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://coffee-shop-b3eo-monalisha-patajoshis-projects.vercel.app/",
      github: "https://github.com/Mona-Lisa15/Coffee-Shop",
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Personal Project </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
