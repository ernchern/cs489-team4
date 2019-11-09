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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
        <p>
          Contents
        </p>
        <p>
          We still need to decide between material UI and bootstrap
        </p>
      </header>
    </div>
  );
}

export default App;
