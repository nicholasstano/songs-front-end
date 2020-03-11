import React from 'react'
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

export default function Song(props) {
    return (
        <tr>
            <td>{props.song.rank}</td>
            <td>{props.song.title}</td>
            <td>{props.song.album}</td>
            <td>{props.song.artist}</td>
            <td><a target="_blank" rel="noopener noreferrer" href={props.song.sample}><AudiotrackIcon /></a></td>
        </tr>
    )
}
