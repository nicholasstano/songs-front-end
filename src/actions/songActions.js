import { GET_SONGS, ADD_SONG, EDIT_SONG, DELETE_SONG } from './types'

export const getSongs = () => dispatch => {
    fetch(`http://localhost:4000/songs`)
        .then(res => res.json())
        .then(songs => dispatch({
            type: GET_SONGS,
            payload: songs.sort((a, b) => { return a.rank - b.rank })
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

export const editSong = (editedSong) => dispatch => {
    console.log(editedSong._id)
    fetch(`http://localhost:4000/songs/${editedSong._id}`, {
        method: "Put",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedSong)
    })
        .then(res => res.json())
        .then(song => dispatch({
            type: EDIT_SONG,
            payload: song
        }))
}