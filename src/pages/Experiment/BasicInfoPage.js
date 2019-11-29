import React, { Component } from 'react';
import { Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import './BasicInfoPage.css';
import Form from 'react-bootstrap/Form';
import { CountryDropdown } from 'react-country-region-selector';
import { Link } from 'react-router-dom';

var fields = ['gender', 'age', 'cs_background', 'nationality'];
export class BasicInfoPage extends Component {
	constructor (props) {
		super(props);
		// Initialize the value if not found.
		for(var i=0; i<fields.length; i++)
			if(!localStorage.getItem(fields[i]))
				localStorage.setItem(fields[i], '');

		this.state = { 
			gender: localStorage.getItem('gender'),
			age: localStorage.getItem('age'),
			cs_background: localStorage.getItem('cs_background'),
			nationality: localStorage.getItem('nationality'),
		};
	}
   
	updateVal = (event) => {
		if (this.state.gender==='' || this.state.age==='' || this.state.cs==='' || this.state.nationality==='') {
			event.preventDefault();
			alert("Please fill all information field.");
		}
		else {
			for(var i=0; i<fields.length; i++)
				localStorage.setItem(fields[i], this.state[fields[i]]);
		}
	}

	render() {
		return (
			<div className="overallLayout">
				<div className="headerStyle">
					General Information
				</div>
				<br/>
				<div style={{textAlign: "center", width: "90%"}}>
					<p>To start off, we need some of your basic information for later analysis.</p>
					<p>Please fill out the below information and click <em>Proceed</em> to begin answering the questions.</p>
					<hr/>
				</div>
				<div className="formCenter">
					<Form>
						<Form.Group controlId="formGender">
							<Form.Label style={{marginRight: "15px"}}>Gender</Form.Label>
							<ToggleButtonGroup type="radio" name="options" value={this.state.gender} onChange={(val) => this.setState({gender: val})} style={{width: "90%"}} >
								<ToggleButton variant="outline-primary" value={'male'}>Male</ToggleButton>
								<ToggleButton variant="outline-primary" value={'female'}>Female</ToggleButton>
								<ToggleButton variant="outline-primary" value={'none'}>Rather not to say</ToggleButton>
							</ToggleButtonGroup>
						</Form.Group>
						<Form.Group controlId="formAge">
							<Form.Label style={{marginRight: "15px"}}>Age</Form.Label>
							<ToggleButtonGroup type="radio" name="options" value={this.state.age} onChange={(val) => this.setState({age: val})} style={{width: "90%"}}>
								<ToggleButton variant="outline-primary" value={"<19"}>19 and below</ToggleButton>
								<ToggleButton variant="outline-primary" value={"20-29"}>20-29</ToggleButton>
								<ToggleButton variant="outline-primary" value={"30-39"}>30-39</ToggleButton>
								<ToggleButton variant="outline-primary" value={">40"}>40 and above</ToggleButton>
							</ToggleButtonGroup>
						</Form.Group>
						<Form.Group controlId="formCSBackground">
							<Form.Label style={{marginRight: "15px"}}>Do you have computing related background?</Form.Label>
							<ToggleButtonGroup type="radio" name="options" value={this.state.cs_background} onChange={(val) => this.setState({cs_background: val})}>
								<ToggleButton variant="outline-primary" value={"yes"}>Yes</ToggleButton>
								<ToggleButton variant="outline-primary" value={"no"}>No</ToggleButton>
							</ToggleButtonGroup>
						</Form.Group>
						<Form.Group controlId="formNationality">
							<Form.Label style={{marginRight: "15px"}}>Nationality</Form.Label>
							<CountryDropdown value={this.state.nationality} onChange={(val) => this.setState({nationality:val})} style={{width: "90%"}}/>
						</Form.Group>
						
					</Form>
					<div className="buttonPadding">

          <Link to="/questions">
						<Button variant="primary" onClick={this.updateVal} type="submit">
							Proceed
						</Button>
					</Link>
					</div>
				</div>
			</div>
		);
	}
}
