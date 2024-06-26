import { createSlice } from '@reduxjs/toolkit';


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        userDetails: null
    },
    reducers: {
        setUsers(state, action) {
            state.users = action.payload
        },
        setUserDetails(state, action) {
            state.userDetails = action.payload
        },
    }
});

export const { setUsers, setUserDetails }  = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
