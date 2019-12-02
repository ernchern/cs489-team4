import React, { Component } from 'react';
import './QuestionPage.css';
import { Card, Button, Image } from 'react-bootstrap';
import { FirestoreMutation, FirestoreDocument } from "@react-firebase/firestore";
import uuid from 'uuid';

var currentAgree = 0;
var prevAgree = 0;

export class QuestionPage extends Component {
	constructor(props) {
		super(props);
		if(!localStorage.getItem('uuid'))
			localStorage.setItem('uuid', uuid.v4());
		this.state = {
			uuid: localStorage.getItem('uuid'),
			version: localStorage.getItem('version'),
			questions: localStorage.getItem('questions').split(','),
			answers: {},
			options: localStorage.getItem('options'),
			currentIndex: 0,

			//Variables with buttons
			is_first: true,
			is_last: false,
		}
	}

	handleAgree = () => {
		var answers = this.state.answers;
		answers["q" + this.state.questions[this.state.currentIndex]] = {
			agree: true,
			option_type: this.state.options[this.state.currentIndex],
		}
		currentAgree = currentAgree + 10;
		prevAgree = 1;
		this.setState({
			answers: answers,
		});
	}

	handleDisagree = () => {
		var answers = this.state.answers;
		answers["q" + this.state.questions[this.state.currentIndex]] = {
			agree: false,
			option_type: this.state.options[this.state.currentIndex],
		}
		this.setState({
			answers: answers,
		});
	}

	handleNext =  () => {
		if (this.state.currentIndex === 8) { this.setState({ is_last: true }); }
		if (this.state.currentIndex === 0) { this.setState({ is_first: false }); }

		if(this.state.currentIndex < 9) {
			this.setState({
				currentIndex: this.state.currentIndex + 1,
			});
			
		}
		console.log(this.state.answers);
	}

	handlePrev = () => {
		if (prevAgree === 1) {currentAgree = currentAgree - 10};
		if (this.state.currentIndex === 1) { this.setState({ is_first: true }); }
		if (this.state.currentIndex === 9) { this.setState({ is_last: false }); }

		if(this.state.currentIndex > 0) {
			this.setState({
				currentIndex: this.state.currentIndex - 1,
			});
			
		}
	}

	render() {
		if(!this.state.version || !this.state.questions || !this.state.options) {
			return <div>An error occured. Go back to <a href={process.env.PUBLIC_URL + "/"}>Home page</a></div>;
		}
		//{ is_first, is_last } = this.state
		return (
			<div className="questionLayout">
				<div className="prevButton">
					{this.state.is_first && <Button variant="link" size="sm" disabled onClick={this.handlePrev}>Go back to the previous question</Button>}
					{!this.state.is_first && <Button variant="link" size="sm" onClick={this.handlePrev}>Go back to the previous question</Button>}
				</div>
				<Card style={{width: "92%", height: "62vh"}}>
					<Card.Header>Question {this.state.currentIndex + 1}</Card.Header>
					<Card.Body style={{overflowY: "scroll"}}>
						<FirestoreDocument path={"/question/q" + this.state.questions[this.state.currentIndex]}>
							{d => {
								// console.log(d)
								const image = (d.value ? d.value.img_src : "no image")
								const image2 = (d.value ? d.value.img_src2 : "no image2")
								if(d.isLoading !== false) return "";
								var content = d.value['desc_'+this.state.version];
								var descriptions = content['option' + this.state.options[this.state.currentIndex]];
								return (
									<div>
										{d.value && d.value.img_src && (!d.value.img_src2) &&  
										<div style={{textAlign: "center"}}>
											<Image variant="top" src={image} className="oneImage" />
										</div>}
										{d.value && d.value.img_src2 && d.value.img_src2 && 
										<div style={{textAlign: "center"}}>
											<Image variant="top" src={image} className="twoImages" />
											<Image variant="top" src={image2} className="twoImages" />
										</div>}
										{descriptions.split("\n").map((line, i) => {
											if(line.includes("Another participant")) {
												line = line.split("Another participant");
												return <Card.Text key={i}><b>Another participant</b>{line[1]}</Card.Text>;
											}
											if(line.includes("Our AI system")) {
												line = line.split("Our AI system");
												return <Card.Text key={i}><b>Our AI system</b>{line[1]}</Card.Text>;
											}
											return <Card.Text key={i}>{line}</Card.Text>;
										})}
									</div>
									);
							}}
						</FirestoreDocument>
					</Card.Body>
				</Card>
				<div className="buttonAlignment">
					{!this.state.is_last && <Button width="70px" variant="primary" onClick={(event) => {this.handleAgree(); this.handleNext()}}>Agree</Button>}
					{!this.state.is_last && <Button width="70px" variant="primary" onClick={(event) => {this.handleDisagree(); this.handleNext()}}>Disagree</Button>}
					{this.state.is_last && 
						<FirestoreMutation type="set" path={"/userRecord/" + this.state.uuid} style={{marginTop: "20px"}}>
						  {({ runMutation }) => {
							return (
								<Button variant="danger"
									onClick={(event) => {
										this.handleAgree();
										localStorage.setItem('average', currentAgree);
										console.log(localStorage.getItem('average'));
										runMutation({
										  age: localStorage.getItem('age'),
										  gender: localStorage.getItem('gender'),
										  version: localStorage.getItem('version'),
										  nationality: localStorage.getItem('nationality'),
										  answer: this.state.answers,
										  submitTime: Date.now(),
										})
										.then(res => {
										  console.log("Ran mutation ", res);
										  this.props.history.push('/outro');
										})
										.catch(error => {
											alert("An error occured. Please retry.");
										});
									}}>
									<div style={{fontSize: "15px"}}>Agree & Submit</div>
								</Button>
							);
						  }}
						</FirestoreMutation>
					}
					{this.state.is_last && 
						<FirestoreMutation type="set" path={"/userRecord/" + this.state.uuid} style={{marginTop: "20px"}}>
						  {({ runMutation }) => {
							return (
								<Button variant="danger"
									onClick={(event) => {
										this.handleDisagree();
										localStorage.setItem('average', currentAgree);
										console.log(localStorage.getItem('average'));
										runMutation({
										  age: localStorage.getItem('age'),
										  gender: localStorage.getItem('gender'),
										  version: localStorage.getItem('version'),
										  nationality: localStorage.getItem('nationality'),
										  answer: this.state.answers,
										  submitTime: Date.now(),

										})
										.then(res => {
										  console.log("Ran mutation ", res);
										  this.props.history.push('/outro');
										})
										.catch(error => {
											alert("An error occured. Please retry.");
										});
									}}>
									<div style={{fontSize: "15px"}}>Disagree & Submit</div>
								</Button>
							);
						  }}
						</FirestoreMutation>
					}
				</div>
				{/*<div className="buttonPosition">}
					{/*this.state.is_first && <Button variant="primary" size="lg" disabled onClick={this.handlePrev}>Prev</Button>}
					{!this.state.is_first && <Button variant="primary" size="lg" onClick={this.handlePrev}>Prev</Button>*/}
					{/*!this.state.is_last && <Button variant="primary" size="lg" onClick={this.handleNext}>Next</Button>*/}
					
				{/*</div>*/}
			</div>
		);
	}
}