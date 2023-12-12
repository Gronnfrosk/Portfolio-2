import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function ProjectCard(props) {
const { Name, Description, ScreenShot, Repository, Demo, Project, Built } = props.content;

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    var width = window.innerWidth;
  if (width < 610) {setShow(false)}
  else {
     setShow(true)
  }
};

  return (
    <Card className="mx-auto" style={{ maxWidth: '58rem'}}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={handleClose} width="30" height="30" fill="currentColor" class="bi bi-x-square-fill position-absolute top-0 text-danger end-0 m-2" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
          </svg>
          <Card.Img
           src={ScreenShot}
           className="img-fluid rounded-0"
           alt="A specific venue"
          /> 
        </Modal.Body>
      </Modal> 
      <div className="img-project d-flex flex-wrap flex-row">
      <div className="d-flex flex-column part-1 bg-white px-3 gap-3">
          <div className="title-project fs-3 mb-3 mt-2 d-flex justify-content-between">Project <div className="project-number">{Project}</div></div>
          <div className="list-btn">
          <ListGroup>
            <ListGroup.Item className="top-list">Buildt with:</ListGroup.Item>
            <ListGroup.Item>- {Built[0]}</ListGroup.Item>
            <ListGroup.Item>- {Built[1]}</ListGroup.Item>
            <ListGroup.Item>- {Built[2]}</ListGroup.Item>
          </ListGroup>
          <div className="link-btn text-center">
          <Button variant="dark" className="mt-4 mb-2" href={Repository}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg> Repository</Button>
          <Button variant="info" className="pe-5" href={Demo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg> Demo</Button>
            </div>
            </div>
          </div>
      <Card.Img
      onClick={handleShow}
        variant="top"
        src={ScreenShot}
        className="img-fluid rounded-0"
        alt="Home page of website project"
      />
      </div>
      <Card.Body className="d-flex gap-5 bg-white mt-4">
        <div className="content">
        <Card.Title>{Name}</Card.Title>
        <Card.Text>
        {Description}
        </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;