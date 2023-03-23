import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function BasicExample(props) {
  return (
     <Card className="card">
     <div className="wrapper">
      <Card.Img variant="top" src={props.img} className="cardimg"/>
      </div>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        
        <Card.Text>
        
        </Card.Text>
        <Link to='/Details' className="Go">Click for details</Link>
        
      </Card.Body>
    </Card>
  );
}

export default BasicExample;