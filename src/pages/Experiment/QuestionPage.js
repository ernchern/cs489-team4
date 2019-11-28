import React, { Component } from 'react';
import './QuestionPage.css';
import { Card, Button, ButtonGroup, Image } from 'react-bootstrap';
import { FirestoreMutation, FirestoreDocument } from "@react-firebase/firestore";
import uuid from 'uuid';

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

		console.log(this.state);
	}

	handleAgree = () => {
		var answers = this.state.answers;
		answers["q" + this.state.questions[this.state.currentIndex]] = {
			agree: true,
			option_type: this.state.options[this.state.currentIndex],
		}
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
			return <div>An error occured. Go back to <a href="/">Home page</a></div>;
		}
		//{ is_first, is_last } = this.state
		return (
			<div className="overallLayout">
				<div className="titleCenter">
					{/*<div>You are on question number {this.state.currentIndex+1}</div>
					<br/>*/}
				</div>
				<Card style={{width: "88%", height: "70vh"}}>
					<Card.Header>Question {this.state.currentIndex + 1}</Card.Header>
					<Card.Body style={{overflowY: "scroll"}}>
						<FirestoreDocument path={"/question/q" + this.state.questions[this.state.currentIndex]}>
							{d => {
								console.log(d)
								const image = (d.value ? d.value.img_src : "no image")
								console.log(image)
								if(d.isLoading !== false) return "";
								var content = d.value['desc_'+this.state.version];
								var descriptions = content['option' + this.state.options[this.state.currentIndex]];
								return (
									<div>
										{d.value && d.value.img_src && <Image variant="top" src={image} style={{width: "100%",  marginBottom: "20px" }} />}
										{descriptions.split("\n").map((line, i) => <Card.Text key={i}>{line}</Card.Text>)}
									</div>
									);
							}}
						</FirestoreDocument>
					</Card.Body>
				</Card>
				<br/>
				<ButtonGroup style={{alignContent: "center"}}>
					<Button width="50px" variant="outline-primary" onClick={this.handleAgree}>Agree</Button>
					<Button width="50px" variant="outline-primary" onClick={this.handleDisagree}>Disagree</Button>
				</ButtonGroup>
				<br/>
				<br/>
				<div className="buttonPosition">
					{this.state.is_first && <Button variant="primary" size="lg" disabled onClick={this.handlePrev}>Prev</Button>}
					{!this.state.is_first && <Button variant="primary" size="lg" onClick={this.handlePrev}>Prev</Button>}
					{!this.state.is_last && <Button variant="primary" size="lg" onClick={this.handleNext}>Next</Button>}
					{this.state.is_last && 
						<FirestoreMutation type="set" path={"/userRecord/" + this.state.uuid}>
						  {({ runMutation }) => {
							return (
								<Button variant="danger" size="lg"
									onClick={(event) => {
										runMutation({
										  age: localStorage.getItem('age'),
										  gender: localStorage.getItem('gender'),
										  version: localStorage.getItem('version'),
										  nationality: localStorage.getItem('nationality'),
										  answer: this.state.answers,

										})
										.then(res => {
										  console.log("Ran mutation ", res);
										  this.props.history.push('/outro');
										})
										.catch(error => {
											alert("An error occured. Please retry.");
										});
									}}>
									Submit
								</Button>
							);
						  }}
						</FirestoreMutation>
					}
				</div>
			</div>
		);
	}
}