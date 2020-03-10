import React from 'react'

export default function Song(props) {
    return (
        <tr>
            <th scope="row">{props.song.rank}</th>
            <td>{props.song.title}</td>
            <td>{props.song.album}</td>
            <td>{props.song.artist}</td>
            <td><a target="_blank" href={props.song.sample}>Audio Sample</a></td>
        </tr>
    )
}
