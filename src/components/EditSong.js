import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export class EditSong extends Component {

    state = { rank: null }

    render() {
        console.log(this.state, this.props.song)
        return (
            <tr>
                <td>
                    <ArrowUpwardIcon />
                    <ArrowDownwardIcon />
                </td>
                <td>{this.props.song.title}</td>
                <td>{this.props.song.album}</td>
                <td>{this.props.song.artist}</td>
                <td><DeleteIcon /></td>
            </tr>
        )
    }
}

export default EditSong
