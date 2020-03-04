import React, { Component } from 'react'

export class AddSongForm extends Component {

    state = {
        rank: null,
        title: "",
        artist: "",
        album: "",
        sample: ""
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.title)
        fetch(`https://deezerdevs-deezer.p.rapidapi.com/${this.state.title}`)
            .then(res => res.json())
            .then(data => console.log(data.message))
    }

    render() {
        return (
            <div>
                <h1>Add Song Form</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Exact Song Title" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="artist" value={this.state.artist} onChange={this.handleChange} placeholder="Exact Artist Name" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="album" value={this.state.album} onChange={this.handleChange} placeholder="Exact Album Name" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddSongForm
