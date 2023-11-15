import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';

function OfficerCard({ id, name, position, pronouns, bio }) {
  const [open, setOpen] = useState(false);

  return (
    <Card style={{ width: '18rem' }}>
      {/* Assuming 'holder.js' is a placeholder image library */}
      <Card.Img variant="top" src="holder.js/100px180" alt="Officer's Image" />
      <Card.Body>
        <Card.Title>{position}</Card.Title>
        <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
  <span style={{ textAlign: 'left' }}>{name}</span>
  <span style={{ textAlign: 'right' }}>{pronouns}</span>
</Card.Header>
        <Button
          variant="outline-dark"
          onClick={() => setOpen(!open)}
          aria-controls={`example-collapse-text-${id}`}
          aria-expanded={open}
        >
          More About Me!
        </Button>
        <Collapse in={open}>
          <div id={`example-collapse-text-${id}`}>
            {/* Your specific content for each card */}
            {bio}
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default OfficerCard;
