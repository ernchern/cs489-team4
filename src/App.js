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
import { Button, Image } from 'react-bootstrap';
import firebase from 'firebase';
import { FirestoreProvider } from "@react-firebase/firestore";
import firebaseConfig from './firebaseConfig';
import logo from './components/moral-survey.png';

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
}

class App extends Component {
  constructor(props) {
    super(props);
    if(!localStorage.getItem('version')) {
      console.log("local storage saved", 'version');
      var version = Math.floor(Math.random() * 2) ? "AI" : "human";
      localStorage.setItem('version', version);
    }
    if(!localStorage.getItem('questions')) {
      // WE HARDCODE THE NUMBER OF QUESTIONS HERE. MODIFY THIS IF WE HAVE MORE
      // QUESTIONS.
      var fullList = [];
      for(var i=0; i<20; i++) fullList.push(i+1);
      shuffle(fullList);
      while(fullList.length > 10) fullList.pop();
      localStorage.setItem('questions', fullList.toString());
    }
    if(!localStorage.getItem('options')) {
      var options = '';
      for(i=0; i<10; i++) options += (Math.floor(Math.random() * 2) ? "A" : "B");
        localStorage.setItem('options', options);
    }
  }
  
  render() {
    return(
      <FirestoreProvider {...firebaseConfig} firebase={firebase}>
        <div className="screenPadding">
          <div style={{textAlign: "center", flex: 1}}>
            <Button href="/" variant="link" size="sm"><Image src={logo} fluid /></Button>
          </div>
          <br/>
          <div className="divPadding">
            <BrowserRouter>
              <Route exact
                path="/"
                render={(props) => <IntroPage {...props} />} />
              <Route exact path="/intro" component={IntroPage} />
              <Route exact path="/basicinfo" component={BasicInfoPage} />
              <Route exact path="/questions" component={QuestionPage} />
              <Route exact path="/outro" component={OutroPage} />
              <Route exact path="/analytics" component={Analytics} />
            </BrowserRouter>
          </div>
        </div>
      </FirestoreProvider>
    );
  }
}

export default App;
