// import { useSelector } from 'react-redux';
// import { selectPRIMapping } from '../features/scopePriMaping/ListingsSlice';
// import { selectUserAccess } from '../features/users/UsersSlice';

// const useFetchPRIMapping = () => {
//     const priMapping = useSelector(selectPRIMapping);
//     const userAccess = useSelector(selectUserAccess);

//     // Filter priMapping based on the user's accessible ScopeAreas and PRIs
//     const accessibleData = priMapping.filter((scopeArea) =>
//         userAccess.some((access) =>
//             access.ScopeArea === scopeArea.ScopeArea &&
//             scopeArea.PRIs.some((pri) => access.PRIs.includes(pri.name))
//         )
//     );

//     return accessibleData;
// };

// export default useFetchPRIMapping;


import { useSelector } from 'react-redux';
import { selectPRIMapping } from '../features/scopePriMaping/ListingsSlice';

const useFetchPRIMapping = () => {
    const priMapping = useSelector(selectPRIMapping);
    return priMapping;
};

export default useFetchPRIMapping;
