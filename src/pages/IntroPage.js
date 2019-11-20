import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './IntroPage.css';


export class IntroPage extends Component {
    render() {
        return (
            <div class="overallLayout">
                <div class="textCenter">
                    
                    
                    <div>This is the Introduction Page</div>
                    <Button href="QuestionPage" variant="primary" type="submit">Start</Button>
                
                </div>
            </div>
        );
    }
}