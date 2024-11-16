import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userAccessData from '../../db/userAccess.json';

const initialState = {
    accessData: userAccessData,
    currentUserAccess: [],  // Stores access data for the currently logged-in user
};

// Thunk to fetch user access rights based on username
export const fetchUserAccess = createAsyncThunk('users/fetchUserAccess', async (userName) => {
    const userAccess = userAccessData.find(user => user.User === userName);
    return userAccess ? userAccess.Access : [];
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setCurrentUserAccess(state, action) {
            // Directly sets the access for the current user, useful if user switches
            state.currentUserAccess = action.payload;
        },
        clearUserAccess(state) {
            // Clears user access data, e.g., on logout
            state.currentUserAccess = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserAccess.fulfilled, (state, action) => {
                state.currentUserAccess = action.payload;
            })
            .addCase(fetchUserAccess.rejected, (state) => {
                state.currentUserAccess = []; // Fallback if user data fetch fails
            });
    },
});

// Selector to access the current user's access data
export const selectUserAccess = (state) => state.users.currentUserAccess;

// Export actions and thunk to use in components or hooks
export const { setCurrentUserAccess, clearUserAccess } = usersSlice.actions;

export default usersSlice.reducer;
