let eventTypes = require('../../config/eventTypes');
import axios from 'axios';
import client from '../util/rest-module';
import {API_ROOT} from "../../config/config";


export function getUsers() {
    return dispatch => {
        client().get(`${API_ROOT}/chat/contacts/list/`,)
            .then(response => {
                dispatch({
                    type:eventTypes.userList,
                    payload:response.data.contacts,
                });
            }).catch((error) => {
            console.log(error)
        });

    }
}

export function addUser(id) {
    let params = {
        "contact_id": id
    }
    return dispatch => {
        client().post(`${API_ROOT}/chat/contacts/add/`,params)
            .then(response => {
                dispatch({
                    type:eventTypes.addUser,
                    payload:response,
                });
            }).catch((error) => {
            console.log(error)
        });

    }
}