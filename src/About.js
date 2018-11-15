import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
export class About extends Component{


    render(){
        return(
            <ListGroup>
            <ListGroupItem>Favorite Sports: Basketball, Tennis</ListGroupItem>
            <ListGroupItem>Favorite music: Jazz, popular</ListGroupItem>
            <ListGroupItem>Favorite Singer: Chris Lee</ListGroupItem>
            <ListGroupItem>Favorite Band: Maroon 5</ListGroupItem>
          </ListGroup>
        );
    }
}