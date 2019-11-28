import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './OutroPage.css';


export class OutroPage extends Component {
    render() {
        return (
            <div className="overallLayout">
                <div className="outroText">
					<p>Thank you so much for participating in the survey!</p>
                    <hr/>
					<p>Moral Survey is actually <b>a blind experiment.</b></p>
                    <p>Two sets of questions are randomly assigned to our participants. One tells the participants that moral decisions are all made by machine, while the other one tells that some humans have made the same moral decisions. You had only answered one of the question sets.</p>
					<hr/>
                    <p>The purpose of this experiment is <em><b>to study if human has any bias on moral decisions made by machine</b>, that human may change their opinion, depending on who has made the decisions.</em></p>
					<p>This is an important experiment to measure the level of trust of human on machine, before we discuss how machine should make their moral decisions. The machine's decisions will only have its significant meaning, if human trusts its decisions, as much as other human's decisions.</p>
					<hr/>
                    <p>If you are interested in our experiment or you are curious about the final result analysis, please reach us <a href="https://github.com/ernchern/cs489-team4">here</a>.</p>
					<p>Thank you again for your support and participation. :)</p>
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