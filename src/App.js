import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import SongsContainer from '../src/containers/SongsContainer'

export class App extends Component {
  render() {
    return (
      <div>
        <SongsContainer />
      </div>
    )
  }
}

export default App
