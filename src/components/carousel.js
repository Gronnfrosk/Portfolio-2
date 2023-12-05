import Carousel from 'react-bootstrap/Carousel';
import ProjectCard from './card';
import { semesterProject2, javaScriptFrameworksCA, projectExam2 } from "./ProjectContent"

function CardCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={100000000000000}>
        <div className="bg-dark">
       <ProjectCard content={semesterProject2}/></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000000000000}>
      <div className="bg-danger"><ProjectCard content={javaScriptFrameworksCA}/></div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000000000000}>
        <div className="bg-info">
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