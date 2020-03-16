import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

export class EditSong extends Component {

    state = { rank: this.props.song.rank }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    deleteSong = () => {
        fetch(`http://localhost:4000/songs/${this.props.song._id}`, {
            method: "Delete"
        })
            .then(res => res.json())
            .then(data => this.props.removeSong(data.id))
    }

    updateRank = (event) => {
        event.preventDefault()
        fetch(`http://localhost:4000/songs/${this.props.song._id}`, {
            method: "Put",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    rank: this.state.rank,
                    title: this.props.title,
                    artist: this.props.name,
                    album: this.props.title,
                    sample: this.props.sample
                })
        })
            .then(res => res.json())
            .then(data => {
                fetch(`http://localhost:4000/songs/${data._id}`)
                    .then(res => res.json())
                    .then(data => {
                        this.props.updateSongs(data)
                        this.props.updateRank()
                    })
            })
    }

    render() {
        return (
            <tr>
                <td>
                    <form onSubmit={this.updateRank}>
                        <div className="form-group">
                            <input className="form-control" type="text" name="rank" value={this.state.rank} onChange={this.handleChange} placeholder={this.props.rank} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </td>
                <td>{this.props.song.title}</td>
                <td>{this.props.song.album}</td>
                <td>{this.props.song.artist}</td>
                <td><DeleteIcon onClick={this.deleteSong} /></td>
            </tr>
        )
    }
}

export default EditSong
