let eventTypes = require('../../config/eventTypes');
import axios from 'axios';

export function sendChat(data) {
    return dispatch => {
                dispatch({
                    type:eventTypes.chatText,
                    payload:data,
                });
    }
}