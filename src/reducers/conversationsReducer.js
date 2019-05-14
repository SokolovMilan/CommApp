let eventTypes = require('../../config/eventTypes');

export default function reducer(state = {
    allConversations: null,
}, action) {
    switch (action.type) {
        case eventTypes.getConversations: {
            return {...state, allConversations: action.payload}
        }
        default: {
            return state
        }
    }
};