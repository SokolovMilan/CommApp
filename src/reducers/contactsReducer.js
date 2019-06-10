let eventTypes = require('../../config/eventTypes');

export default function reducer(state = {
    allContacts: null,
}, action) {
    switch (action.type) {
        case eventTypes.getContacts: {
            return {...state, allContacts: action.payload}
        }
        default: {
            return state
        }
    }
};