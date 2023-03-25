import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button} from 'reactstrap';
import './card.css';
import Modals from '../components/Modal'



const Cards = (props) => {
  return (
    <div className="card-block">
      <Card className="card">
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">{props.title}</CardTitle>
          <CardText>{props.content} </CardText>
          <Button className="btn-detail" >Details <Modals/> </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;