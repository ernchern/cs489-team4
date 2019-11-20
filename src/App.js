/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IntroPage } from './pages/IntroPage';
import { BasicInfoPage } from './pages/BasicInfoPage';
import { QuestionPage } from './pages/QuestionPage';
import { OutroPage } from './pages/OutroPage';
import { Analytics } from './pages/Analytics';

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
        
        <IntroPage></IntroPage>
        <BasicInfoPage></BasicInfoPage>
        <QuestionPage></QuestionPage>
        <OutroPage></OutroPage>
        <Analytics></Analytics>
      </div>
    );
 
  }
}

export default App;
