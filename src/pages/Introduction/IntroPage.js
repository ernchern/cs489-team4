import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './IntroPage.css';


export class IntroPage extends Component {
    render() {
        console.log(localStorage.getItem('version'));
        return (
            <div className="overallLayout">
                <div className="textCenter">
                   <div>
                        Welcome to Moral Survey! Thank you for agreeing to take part in this survey.
                        <br/>
                        <br/>
                        The purpose of our project is to study human's moral decision making process and help machine to make better moral decision for human.
                        <br/>
                        <br/>
                        The procedure involves filling an online survey that will take approximately 5 to 10 minutes. The questions will be asking whether if you agree on the moral decisions in some certain situations. Note that there is no absolute answer and you can freely choose the answer based on your own opinion.
                        <br/>
                        <br/>
                        Your responses will be confidential and we do not collect identifying information such as your name, email address or IP address.
                        <br/>
                        <br/>
                        Clicking on the start button below indicates that you have read the above information and voluntarily agree to participate.
                    </div>
                    <Button href="basicinfo" variant="primary" type="submit">Start</Button>
                </div>
            </div>
        );
    }
}
