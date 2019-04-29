import React from 'react';

import NavigationBar from './Components/NavigationBar.js'
import {data} from './datasample.js'
import Chart from './Components/chart'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
        };
    }

    componentDidMount() {
      this.setState({
          results: data
                    })}

    render() {
        const {results} = this.state;

        return (
            <div>
              <NavigationBar/>
              <Chart data={results}/>
            </div>
        );
    }
}

export default App;
