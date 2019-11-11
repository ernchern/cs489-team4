import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class LeftSection extends Component {
    render() {
        return (
            <div>
                
                <Form>
                    <h2>To begin, we need your information!</h2>
                    <Form.Group controlId="formAge">
                        <Form.Label>How old are you?</Form.Label>
                        <Form.Control type="age" placeholder="Your Age" />
                    </Form.Group>
                    <Form.Group controlId="formGender">
                        <Form.Label>What's your gender?</Form.Label>
                        <Form.Control type="gender" placeholder="Your Gender" />
                    </Form.Group>

                    <Form.Group controlId="formFinalCheck">
                        <Form.Check type="checkbox" label="Are you ready?" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}