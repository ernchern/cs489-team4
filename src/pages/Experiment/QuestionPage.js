import React, { Component } from 'react';
import './QuestionPage.css';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FirestoreMutation, FirestoreDocument } from "@react-firebase/firestore";

export class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            version: localStorage.getItem('version'),
            questions: localStorage.getItem('questions').split(','),
            options: localStorage.getItem('options'),
            currentIndex: 0,

            //Variables with buttons
            is_first: true,
            is_last: false,
        }
		console.log(this.props.age)
    }

    handleNext = () => {
        if (this.state.currentIndex === 8) { this.setState({ is_last: true }); }
        if (this.state.currentIndex === 0) { this.setState({ is_first: false }); }

        if(this.state.currentIndex < 9) {
            this.setState({
                currentIndex: this.state.currentIndex + 1,
            });
            
        }
    }

    handlePrev = () => {
        if (this.state.currentIndex === 1) { this.setState({ is_first: true }); }
        if (this.state.currentIndex === 9) { this.setState({ is_last: false }); }

        if(this.state.currentIndex > 0) {
            this.setState({
                currentIndex: this.state.currentIndex - 1,
            });
            
        }
    }

    handleSubmit = () => {
        // Submit the information

    }
	

    render() {
        //{ is_first, is_last } = this.state
        return (
            <div className="overallLayout">
                <div className="titleCenter">
                    <div>You are on question number {this.state.currentIndex+1}</div>
                    <br/>
                </div>
                <Card style={{width: "80%"}}>
                    <Card.Header>Question {this.state.currentIndex + 1}</Card.Header>
                    <Card.Body>
                        <FirestoreDocument path={"/question/q" + this.state.questions[this.state.currentIndex]}>
                            {d => {
                                console.log(d)
                                if(d.isLoading !== false) return "";
                                var content = d.value['desc_'+this.state.version];
                                var descriptions = content['option' + this.state.options[this.state.currentIndex]];
                                return descriptions.split("\n").map((line, i) => <Card.Text key={i}>{line}</Card.Text>);
                            }}
                        </FirestoreDocument>
                    </Card.Body>
                </Card>
                <br/>
                <ButtonGroup style={{alignContent: "center"}}>
                    <Button width="50px" variant="outline-primary">Agree</Button>
                    <Button width="50px" variant="outline-primary">Disagree</Button>
                </ButtonGroup>
                <br/>
                <br/>
                <div className="buttonPosition">
                    {this.state.is_first && <Button variant="primary" size="lg" disabled onClick={this.handlePrev}>Prev</Button>}
                    {!this.state.is_first && <Button variant="primary" size="lg" onClick={this.handlePrev}>Prev</Button>}
                    {!this.state.is_last && <Button variant="primary" size="lg" onClick={this.handleNext}>Next</Button>}
                    {this.state.is_last && 
                        <FirestoreMutation type="set" path="/userRecord/test">
                          {({ runMutation }) => {
                            return (
                                <Button variant="danger" size="lg" href="outro"
                                    onClick={(event) => {
                                        runMutation({
                                          nowOnCli: Date.now(),
                                        }).then(res => {
                                          console.log("Ran mutation ", res);
                                        });
                                    }}>
                                    Submit
                                </Button>
                            );
                          }}
                        </FirestoreMutation>
                    }
                </div>
            </div>
        );
    }
}