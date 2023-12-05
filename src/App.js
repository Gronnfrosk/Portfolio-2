
import CardCarousel from "./components/carousel"
import Footer from "./components/footer"
import ListGroup from 'react-bootstrap/ListGroup';
import { SiNetlify } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from 'react-bootstrap/Image';

import './App.css';

function App() {
  return (
    <>
    <div className="App">
       <header class="mb-4">
          <div class="">
          <h1 class="fs-2 mt-2 text-start">
            <b><u>Portfolio</u></b> <br />2nd year of frontend study at Noroff
          </h1>
          <ListGroup as="ul">
            <ListGroup.Item as="li" action variant="success">
              Hanna Fjeldsaa
            </ListGroup.Item>
            <ListGroup.Item as="li" action variant="success" href="">GitHub: Gronnfrosk</ListGroup.Item>
            <ListGroup.Item as="li" action variant="success" href="">LinkedIn</ListGroup.Item>
            <ListGroup.Item as="li" action variant="success" href="">1st year portfolio</ListGroup.Item>
          </ListGroup>
          </div>
    </header>
    <SiNetlify />
    <FaGithub />
    <FaLinkedin />
       {//<CardCarousel />
       }
    </div>
     <Footer />
    </>
  );
}

export default App;
