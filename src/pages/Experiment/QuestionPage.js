import React, { Component } from 'react';
import './QuestionPage.css';
import { Card, Button } from 'react-bootstrap'

export class QuestionPage extends Component {
    render() {
        return (
            <div class="overallLayout">
                <div class="textCenter">
                    <div>This is the Question Page</div>
                    <br/>
                </div>
                <Card style={{width: "80%"}}>
                    <Card.Header>Question 1</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div>
                                <div>Bruce is a police officer working against the city criminals. In an action of
bringing down him, the criminals capture 2 hostages: 1 female who is also
Bruce's fiancee, and another ordinary person. They force Bruce to choose one of
the hostages, and they will kill the other one. Bruce should:</div>
                                <br/>
                                <div>- Save his fiancee.</div>
                                <div>- Flip a coin to decide.</div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <div class="buttonPosition">
                    <Button variant="primary" type="submit" size="lg">Prev</Button>
                    <Button variant="primary" type="submit" size="lg">Next</Button>
                </div>
            </div>
        );
    }
}