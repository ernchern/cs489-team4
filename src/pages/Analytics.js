import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Analytics.css';


export class Analytics extends Component {
    render() {
        return (
            <div class="overallLayout">
                <div class="textCenter">
                    
                    
                    <div>This is the Analytics Page</div>
                    <Button variant="primary" type="submit">Go Back</Button>
                
                </div>
            </div>
        );
    }
}