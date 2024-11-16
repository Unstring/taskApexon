// src/hooks/useFetchUsers.js
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserAccess, selectUserAccess } from '../features/users/UsersSlice';

const useFetchUsers = (userName) => {
    const dispatch = useDispatch();
    const userAccess = useSelector(selectUserAccess);

    useEffect(() => {
        if (userName) {
            dispatch(fetchUserAccess(userName));
        }
    }, [dispatch, userName]);

    return userAccess;
};

export default useFetchUsers;
