import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './pages/Home'

ReactDOM.render(
   <Router>
      <App>
         <Route key='index' exact path='/' component={HomePage} />
      </App>
   </Router>, // eslint-disable-next-line no-undef
   document.getElementById('root')
)
