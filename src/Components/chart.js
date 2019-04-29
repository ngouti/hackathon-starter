import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

const Chart = (props) => {

    
    function date() {
        props.data.map((d) => {
            var full_date = d.time.split(' ');
            // if(full_date[0] === )
            console.log(d.time.split(' '))
        })
    }
date()
    const dataArr = props.data.map((d)=> {
        return {x: d.time.split(' ')[1], 
        y: d.current_temp}
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
                    data={dataArr}
                    style={{stroke: 'blue', strokeWidth: 3}}/>
        </XYPlot>
    );
}

export default Chart;