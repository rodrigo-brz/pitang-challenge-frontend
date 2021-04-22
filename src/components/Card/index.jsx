import { Card } from 'react-bootstrap';

function MyCard({ title, children }) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

export default MyCard;
