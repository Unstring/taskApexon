// src/hooks/useFetchUserAccess.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserAccess, selectUserAccess } from '../features/users/UsersSlice';

const useFetchUserAccess = (userName) => {
  const dispatch = useDispatch();
  const userAccess = useSelector(selectUserAccess);

  useEffect(() => {
    if (userName) {
      dispatch(fetchUserAccess(userName));
    }
  }, [dispatch, userName]);

  return userAccess;
};

export default useFetchUserAccess;
