import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUserDetails, setUsers } from '@/store-toolkit/users/slice';

export const getUsersThunk = createAsyncThunk(
    'users/getUsers',
    async (_, {dispatch}) => {
        const users = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => users)
        dispatch(setUsers(users))
    }
)

export const getUserDetailsThunk = createAsyncThunk(
    'users/getUserDetails',
    async (id, {dispatch}) => {
        const user = await fetch(`https://jsonplaceholder.typicode.com/users${id}`)
            .then(response => response.json())
            .then(user => user)
        dispatch(setUserDetails(user))
    }
)
