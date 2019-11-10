import React, { Component } from 'react';
import './App.css';

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

    // declare age within render
    let age;
	 age = 
	  <div>
        <h2>How old are you?</h2>
        {/* here our from has calls a method on submit */}
        <form onSubmit={this.ageSubmit}>
          <input type="text" onChange={this.ageChange} className="ageInput"/>
          <br />
          <br />
          <input type="submit" value="submit" className="submitBtn"/>
        </form>
      </div>;
    // what our app will show
    return(
      <div>
        <br />
        {age}
      </div>
    );
 
  }
}

export default App;
