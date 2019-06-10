let eventTypes = require('../../config/eventTypes');
import axios from 'axios';

export function getContacts() {
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                dispatch({
                    type:eventTypes.getContacts,
                    payload:response.data,
                });
            }).catch((error) => {
            console.log(error)
        });

    }
}