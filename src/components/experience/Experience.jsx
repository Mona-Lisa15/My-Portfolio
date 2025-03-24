import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> UI/UX Designer</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Figma</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Photoshop, Canva </h4>
            </article>  
            </div>
          
            <div className="experience__frontend"><br></br>
            <h3>Front-end Development</h3>  
            <div className="experience__content">     
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Html , CSS ,Javascript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Reactjs, WordPress</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>BootStrap, Tailwind Css </h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Responsive Design</h4>
            </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience