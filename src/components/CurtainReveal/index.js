import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import React, { useState }  from "react";
import 'font-awesome/css/font-awesome.min.css';
// import {faXmarkLarge} from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import {faXmark} from '@fortawesome/free-solid-svg-icons';

const CurtainButton = ()=>{

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [translationAmount, setTranslationAmount] = useState('0%'); // Initial value
  const[scaleAmount, setScaleAmount] = useState('0.9'); // Initial value
  const[translationAmount2, setTranslationAmount2] = useState('100%'); // Final value
  const toggleNav = () => {
    // console.log('toggleNav');

setIsNavOpen(prevState => !prevState);
setTranslationAmount(prevAmount => (prevAmount === '0%' ? '50%' : '0%'));

setTranslationAmount2(prevAmount => (prevAmount === '100%' ? '0%' : '100%'));
setScaleAmount(prevAmount => (prevAmount === '0.9' ? '1' : '0.9'));

};

    return (
      
        // <div className="curtain-button" data-nav={isNavOpen}>
        <>
        <main
    style={{
      transform: `translateY(-${translationAmount})`,
      
      // transition: 'transform 500ms cubic-bezier(.13,.53,.38,.97)',
       // Smooth animation
    }}
    ></main>
          <nav>
        <div id="nav-links" style={{
      transform: `translateY(${translationAmount2}) scale(${scaleAmount})`,
      // transition: 'transform 500ms cubic-bezier(.13,.53,.38,.97)',
       // Smooth animation
    }}>
          <a className="nav-link" href="#">
            <h2 className="nav-link-label rubik-font">Home</h2>
            <img className="nav-link-image"  src="https://images.unsplash.com/photo-1666091863721-54331a5db52d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Home" />
          </a>
          <a className="nav-link" href="#">
            <h2 className="nav-link-label rubik-font">Work</h2>
            <img className="nav-link-image" src="https://images.unsplash.com/photo-1666055642230-1595470b98fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=995&q=80" alt="Work" />
          </a>
          <a className="nav-link" href="#">
            <h2 className="nav-link-label rubik-font">About</h2>
            <img className="nav-link-image"  src="https://images.unsplash.com/photo-1666005487638-61f45819c975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="About" />
          </a>
          <a className="nav-link" href="#">
            <h2 className="nav-link-label rubik-font">Contact</h2>
            <img className="nav-link-image" src="https://images.unsplash.com/photo-1665910407771-bc84ad45676b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" alt="Contact" />
          </a>
          <a className="nav-link" href="#">
            <h2 className="nav-link-label rubik-font">Join Us</h2>
            <img className="nav-link-image" src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Join Us" />
          </a>
        </div>
      </nav>
          <button
          data-nav={isNavOpen}
            id="nav-toggle"
            type="button"
            onClick={toggleNav}
          > 
            <FontAwesomeIcon icon={faXmark} />
            <FontAwesomeIcon icon={faCoffee} />
            
          </button>
          </>
    );
};

export default CurtainButton;