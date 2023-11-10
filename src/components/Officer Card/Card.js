import { ToggleButton } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function OfficerCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Position</Card.Title>
        <Card.Header>NameandPronouns</Card.Header>
        <Card.Link>Linkedin url</Card.Link>
        <Card.Img>
        </Card.Img>
        <ToggleButton/>
      </Card.Body>
    </Card>
  );
}

export default OfficerCard;