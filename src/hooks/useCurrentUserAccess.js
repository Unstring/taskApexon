// hooks/useCurrentUserAccess.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserAccess, selectUserAccess } from '../features/users/usersSlice';

const useCurrentUserAccess = () => {
    const dispatch = useDispatch();

    // Get the currently selected user from Redux
    const selectedUser = useSelector((state) => state.users.selectedUser);
    // Retrieve the current user's access data from the Redux store
    const currentUserAccess = useSelector(selectUserAccess);

    useEffect(() => {
        // Fetch user access data for the selected user if not already fetched
        if (selectedUser) {
            dispatch(fetchUserAccess(selectedUser));
        }
    }, [dispatch, selectedUser]);

    return currentUserAccess;
};

export default useCurrentUserAccess;
