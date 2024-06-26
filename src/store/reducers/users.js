import { GET_USER_DETAILS, GET_USERS } from '@/store/actionTypes/users';

const initialState = {
    usersList: [],
    userDetails: null
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                usersList: action.payload
            }
        }
        case GET_USER_DETAILS: {
            return {
                ...state,
                userDetails: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
