import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './OutroPage.css';


export class OutroPage extends Component {
    render() {
        return (
            <div class="overallLayout">
                <div class="textCenter">
                    <div>This is the Outro Page</div>                    
                </div>
                <br/>
                <div class="buttonPosition">
                    <Button href="analytics" variant="primary" type="submit">Analytics</Button>
                    <Button href="/" variant="primary" type="submit">Back to Main</Button>
                </div>
            </div>
        );
    }
}