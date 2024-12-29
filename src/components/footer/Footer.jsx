import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Monalisha Patajoshi</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="http://www.linkedin.com/in/monalisa-patajoshi-228674214" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Mona-Lisa15" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Mona 2024. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer