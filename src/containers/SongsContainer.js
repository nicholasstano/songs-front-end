import React, { Component } from 'react'
import AddSongForm from '../components/AddSongForm.js'

export class songsContainer extends Component {
    render() {
        return (
            <div className="container">
                <h1>Song Container</h1>
                <AddSongForm />
            </div>
        )
    }
}

export default songsContainer
