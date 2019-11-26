import React, { Component } from 'react';
import { Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import './BasicInfoPage.css';
import Form from 'react-bootstrap/Form';
import { CountryDropdown } from 'react-country-region-selector';

//<Form.Group controlId="formBasicCheckbox">
	//<Form.Check type="checkbox" label="I consent to blah blah" />
//</Form.Group>

export class BasicInfoPage extends Component {
	constructor (props) {
		super(props);
		this.state = { 
		gender: '', 
		age: '',
		cs: '',
		nationality: ''
		};
   }

    render() {
        return (
            <div className="overallLayout">
                <div className="headerStyle">
                    This is the Information Collecting Page
                </div>
                <br/>
                <div className="formCenter">
                    <Form>
                        <Form.Group controlId="formGender">
                            <Form.Label style={{marginRight: "15px"}}>Gender</Form.Label>
                            <ToggleButtonGroup type="radio" name="options" onChange={(val) => this.setState({gender:val})}>
                                <ToggleButton variant="outline-primary" value={'male'}>Male</ToggleButton>
                                <ToggleButton variant="outline-primary" value={'female'}>Female</ToggleButton>
                                <ToggleButton variant="outline-primary" value={'none'}>Rather not to say</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Form.Group controlId="formAge">
                            <Form.Label style={{marginRight: "15px"}}>Age</Form.Label>
                            <ToggleButtonGroup type="radio" name="options" onChange={(val) => this.setState({age:val})} >
                                <ToggleButton variant="outline-primary" value={"<19"}>19 and below</ToggleButton>
                                <ToggleButton variant="outline-primary" value={"20-29"}>20-29</ToggleButton>
                                <ToggleButton variant="outline-primary" value={"30-39"}>30-39</ToggleButton>
                                <ToggleButton variant="outline-primary" value={">40"}>40 and above</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Form.Group controlId="formCSBackground">
                            <Form.Label style={{marginRight: "15px"}}>CS Background</Form.Label>
                            <ToggleButtonGroup type="radio" name="options" onChange={(val) => this.setState({cs:val})}>
                                <ToggleButton variant="outline-primary" value={"yes"}>Yes</ToggleButton>
                                <ToggleButton variant="outline-primary" value={"no"}>No</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Form.Group controlId="formNationality">
                            <Form.Label style={{marginRight: "15px"}}>Nationality</Form.Label>
							<CountryDropdown value={this.state.nationality} onChange={(val) => this.setState({nationality:val})}/>
                        </Form.Group>
                        
                    </Form>
                    <div className="buttonPadding">
                    <Button href="questions" variant="primary" onClick={()=>this.props.callbackFromParent(this.state.age)} type="submit">
                        Click to Proceed
                    </Button>
                    </div>
                </div>
            </div>
        );
    }
}
