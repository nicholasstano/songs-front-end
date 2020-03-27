import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteSong, editSong, getSongs } from '../actions/songActions'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

export class EditSong extends Component {

    state = {
        rank: this.props.song.rank
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    deleteSongClick = (id) => {
        this.props.deleteSong(id)
    }

    updateRank = (event) => {
        event.preventDefault()
        const editedSong = {
            rank: this.state.rank,
            _id: this.props.song._id,
            title: this.props.song.title,
            artist: this.props.song.artist,
            album: this.props.song.album,
            sample: this.props.song.sample
        }
        this.props.editSong(editedSong)
        this.props.getSongs()
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
                <td><DeleteIcon onClick={() => this.deleteSongClick(this.props.song._id)} /></td>
            </tr>
        )
    }
}

export default connect(null, { deleteSong, editSong, getSongs })(EditSong)