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
        fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${this.state.title}+${this.state.album}+${this.state.artist}`, {
            headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "7d26b11e9fmsh70206a9d62dc8f9p15e225jsn5334110e63bb"
            },
        })
            .then(res => res.json())
            .then(songInfo => {
                let theSong = songInfo.data.find(song => song.title.toLowerCase().includes(this.state.title.toLowerCase())
                    &&
                    song.artist.name.toLowerCase().includes(this.state.artist.toLowerCase())
                    &&
                    song.album.title.toLowerCase().includes(this.state.album.toLowerCase()))
                if (typeof theSong === "object") {
                    fetch(`http://localhost:4000/songs`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            rank: 1,
                            title: theSong.title_short,
                            artist: theSong.artist.name,
                            album: theSong.album.title,
                            sample: theSong.link
                        })
                    })
                        .then(res => res.json())
                        .then(addedSong => {
                            this.props.renderAddedSong(addedSong)
                        })
                }
                else {
                    alert("Song Not Found! Please make sure all fields are typed correctly!")
                }
            })
            .catch(err => {
                console.log(err)
            })
        this.setState({
            rank: null,
            title: "",
            artist: "",
            album: "",
            sample: ""
        })
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
