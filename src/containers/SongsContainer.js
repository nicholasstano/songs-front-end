import React, { Component } from 'react'
import AddSongForm from '../components/AddSongForm.js'
import Song from '../components/Song.js'

export class songsContainer extends Component {

    state = { songs: [] }

    componentDidMount() {
        fetch(`http://localhost:4000/songs`)
            .then(res => res.json())
            .then(songs => this.setState({ songs: songs }))
    }

    renderAddedSong = (song) => {
        console.log(song)
        this.setState({ songs: [...this.state.songs, song.song] })
    }

    render() {
        let songComponents = this.state.songs.map(song => <Song song={song} key={song._id} />)
        return (
            <div className="container">
                <AddSongForm renderAddedSong={this.renderAddedSong} />
                <h1>Song Container</h1>
                {this.state.songs.length > 0 ?
                    (<table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">rank</th>
                                <th scope="col">Title</th>
                                <th scope="col">Artist</th>
                                <th scope="col">Album</th>
                                <th scope="col">Sample</th>
                            </tr>
                        </thead>
                        <tbody>
                            {songComponents}
                        </tbody>
                    </table>) : null}
            </div>
        )
    }
}

export default songsContainer
