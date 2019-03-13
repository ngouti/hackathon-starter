import React, { h } from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

// styles
import './styles/app.scss'

import axios from './utils/axios'

axios
  .get('/api/foo')
  .then(({ data }) => console.log(data))

ReactDom.render(<App />, document.getElementById('app'))
