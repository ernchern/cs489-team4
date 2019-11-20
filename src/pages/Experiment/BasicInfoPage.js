import React, { Component } from 'react';
import { Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import './BasicInfoPage.css';
import Form from 'react-bootstrap/Form';

export class BasicInfoPage extends Component {
    render() {
        return (
            <div class="overallLayout">
                <div class="headerStyle">
                    This is the Information Collecting Page
                </div>
                <br/>
                <div class="formCenter">
                    <Form>
                        <Form.Group controlId="formGender">
                            <Form.Label style={{marginRight: "15px"}}>Gender</Form.Label>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton variant="outline-primary" value={1}>Male</ToggleButton>
                                <ToggleButton variant="outline-primary" value={2}>Female</ToggleButton>
                                <ToggleButton variant="outline-primary" value={3}>Unknown</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>

                        <Form.Group controlId="formAge">
                            <Form.Label style={{marginRight: "15px"}}>Age</Form.Label>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton variant="outline-primary" value={1}>Under 18</ToggleButton>
                                <ToggleButton variant="outline-primary" value={2}>18-25</ToggleButton>
                                <ToggleButton variant="outline-primary" value={3}>25-40</ToggleButton>
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
                    <div class="buttonPadding">
                    <Button href="questions" variant="primary" type="submit">
                        Click to Proceed
                    </Button>
                    </div>
                </div>
            </div>
        );
    }
}