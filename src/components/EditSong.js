import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteSong } from '../actions/songActions'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

export class EditSong extends Component {

    state = { rank: this.props.song.rank }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    deleteSongClick = (id) => {
        this.props.deleteSong(id)
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
                <td><DeleteIcon onClick={() => this.deleteSongClick(this.props.song._id)} /></td>
            </tr>
        )
    }
}

EditSong.propTypes = {
    deleteSong: PropTypes.func.isRequired,
    song: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    id: state._id
})

export default connect(mapStateToProps, { deleteSong })(EditSong)