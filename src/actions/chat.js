let eventTypes = require('../../config/eventTypes');
import client from '../util/rest-module';
import {API_ROOT} from "../../config/config";
import socketEmitFunctions from '../util/socketEmitFunctions';

export function makeChat(data) {
    return dispatch => {
        let id = data;
        let myId = localStorage.getItem('myId');
        const params = {
            "user_ids": [myId, id],
            "private": true,
            "title": "Test",
            "image": "https://tineye.com/images/widgets/mona.jpg"
        }
        client().post(`${API_ROOT}/chat/`, params)
            .then((response) => {
                dispatch({
                    type:eventTypes.getChatId,
                    payload:response.data.chat_id,
                });
            }).catch((error) => {
            console.log(error)
        });

    }
}

export function saveChat(data) {
    return dispatch => {
        dispatch({
            type:eventTypes.newMessage,
            payload:data,
        });
        //socketEmitFunctions.sendNewMessage(data);

    }
}

export function clearChat() {
    return dispatch => {
        dispatch({
            type:eventTypes.clearMessages,
            payload:'none',
        });
    }
}

export function getChatDetails(data) {
    return dispatch => {
        let chat_id = data;
        client().get(`${API_ROOT}/chat/${chat_id}/`)
            .then(response => {
                dispatch({
                    type:eventTypes.chatDetails,
                    payload:response,
                });
            }).catch((error) => {
            console.log(error)
        });

    }
}

export function selectedConversation(item) {
    return dispatch => {
        dispatch({
            type:eventTypes.selectedChat,
            payload:item,
        });
    }
}




