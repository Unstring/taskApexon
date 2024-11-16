// hooks/useTransactionCount.js
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectUserAccess } from '../features/users/usersSlice';

const useTransactionCount = (selectedPRI) => {
    // Retrieve the user's access data from the Redux store
    const currentUserAccess = useSelector(selectUserAccess);

    // Memoize the transaction count lookup
    const transactionCount = useMemo(() => {
        for (let scope of currentUserAccess) {
            for (let pri of scope.PRIs) {
                if (pri['PRI Name'] === selectedPRI) {
                    return pri['Transactions Assigned'];
                }
            }
        }
        return 0; // Default to 0 if no transactions are found for the selected PRI
    }, [selectedPRI, currentUserAccess]);

    return transactionCount;
};

export default useTransactionCount;
