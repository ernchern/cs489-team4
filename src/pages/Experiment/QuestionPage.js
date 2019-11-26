import React, { Component } from 'react';
import './QuestionPage.css';
import { Card, Button } from 'react-bootstrap';
import { FirestoreCollection, FirestoreDocument } from "@react-firebase/firestore";

export class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            version: localStorage.getItem('version'),
            questions: localStorage.getItem('questions').split(','),
            options: localStorage.getItem('options'),
            currentIndex: 0,
        }
    }

    handleNext = () => {
        if(this.state.currentIndex < 9)
            this.setState({
                currentIndex: this.state.currentIndex + 1,
            });
    }

    render() {
        return (
            <div className="overallLayout">
                <div className="textCenter">
                    <div>This is the Question Page</div>
                    <br/>
					<div>{this.props.age}</div>
                </div>
                <Card style={{width: "80%"}}>
                    <Card.Header>Question {this.state.currentIndex + 1}</Card.Header>
                    <Card.Body>
                        <FirestoreDocument path={"/question/q" + this.state.questions[this.state.currentIndex]}>
                            {d => {
                                if(d.isLoading !== false) return "";
                                var content = d.value['desc_'+this.state.version];
                                var descriptions = content['option' + this.state.options[this.state.currentIndex]];
                                return descriptions.split("\n").map((line, i) => <Card.Text key={i}>{line}</Card.Text>);
                            }}
                        </FirestoreDocument>
                    </Card.Body>
                </Card>
                <br/>
                <div className="buttonPosition">
                    <Button variant="primary" type="submit" size="lg">Prev</Button>
                    <Button variant="primary" type="submit" size="lg" onClick={this.handleNext}>Next</Button>
                </div>
            </div>
        );
    }
}