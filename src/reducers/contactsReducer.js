let eventTypes = require('../../config/eventTypes');

export default function reducer(state = {
    listUsers: null,
}, action) {
    switch (action.type) {
        case eventTypes.userList: {
            return {...state, listUsers: action.payload}
        }
        default: {
            return state
        }
    }
};