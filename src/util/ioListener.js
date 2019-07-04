import socket from './../objects/socketIo';
let eventTypes = require('../../config/eventTypes');

//define socket listeners

export default {
    listenForChat: function () {
        socket.on('connect', function (socket) {
            console.log('You are connected');
        });
    },

    listenForNewMessage: function(store) {
        socket.on('message', (response) => {
            console.log('wait for get messages ',response);
            store.dispatch({
                type:eventTypes.newMessage,
                payload:response,
            });
        });
    },


    messageConfirmed() {
        socket.on("message_status_change", (response) => {
            console.log("message status ", response);
            //store.conversations[chatId][response.messageId][seen] =true
        });
    },

    listenForError() {
        socket.on("error", (response) => {
            console.log("error from socket ", response);
            //store.conversations[chatId][response.messageId][seen] =true
        });
    },

    listenForMessageConfirmation() {
        socket.on("ack", (response) => {
            console.log("ack ", response);
            //store.conversations[chatId][response.messageId][seen] =true
        });
    }
};