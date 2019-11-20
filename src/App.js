/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IntroPage } from './pages/Introduction/IntroPage';
import { BasicInfoPage } from './pages/Experiment/BasicInfoPage';
import { QuestionPage } from './pages/Experiment/QuestionPage';
import { OutroPage } from './pages/Outro-Analytics/OutroPage';
import { Analytics } from './pages/Outro-Analytics/Analytics';
import {BrowserRouter, Route} from 'react-router-dom';
import { Button } from 'react-bootstrap';

// require firebase
const firebase = require('firebase');
// reuire uuid
const uuid = require('uuid');

const config = {
apiKey: "AIzaSyDX2D4nRHz6jFAfQRCRBawGcWdqOxMEFNk",
    authDomain: "cs489-team-4.firebaseapp.com",
    databaseURL: "https://cs489-team-4.firebaseio.com",
    projectId: "cs489-team-4",
    storageBucket: "cs489-team-4.appspot.com",
    messagingSenderId: "72131328035",
    appId: "1:72131328035:web:b0ec224f6212453c1d9996",
    measurementId: "G-P84YC6N7BK"
  };
firebase.initializeApp(config);

class App extends Component { 
  
  //set the age of the user
  ageChange(event) {
	  this.setState({age: event.target.value});
  }
  
  //update firebase
  ageSubmit(event){
	alert('Age was submitted: ' + this.state.age);
	// prevents event default of submit
    event.preventDefault();
	firebase.database().ref(this.state.uid).set({
      age: this.state.age,
    });
  }
  
  constructor(props){
    super(props);
    this.state = {
	  // this gives a unique id, using uuid package
      uid: uuid.v1(),
      age: "",
    };
    // binding the userSubmit method
	this.ageChange = this.ageChange.bind(this);
    this.ageSubmit = this.ageSubmit.bind(this);
  }

  render(){

    // what our app will show
    return(
      <div class="screenPadding">
        <div style={{textAlign: "center"}}>
          <Button href="/" variant="link" size="sm">NAME OF THE PROJECT - as an header (try clicking)</Button>
        </div>
        <BrowserRouter>
          <Route exact path="/" component={IntroPage} />
          <Route exact path="/intro" component={IntroPage} />
          <Route exact path="/basicinfo" component={BasicInfoPage} />
          <Route exact path="/questions" component={QuestionPage} />
          <Route exact path="/outro" component={OutroPage} />
          <Route exact path="/analytics" component={Analytics} />
        </BrowserRouter>
      </div>
    );
 
  }
}

export default App;
