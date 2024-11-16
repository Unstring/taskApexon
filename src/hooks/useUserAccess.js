import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserAccess, selectUserAccess } from '../features/users/UsersSlice';

function useUserAccess(userName) {
    const dispatch = useDispatch();

    // Access the user's access data from Redux
    const userAccess = useSelector(selectUserAccess);

    // Dispatch fetchUserAccess whenever userName changes
    useEffect(() => {
        if (userName) {
            dispatch(fetchUserAccess(userName));
        }
    }, [userName, dispatch]);

    return userAccess;
}

export default useUserAccess;
