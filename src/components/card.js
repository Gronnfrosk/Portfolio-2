import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function ProjectCard(props) {
const { Name, Description, ScreenShot, Repository, Demo } = props.content;

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className="mx-auto" style={{ width: '58rem'}}>
        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
                <Card.Img
            src="./images/home-page.PNG"
            className="img-fluid rounded-0"
            alt="A specific venue"
        />
        </Modal.Body>
      </Modal>
      <Card.Img variant="top" src={ScreenShot} /> 
      <Card.Img
        variant="top"
        src="./images/home-page.PNG"
        className="img-fluid rounded-0"
        alt="A specific venue"
      />
      <Card.Body>
        <Card.Title>{Name}</Card.Title>
        <Card.Text>
        {Description}
        </Card.Text>
        <Button variant="info w-100 mb-2" href={Repository}>GitHub repository</Button>
        <Button variant="info w-100" href={Demo}>GitHub demo</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;