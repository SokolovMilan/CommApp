import socket from './../objects/socketIo';
let eventTypes = require('../../config/eventTypes');

//define socket listeners

export default {
    notifyUserConnectedToChat: function (chatId) {
        socket.emit("enter_chat", chatId, () => {
            console.log('you have enter chat!');
        });

    },

    notifyUserLeaveToChat: function(chatId) {
        socket.emit('leave_chat', chatId);
    },

    sendNewMessage:function(data) {
        console.log('send new message '+data.body);
        let message = {
            "chat_id": data.chat_id,
            "body": data.body
        }
        socket.emit("message", message);
    }
};