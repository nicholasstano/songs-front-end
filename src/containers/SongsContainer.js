import React, { Component } from 'react'
import AddSongForm from '../components/AddSongForm.js'
import Song from '../components/Song.js'
import EditSong from '../components/EditSong.js'

export class songsContainer extends Component {

    state = { songs: [], editor: true, sampDel: "sample" }

    componentDidMount() {
        fetch(`http://localhost:4000/songs`)
            .then(res => res.json())
            .then(songs => {
                let sortedSongs = songs.sort(function (a, b) {
                    return a.rank - b.rank
                })
                this.setState({ songs: sortedSongs })
            })
    }

    updateRank = () => {
        fetch(`http://localhost:4000/songs`)
            .then(res => res.json())
            .then(songs => {
                let sortedSongs = songs.sort(function (a, b) {
                    return a.rank - b.rank
                })
                this.setState({ songs: sortedSongs })
            })
    }

    renderAddedSong = (song) => {
        this.setState({ songs: [...this.state.songs, song.song] })
    }

    removeSong = (songId) => {
        let newAllSongs = this.state.songs.filter(s => s._id !== songId)
        this.setState({ songs: newAllSongs })
    }

    updateSongs = (song) => {
        let updatedSongs = this.state.songs.map(s => s._id === song._id ? song : s)
        this.setState({ songs: updatedSongs })
    }

    toggleEditView = () => {
        if (this.state.editor) {
            this.setState({ editor: false, sampDel: "delete" })
        }
        else {
            this.setState({ editor: true, sampDel: "sample" })
        }
    }

    render() {
        let songComponents = this.state.songs.map(song => <Song song={song} key={song._id} />)
        let editSongComponents = this.state.songs.map(song => <EditSong song={song} key={song._id} removeSong={this.removeSong} updateSongs={this.updateSongs} updateRank={this.updateRank} />)

        return (
            <div className="container">
                <AddSongForm allSongs={this.state.songs} renderAddedSong={this.renderAddedSong} />
                <br />
                {this.state.editor ?
                    <button onClick={this.toggleEditView}>Click To Edit</button> :
                    <button onClick={this.toggleEditView}>Click to View</button>}
                <br />
                <br />

                {this.state.songs.length > 0 ?
                    (<table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">rank</th>
                                <th scope="col">Title</th>
                                <th scope="col">Artist</th>
                                <th scope="col">Album</th>
                                <th scope="col">{this.state.sampDel}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.editor ? songComponents : editSongComponents}
                        </tbody>
                    </table>) : null}
            </div>
        )
    }
}

export default songsContainer
