let eventTypes = require('../../config/eventTypes');
import axios from 'axios';

export function getConversations() {
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                dispatch({
                    type:eventTypes.getConversations,
                    payload:response.data,
                });
            }).catch((error) => {
            console.log(error)
        });

    }
}