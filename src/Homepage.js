import React, { Component } from 'react';
import { Jumbotron} from 'reactstrap';
export class Homepage extends Component{

    render(){
        return(
            <div>
      <Jumbotron>
        <h1 className="display-3">Hello, this is Chuqian Yin!</h1>
        <p className="lead">I am currently a junior student in University of Washington, major in INFO!</p>
        <hr className="my-2" />
        <p>Hope you can know me better through this site!</p>
       
      </Jumbotron>
    </div>
        );
    }
}