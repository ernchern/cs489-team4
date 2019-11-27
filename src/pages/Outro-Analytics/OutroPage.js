import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './OutroPage.css';


export class OutroPage extends Component {
    render() {
        return (
            <div className="overallLayout">
                <div className="textCenter">
                    <div>
					Thank you so much for participating in the survey!
					<br/>
					<br/>
					Moral Survey is actually a blinded experiment. Two sets of questions are randomly assigned to our participants. One tells the participants that moral decisions are all made by machine, while the other one tells that some humans have made the same moral decisions. You had only answered one of the question sets.
					<br/>
					<br/>
					The purpose of this experiment is to study if human has any bias on moral decisions made by machine, that human may change their opinion, depending on who has made the decisions.
					<br/>
					<br/>
					This is an important experiment to measure the level of trust of human on machine, before we discuss how machine should make their moral decisions. The machine's decisions will only have its significant meaning, if human trusts its decisions, as much as other human's decisions.
					<br/>
					<br/>
					If you are interested in our experiment or you are curious about the final result analysis, please tell us.
					<br/>
					<br/>
					Thank you again for your support and participation. :)
					</div>                    
                </div>
                <br/>
                <div className="buttonPosition">
                    <Button href="analytics" variant="primary" type="submit">Analytics</Button>
                    <Button href="/" variant="primary" type="submit">Back to Main</Button>
                </div>
            </div>
        );
    }
}