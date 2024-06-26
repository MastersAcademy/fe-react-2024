import {
    GET_USER_DETAILS,
    GET_USERS,
} from '../actionTypes/users';

//async actions
export const getAllUsers = () => {
    return async (dispatch) => {
        const users = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => users)

        dispatch(setUsers(users))
    }
}

export const getUserDetails = (id) => {
    return async (dispatch) => {
        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(user => user)

        dispatch(setUserDetails(user))
    }
}

// actions for changing state
const setUsers = (userDetails) => ({
    type: GET_USERS,
    payload: userDetails,
})

const setUserDetails = (userDetails) => ({
    type: GET_USER_DETAILS,
    payload: userDetails,
});
