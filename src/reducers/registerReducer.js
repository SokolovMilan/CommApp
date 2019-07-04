let eventTypes = require('../../config/eventTypes');

export default function reducer(state = {
    data: null,
    myId: null,
    myName: null
}, action) {
    switch (action.type) {
        case eventTypes.register: {
            return {...state, data: action.payload}
        }
        case eventTypes.getRegisterId: {
            return {...state, myName: action.payload.first_name, myId: action.payload.user_id}
        }
        default: {
            return state
        }
    }
};
