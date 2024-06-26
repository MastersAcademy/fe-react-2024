import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '@/store-toolkit/users/slice';



const reducer = {
    users: usersReducer
}

export const store = configureStore({
    reducer
});
