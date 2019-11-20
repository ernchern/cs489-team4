import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './OutroPage.css';


export class OutroPage extends Component {
    render() {
        return (
            <div class="overallLayout">
                <div class="textCenter">
                    
                    
                    <div>This is the Outro Page</div>
                    <Button variant="primary" type="submit">Analytics</Button>
                
                </div>
            </div>
        );
    }
}