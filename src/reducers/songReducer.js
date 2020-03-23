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
        default:
            return state
    }
}

