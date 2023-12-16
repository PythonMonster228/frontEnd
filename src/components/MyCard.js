import Card from 'react-bootstrap/Card';
import 'D:/frontV2/myNewApp/my-app/src/components/css/card.css';
import React from 'react';
import axios from 'axios';
import CloseButton from 'react-bootstrap/CloseButton';

function MyCard(props) {
  const handleDelete = (id) => {
    axios.delete(`https://656b455bdac3630cf727ee53.mockapi.io/products/${id}/`)
    };
  return (
    <Card style={{ width: '18rem' }} className="card">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <CloseButton className='button' onClick = {() => handleDelete(props.id)} />
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MyCard;