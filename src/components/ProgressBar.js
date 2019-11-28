import React, { Component } from 'react';
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory'

class ProgressBar extends Component {
    constructor() {
      super();
      this.state = {
        percent: 0, data: this.getData(0)
      };
    }
  

    componentDidMount() {
      let percent = 70;
      this.setStateInterval = window.setTimeout(() => {
        this.setState({
          percent, data: this.getData(percent)
        })
      })
    }
  
    getData(percent) {
      return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
    }
  
    render() {
      return (
        <div>
          <svg viewBox="0 0 300 300" width="100%" height="100%">
            <VictoryPie
              standalone={false}
              animate={{ duration: 1000 }}
              width={300} height={300}
              data={this.state.data}
              innerRadius={90}
              cornerRadius={25*3/4}
              labels={() => null}
              style={{
                data: { fill: ({ datum }) => {
                  const color = datum.y > 30 ? "green" : "red";
                  return datum.x === 1 ? color : "transparent";
                }
                }
              }}
            />
            <VictoryAnimation duration={1000} data={this.state}>
              {(newProps) => {
                return (
                  <VictoryLabel
                    textAnchor="middle" verticalAnchor="middle"
                    x={150} y={150}
                    text={`analysis\n ${Math.round(newProps.percent)}% complete`}
                    style={{ fontSize: 20, fontWeight: 400 }}
                  />
                );
              }}
            </VictoryAnimation>
          </svg>
        </div>
      );
    }
  }
  
 export default ProgressBar;