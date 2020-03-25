import { GET_SONGS, ADD_SONG, EDIT_SONG, DELETE_SONG } from '../actions/types'

const initialState = {
    songs: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SONGS:
            return {
                ...state,
                songs: action.payload
            }
        case DELETE_SONG:
            return {
                ...state,
                songs: state.songs.filter(song => song._id !== action.payload)
            }
        case ADD_SONG:
            return {
                ...state,
                songs: [...state.songs, action.payload.song]
            }
        default:
            return state
    }
}

