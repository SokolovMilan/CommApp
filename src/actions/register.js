let eventTypes = require('../../config/eventTypes');
import client from '../util/rest-module'
import {API_ROOT} from "../../config/config";

export function register() {
    return dispatch => {
        client().get(`${API_ROOT}/auth/register/azure-ad/`)
            .then(response => {
                dispatch({
                    type:eventTypes.register,
                    payload:response,
                });
            }).catch((error) => {
            console.log(error)
        });

    }
}
export function getRegisterId() {
    return dispatch => {
        client().get(`${API_ROOT}/auth/user/self/`)
            .then(response => {
                dispatch({
                    type:eventTypes.getRegisterId,
                    payload:response.data,
                });
            }).catch((error) => {
            console.log(error)
        });

    }
}

