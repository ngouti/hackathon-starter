import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

let time = 5
const Chart = (props) => {

    const current_temp_data = props.data.map((d)=> {
        return {x: d.time.split(' ')[1], 
        y: d.current_temp}
    });

    const outside_temp_data = props.data.map((d)=> {
        return {x: d.time.split(' ')[1], 
        y: d.outside_temp}
    });

    const target_temp_data = props.data.map((d)=> {
        return {x: d.time.split(' ')[1], 
        y: d.target_temp}
    });

    return (
        <XYPlot
            xType="ordinal"
            width={1000}
            height={500}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Period of time" />
            <YAxis title="Temp" />
                <LineSeries
                    data={current_temp_data}
                    style={{stroke: 'blue', strokeWidth: 3}}/>
                <LineSeries
                    data={outside_temp_data}
                    style={{stroke: 'red', strokeWidth: 3}}/>
                <LineSeries
                    data={target_temp_data}
                    style={{stroke: 'yellow', strokeWidth: 3}}/>
        </XYPlot>
    );
}

export default Chart;