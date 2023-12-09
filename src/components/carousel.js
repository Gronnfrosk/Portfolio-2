import Carousel from 'react-bootstrap/Carousel';
import ProjectCard from './card';
import { semesterProject2, javaScriptFrameworksCA, projectExam2 } from "./ProjectContent"

function CardCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={100000000000000}>
        <div className="carousel-container">
       <ProjectCard content={semesterProject2}/></div>
      </Carousel.Item>
      <Carousel.Item interval={100000000000000}>
      <div className="carousel-container"><ProjectCard content={javaScriptFrameworksCA}/></div>
      </Carousel.Item>
      <Carousel.Item interval={100000000000000}>
        <div className="carousel-container">
          <ProjectCard content={projectExam2}/>
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CardCarousel;

//import ExampleCarouselImage from 'components/ExampleCarouselImage';
//<ExampleCarouselImage text="First slide" />