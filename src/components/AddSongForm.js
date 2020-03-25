import React, { Component } from 'react'
import { addSong } from '../actions/songActions'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

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
        const deezerSearchUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?q="
        fetch(`${deezerSearchUrl}${this.state.title}+${this.state.album}+${this.state.artist}`, {
            headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "7d26b11e9fmsh70206a9d62dc8f9p15e225jsn5334110e63bb"
            },
        })
            .then(res => res.json())
            .then(songInfo => {
                let songTitle = this.state.title.toLowerCase()
                let artistName = this.state.artist.toLowerCase()
                let albumTitle = this.state.album.toLowerCase()
                let newlyAddedRank = this.props.allSongs.length + 1
                let theSong = songInfo.data.find(song => song.title.toLowerCase().includes(songTitle)
                    &&
                    song.artist.name.toLowerCase().includes(artistName)
                    &&
                    song.album.title.toLowerCase().includes(albumTitle))
                if (typeof theSong === "object") {
                    const newSong = {
                        rank: newlyAddedRank,
                        title: theSong.title_short,
                        artist: theSong.artist.name,
                        album: theSong.album.title,
                        sample: theSong.link
                    }
                    this.props.addSong(newSong)
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

const mapStateToProps = state => ({
    songs: state.songs
})

AddSongForm.propTypes = {
    addSong: PropTypes.func.isRequired,
    songs: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { addSong })(AddSongForm)