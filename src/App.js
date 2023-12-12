
import CardCarousel from "./components/carousel"
import Footer from "./components/footer"
//import ListGroup from 'react-bootstrap/ListGroup';
//import { SiNetlify } from "react-icons/si";
//import { FaGithub, FaLinkedin } from "react-icons/fa";
import './App.scss';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <>
    <div className="main">
    <section className="about">
      <header className="m-5 fs-3">
          Hello!
          <h1><b>I am Hanna Fjeldsaa</b></h1>
          Frontend developer 
        
      </header>
      <div className="description">
        <p>
          Yet another year has passed by with frontend development study at Noroff and now I want to present to you
          my three most recent projects. Please note: These websites are for fictional companies. No actual transactions can occur on these websites.
        </p>
        <div className="links text-center mt-4 d-flex justify-content-center align-items-center gap-4"> 
          <a
            href="https://www.linkedin.com/in/hanna-fjeldsaa-0b4797127/"
            title="My LinkedIn profile"
            className="text-decoration-none"
          >
          <FaLinkedin/>
          </a>
          <a
            href="https://dreamy-klepon-fd057b.netlify.app/"
            title="My 1st year portfolio"
            className="text-decoration-none d-flex flex-column align-items-center gap-1"
          >
            <Image src="./images/frogicon.PNG" roundedCircle className="frog"/>
          </a>
           <a
              href="https://github.com/Gronnfrosk"
              title="My GitHub profile"
              className="text-decoration-none"
            >
          <FaGithub />
          </a>
          </div>
      </div>
      <div className="short-cut">
      <a href="#projects" className="btn">
              <svg width="277" height="62">
                <defs>
                  <linearGradient id="grad1">
                    <stop offset="0%" stopColor="white" />
                    <stop offset="33%" stopColor="white" />
                    <stop offset="100%" stopColor="white" />
                  </linearGradient>
                </defs>
                <rect
                  x="5"
                  y="5"
                  rx="25"
                  fill="none"
                  stroke="url(#grad1)"
                  width="266"
                  height="50"
                ></rect>
              </svg>
              <span>
                  Second year projects
              </span>
              <i className="arrow down"></i>
            </a>
          </div>
    </section>
    <section className="portrait-section p-5">
      <div className="border-light">
        <Image src="./images/portfolio-me.jpg" className="portrait"/>
      </div>
      <div className="dark-border">
      <div className="border-dark position-relative">
      </div>
      </div>
    </section>
    </div>
    <section className="project-carousel" >
      <div style={{width: "100%", margin: "0 50px"}} id="projects">
        <CardCarousel />
      </div>
    </section>
    <Footer />
    </>
  );
}

export default App;