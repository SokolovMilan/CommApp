let eventTypes = require('../../config/eventTypes');

export default function reducer(state = {
    chatMessages: [],
    chatId: null,
    selectedChat: null,
    chatDetails: null,
}, action) {
    switch (action.type) {
        case eventTypes.getChatId: {
            return {...state, chatId: action.payload}
        }
        case eventTypes.selectedChat: {
            return {...state, selectedChat: action.payload}
        }
        case eventTypes.newMessage: {
            let chatMessages = JSON.parse(JSON.stringify(state.chatMessages));
            chatMessages.push(action.payload);
            return {...state, chatMessages: chatMessages}
        }
        case eventTypes.getMessages: {
            return {...state, chatMessages: action.payload}
        }
        case eventTypes.clearMessages: {
            return {...state, chatMessages: []}
        }
        case eventTypes.chatDetails: {
            return {...state, chatDetails: action.payload}
        }
        default: {
            return state
        }
    }
};