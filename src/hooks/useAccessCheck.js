import { useSelector } from 'react-redux';
import { selectUserAccess } from '../features/users/UsersSlice';

const useAccessCheck = (scopeArea, priName) => {
    const accessData = useSelector(selectUserAccess);

    return accessData.some((access) =>
        access.ScopeArea === scopeArea && access.PRIs.includes(priName)
    );
};

export default useAccessCheck;
