import "./portfolio.css";
import IMG1 from "../../assets/Coffee-Store -Website.png";
import IMG3 from "../../assets/Portfolio preview.png";
import IMG2 from "../../assets/reservation-form.png";
import IMG4 from "../../assets/Cloth-Website-Design.png";
import IMG5 from "../../assets/Weather-app-design.png";
import IMG6 from "../../assets/Food-Delivery -app.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Cloth Store Website",
      img: IMG4,
      description: "A stylish and user-friendly Cloth Store Website Figma design with seamless navigation, a clean layout, and a responsive shopping experience.",
      technologies: "Figma Design",
      figma: "https://www.figma.com/design/EWaWZsv8qlcWBfoQtjKNLx/Untitled?node-id=0-1&t=9gWgpKfCay3EHILz-1",
    },
    {
      id: 2,
      title: "Wether App Design",
      img: IMG5,
      description: "A sleek and intuitive Weather App Figma design featuring real-time forecasts, interactive UI, and a responsive layout for a seamless user experience.",
      technologies: "Figma Design",
      figma: "https://www.figma.com/design/PstxDAkX7FUqiLjgkRutpP/Weather-App-UI-Design?node-id=2-2214&t=NA2wCzKM28fi4xBO-1",
    },
    {
      id: 3,
      title: "Food Delivery App",
      img: IMG6,
      description: "A modern and user-friendly Food Delivery App Figma design with seamless navigation, real-time order tracking, and an engaging UI for a smooth ordering experience.",
      technologies: "Figma Design",
      figma: "https://www.figma.com/design/nywbb4FUxzGqUz4OIS4D4P/Food-Delivery-App?node-id=223-3474&t=NA2wCzKM28fi4xBO-1",
    },
    {
      id: 4,
      title: "Hospital Reservation Form",
      img: IMG2,
      description: "A booking website for doctor's appointments at the hospital. The website is mainly functionally developed with JavaScript.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://booking-task.vercel.app/",
      github: "https://github.com/Mona-Lisa15/Booking-Task",
    },
    {
      id: 5,
      title: "To-Do List",
      img: IMG3,
      description: "Designed and implemented a dynamic task management application with features like task creation, categorization, and real-time updates.",
      technologies: "HTML | CSS | JavaScript | React.js",
      link: "https://task-list-gules.vercel.app/",
      github: "https://github.com/Mona-Lisa15/TaskList",
    },
    {
      id: 6,
      title: "Coffee Store Website",
      img: IMG1,
      description: "Developed a modern, responsive coffee store website featuring online ordering, menu display, and a seamless user experience.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://coffee-shop-b3eo-monalisha-patajoshis-projects.vercel.app/",
      github: "https://github.com/Mona-Lisa15/Coffee-Shop",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Personal Projects</h5>
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
              <p><strong>Technologies:</strong> {pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {pro.figma ? (
                <a href={pro.figma} target="_blank" className="btn btn-primary" rel="noreferrer">
                  View Figma Design
                </a>
              ) : (
                <>
                  <a href={pro.github} target="_blank" className="btn" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={pro.link} target="_blank" className="btn btn-primary" rel="noreferrer">
                    Live Demo
                  </a>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
































/*const Portfolio = () => {
  const soloProjects = [
    { id: 1,
      title: "Cloth Store Website",
      img: IMG2,
      description: "A booking website for doctor's appointments at the hospital. The website is mainly functionally developed with JavaScript",
      technologies: "Figma Design",
      Figma: "https://www.figma.com/design/EWaWZsv8qlcWBfoQtjKNLx/Untitled?node-id=0-1&t=9gWgpKfCay3EHILz-1",
      },
      { id: 2,
        title: "Cloth Store Website",
        img: IMG2,
        description: "A booking website for doctor's appointments at the hospital. The website is mainly functionally developed with JavaScript",
        technologies: "Figma Design",
        Figma: "https://www.figma.com/design/EWaWZsv8qlcWBfoQtjKNLx/Untitled?node-id=0-1&t=9gWgpKfCay3EHILz-1",
        },

      { id: 3,
        title: "Cloth Store Website",
        img: IMG2,
        description: "A booking website for doctor's appointments at the hospital. The website is mainly functionally developed with JavaScript",
        technologies: "Figma Design",
        Figma: "https://www.figma.com/design/EWaWZsv8qlcWBfoQtjKNLx/Untitled?node-id=0-1&t=9gWgpKfCay3EHILz-1",
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
          href={pro.figma}
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
        >
          Figma Link
        </a>
      </div>
    </article>
  ))}
      </div>
    </section>
  );
};

const Portfolio = () => {
  const soloProjects = [
    {
      id: 4,
      title: "Hospital reservation form",
      img: IMG2,
      description: "A booking website for doctor's appointments at the hospital. The website is mainly functionally developed with JavaScript",
      technologies: "HTML | CSS | JavaScript",
      link: "https://booking-task.vercel.app/",
      github: "https://github.com/Mona-Lisa15/Booking-Task",
    },
    {
      id: 5,
      title: "To Do List",
      img: IMG3 ,
      description:"Designed and implemented a dynamic task management application with features like task creation,categorization,and real-time updates.",
      technologies: "Html | CSS | JavaScript | React Js",
      link: "https://task-list-gules.vercel.app/",
      github: "https://github.com/Mona-Lisa15/TaskList",
    },
    {
      id: 6,
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

export default Portfolio;*/
