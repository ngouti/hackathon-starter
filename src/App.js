import React from 'react';

import NavigationBar from './Components/NavigationBar.js'
import Navs from './Components/Navs.js'
import {data} from './datasample.js'
import Chart from './Components/chart'

const API_URL = "https://nataliia-radina.github.io/react-vis-example/";

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
            <div className="App">
            <NavigationBar/>
                <Chart data={results}/>
            </div>
        );
    }
}

export default App;
