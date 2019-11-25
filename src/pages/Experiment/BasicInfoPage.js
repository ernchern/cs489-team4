import React, { Component } from 'react';
import { Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import './BasicInfoPage.css';
import Form from 'react-bootstrap/Form';

export class BasicInfoPage extends Component {

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
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton variant="outline-primary" value={1}>Male</ToggleButton>
                                <ToggleButton variant="outline-primary" value={2}>Female</ToggleButton>
                                <ToggleButton variant="outline-primary" value={3}>Rather not to say</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>

                        <Form.Group controlId="formAge">
                            <Form.Label style={{marginRight: "15px"}}>Age</Form.Label>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton variant="outline-primary" value={1}>14 and below</ToggleButton>
                                <ToggleButton variant="outline-primary" value={2}>15-19</ToggleButton>
                                <ToggleButton variant="outline-primary" value={3}>20-24</ToggleButton>
                                <ToggleButton variant="outline-primary" value={4}>25-29</ToggleButton>
                                <ToggleButton variant="outline-primary" value={5}>30-34</ToggleButton>
                                <ToggleButton variant="outline-primary" value={6}>35-39</ToggleButton>
                                <ToggleButton variant="outline-primary" value={7}>40-44</ToggleButton>
                                <ToggleButton variant="outline-primary" value={8}>45-49</ToggleButton>
                                <ToggleButton variant="outline-primary" value={9}>50 and above</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>

                        <Form.Group controlId="formCSBackground">
                            <Form.Label style={{marginRight: "15px"}}>CS Background</Form.Label>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton variant="outline-primary" value={1}>Yes</ToggleButton>
                                <ToggleButton variant="outline-primary" value={2}>No</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>

                        <Form.Group controlId="formNationality">
                            <Form.Label style={{marginRight: "15px"}}>Nationality</Form.Label>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton variant="outline-primary" value={1}>Asia</ToggleButton>
                                <ToggleButton variant="outline-primary" value={2}>America</ToggleButton>
                                <ToggleButton variant="outline-primary" value={3}>Europe</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I consent to blah blah" />
                        </Form.Group>
                        
                    </Form>
                    <div className="buttonPadding">
                    <Button href="questions" variant="primary" onClick={()=>this.props.callbackFromParent("18")} type="submit">
                        Click to Proceed
                    </Button>
                    </div>
                </div>
            </div>
        );
    }
}
