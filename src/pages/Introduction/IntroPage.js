import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './IntroPage.css';
import { Link } from 'react-router-dom';


export class IntroPage extends Component {
    render() {
        var version = localStorage.getItem('version');
        //var version = "AI"
        var opening_text, study_object;
        console.log(version);
        if (version === "AI") {
            opening_text = "The purpose of our project is to help machine to make better moral decision for human.";
            study_object = "a machine";
        } else if (version === "human") {
            opening_text = "The purpose of our project is to study human's moral decision making process.";
            study_object = "some other participants"
        }
        return (
            <div className="overallLayout">
                <div className="introText">
                    <p><b>Welcome to Moral Survey!</b> Thank you for agreeing to take part in this survey.</p>
                    <p>{opening_text}</p>
                    <p>The procedure involves filling an online survey that will take approximately <em>5 to 10 minutes</em>. The questions will be asking whether if you agree on the decisions made by {study_object} in some certain situations. Note that there is no absolute answer and you can freely choose the answer based on your own opinion.</p>
                    <p>Your responses will be confidential and we <em>do not</em> collect identifying information such as your name, email address or IP address.</p>
                    <p><b>Clicking on the <em>Start</em> button below indicates that you have read the above information and voluntarily agree to participate.</b></p>
                    {/*<b>Welcome to Moral Survey!</b> Thank you for agreeing to take part in this survey.<hr/>
                    {opening_text}<hr/>
                    The procedure involves filling an online survey that will take approximately <em>5 to 10 minutes</em>. The questions will be asking whether if you agree on the decisions made by {study_object} in some certain situations. Note that there is no absolute answer and you can freely choose the answer based on your own opinion.<hr/>
                    Your responses will be confidential and we <em>do not</em> collect identifying information such as your name, email address or IP address.<hr/>
                    <b>Clicking on the Start button below indicates that you have read the above information and voluntarily agree to participate.</b>*/}
                </div>
                <br/>
                <Link to="/basicinfo">
                    <Button variant="primary" type="submit" size="lg">Start</Button>
                </Link>
            </div>
        );
    }
}