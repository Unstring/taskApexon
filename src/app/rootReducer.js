import { combineReducers } from '@reduxjs/toolkit';
import scopePriMappingReducer from '../features/scopePriMaping/ListingsSlice';
import usersReducer from '../features/users/UsersSlice';

const rootReducer = combineReducers({
    scopePriMapping: scopePriMappingReducer,
    users: usersReducer,
});

export default rootReducer;
