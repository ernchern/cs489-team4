import  React, { Component } from 'react';
import { VictoryStack, VictoryBar, VictoryAxis, VictoryLabel } from "victory";

class HorizontalBar extends Component {
   
    render() {
        const { width, height, padding, machine, human } = this.props;
        console.log(height*machine.length)
        return (
            <div>
            <svg viewBox={`0 0 ${width} ${height*machine.length}`}
                style={{ width: "100%", height: "auto" }}
            >
                <VictoryStack horizontal
                    standalone={false}
                    /* setting a symmetric domain makes it much easier to center the axis  */
                    domain={{ y: [-100, 100] }}
                    padding={padding}
                    height={height*machine.length}
                    width={width}
                    style={{ data: { width: 20 }, labels: { fontSize: 18 } }}
                >
                    <VictoryBar
                        style={{ data: { fill: "tomato" } }}
                        data={machine}
                        y={(data) => (-Math.abs(data.y))}
                        labels={({ datum }) => (`${Math.abs(datum.y)}%`)}
                    />
                    <VictoryBar
                        style={{ data: { fill: "orange" } }}
                        data={human}
                        labels={({ datum }) => (`${Math.abs(datum.y)}%`)}
                    />
                </VictoryStack>
                <VictoryAxis dependentAxis
                height={height*machine.length}
                width={width}
                padding={padding}
                style={{
                    axis: { stroke: "transparent" },
                    ticks: { stroke: "transparent" },
                    tickLabels: { fontSize: 11, fill: "black" }
                }}
                tickLabelComponent={<VictoryLabel x={250} textAnchor="middle"/>}
                tickValues={machine.map((point) => point.x).reverse()}
                />
            </svg>
            <br/>
            </div>
        );
    };
}

export default HorizontalBar;