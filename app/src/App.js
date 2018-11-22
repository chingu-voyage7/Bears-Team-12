import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

const testBackend = message => {

    axios.get('/api/test')
}

class App extends Component {

  constructor() {
      super()

      /* test back end*/
      testBackend()
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
            Bears-Team-12
        </header>
      </div>
    );
  }
}

export default App;
