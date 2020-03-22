import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import SongsContainer from '../src/containers/SongsContainer'
import { Provider } from 'react-redux'
import store from './store'

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <SongsContainer />
        </div>
      </Provider>
    )
  }
}

export default App
