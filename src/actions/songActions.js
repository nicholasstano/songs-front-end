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