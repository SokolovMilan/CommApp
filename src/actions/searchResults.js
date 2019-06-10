let eventTypes = require('../../config/eventTypes');
import axios from 'axios';

export function getSearchResults() {
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                dispatch({
                    type:eventTypes.getSearchResults,
                    payload:response.data,
                });
            }).catch((error) => {
            console.log(error)
        });

    }
}