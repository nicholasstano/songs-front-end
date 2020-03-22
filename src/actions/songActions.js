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

        // {
        //         let sortedSongs = songs.sort(function (a, b) {
        //             return a.rank - b.rank
        //         })
        // this.setState({ songs: sortedSongs })
        //     })
