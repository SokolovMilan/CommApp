let eventTypes = require('../../config/eventTypes');

export default function reducer(state = {
    searchResults: null,
}, action) {
    switch (action.type) {
        case eventTypes.getContacts: {
            return {...state, searchResults: action.payload}
        }
        default: {
            return state
        }
    }
};