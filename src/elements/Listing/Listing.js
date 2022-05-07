import React from 'react'
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function Listing(props) {

    let navigate=useNavigate()
    let location=useLocation()

  return (
    <Card onClick={()=>{
        navigate(location.pathname+"/1")
    }}>
            <Card.Img variant="top" src="https://picsum.photos/200/100" />
            <Card.Body>
              <Card.Title>{props.amount}</Card.Title>
              <Card.Text>
                Fully furnished 2bhk Apartment for Rent in Dubai Silicon Oasis
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Silicon Heights Building</ListGroupItem>
              <ListGroupItem>Al Hilal Brokers</ListGroupItem>
            </ListGroup>
          </Card>

  )
}

export default Listing