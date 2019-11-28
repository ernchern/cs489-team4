import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Analytics.css';
import HorizontalBar from '../../components/HorizontalBar';
import ProgressBar from '../../components/ProgressBar';

const machine_data = [
    { x: "Total", y: 86 },
  ];
  
  const human_data = [
    { x: "Total", y: 26 },
  ];

  const machine_data_gender = [
    { x: "Male", y: 86 },
    { x: "Female", y: 59 },
  ];
  
  const human_data_gender = [
    { x: "Male", y: 73 },
    { x: "Female", y: 79 },
  ];

  const machine_data_age = [
    { x: "19 and below", y: 86 },
    { x: "20-29", y: 81 },
    { x: "30-39", y: 73 },
    { x: "40 and above", y: 63 },
  ];
  
  const human_data_age = [
    { x: "19 and below", y: 58 },
    { x: "20-29", y: 63 },
    { x: "30-39", y: 70 },
    { x: "40 and above", y: 83 },
  ];

  
  const width = 500;
  const height = 80;
  const padding = { top: 30, bottom: 50, left: 20, right: 20 };



export class Analytics extends Component {
    render() {
        var version = localStorage.getItem('version');
        var my_average = 50;

        //Hardcoded whether to show analytics or not 
        var show_analytics = false;
        return (
            <div class="overallLayout">
                <div class="centerElements">
                    <div style={{fontWeight: 400}}><br/>Your trust level on <b>{version}</b> is</div>
                    <div class="resultText">{my_average}%</div>
                    <hr/>

                    {!show_analytics && 
                    <div class="explanationText">
                        <br/>
                        We still don't have enough data to show the overall analytics.
                        Please come back later to <a href="localhost:3000/analytics">this link</a>.
                        <ProgressBar></ProgressBar>
                    </div>}
                    {show_analytics && 
                    <div>
                        <p>Below are the overall analytics: </p>
                        <br/>
                        <p>Overall result</p>
                        <HorizontalBar width={width} height={height} padding={padding} machine={machine_data} human={human_data}></HorizontalBar>
                        <br/>

                        <p>Result by gender</p>
                        <HorizontalBar width={width} height={height} padding={padding} machine={machine_data_gender} human={human_data_gender}></HorizontalBar>
                        <br/>

                        <p>Result by age</p>
                        <HorizontalBar width={width} height={height} padding={padding} machine={machine_data_age} human={human_data_age}></HorizontalBar>
                        <br/>
                    </div>}  

                    <Button href="outro" variant="primary" type="submit">Go Back</Button>
                    
                    
                </div>
            </div>
        );
    }
}