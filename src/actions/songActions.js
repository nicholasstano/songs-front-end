import { GET_SONGS, ADD_SONG, EDIT_SONG, DELETE_SONG } from './types'

export const getSongs = () => dispatch => {
    fetch(`http://localhost:4000/songs`)
        .then(res => res.json())
        .then(songs => dispatch({
            type: GET_SONGS,
            payload: songs
        })
        )
}

export const deleteSong = (id) => dispatch => {
    fetch(`http://localhost:4000/songs/${id}`, {
        method: "Delete"
    })
        .then(res => res.json())
        .then(songs => dispatch({
            type: DELETE_SONG,
            payload: id
        }))
}

export const addSong = (newSong) => dispatch => {
    console.log(newSong)
    fetch(`http://localhost:4000/songs`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newSong)
    })
        .then(res => res.json())
        .then(song => dispatch({
            type: ADD_SONG,
            payload: song
        }))
}