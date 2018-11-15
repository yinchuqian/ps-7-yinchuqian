import React, { Component } from 'react';
import * as d3 from 'd3';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, Col
} from 'reactstrap';

export class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }   
    }

    componentDidMount() {
        d3.csv('data/data.csv').then((data) => {
            this.setState({
                data:data
            });
        })
    }

    render() {
        let list = this.state.data.map((data) => {
            return <Col sm="6" md='6' key={data.title}>
                <Card>
                    <CardBody>
                        <CardTitle>{data.title}</CardTitle>
                    </CardBody>
                    <CardImg width="100%" src={data.img} alt={data.title} />
                    <CardBody>
                        <CardText>{data.text}</CardText>
                        <CardLink href={data.link}>Click to Open</CardLink>
                    </CardBody>
                </Card>
            </Col>
        })
        return (
            <div>
                <h1>My Project</h1>
                <div className="container">
                <div className= "row">
                {list}
                </div>
                </div>
            </div>
        );
    }
}