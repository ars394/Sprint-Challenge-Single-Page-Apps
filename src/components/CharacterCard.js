import React from "react";
import styled from "styled-components";
// import { Card, CardText, CardTitle, CardBody } from "reactstrap";

const Card = styled.div`
  background-color: #b8dcaa;
  width: 70%;
  height: 12%;
  border-radius: 15px;
  padding: 4%;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 40px auto;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const Title = styled.div`
  font-size: 1.3rem;
  border-bottom: 2px solid black;
  font-family: 'Oxygen', sans-serif;
  padding: 2%;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  
  font-size: 1.1rem;
  font-family: 'Oxygen', sans-serif;
  padding: 2%
`;

const CardImage = styled.img`
    width: 100px;
    height: 100px;
    padding: 5px;
    
`;


const CharacterCard = props => {
  return (
      <Card>
      <CardImage src={props.image} />
        <Title>{props.name}</Title>
        <CardContent>Status:{props.status}</CardContent>
        <CardContent>Species:{props.species}</CardContent>
        <CardContent>Gender:{props.gender}</CardContent>
        {/*<CardContent>Type:{props.origin}</CardContent> */}
      </Card>
  )
}

export default CharacterCard;