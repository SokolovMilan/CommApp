let eventTypes = require('../../config/eventTypes');

export default function reducer(state = {
    choosedChat: null,
    chatText: []
}, action) {
    switch (action.type) {
        case eventTypes.chooseChat: {
            return {...state, choosedChat: action.payload}
        }
        case eventTypes.chatText: {
            let chatText = JSON.parse(JSON.stringify(state.chatText));

            chatText.push(action.payload);

            return {...state, chatText: chatText}
        }
        default: {
            return state
        }
    }
};