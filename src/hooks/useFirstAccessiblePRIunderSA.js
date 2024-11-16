import { useState, useEffect } from 'react';
import useCurrentUserAccess from './useCurrentUserAccess'; // Assuming this hook fetches the current user's access data.

const useFirstAccessiblePRIunderSA = (modules, scopeArea) => {
    const [firstAccessiblePRI, setFirstAccessiblePRI] = useState(null);
    const currentUserAccess = useCurrentUserAccess();

    useEffect(() => {
        const findFirstAccessiblePRI = () => {
            // Iterate through modules and scope areas to find the first accessible PRI under the given scope area
            for (let module of modules) {
                // Check if the current module contains the specified scope area
                const scope = module['Scope Areas'].find(s => s['Scope Area'] === scopeArea);
                if (scope) {
                    // Find the first accessible PRI in the scope area
                    const accessiblePRI = scope['PRIs'].find((pri) => {
                        const scopeAreaAccess = currentUserAccess.find(
                            (access) => access['Scope Area'] === scopeArea
                        );
                        return scopeAreaAccess?.PRIs.some((priAccess) => priAccess['PRI Name'] === pri);
                    });

                    // If found, return the first accessible PRI
                    if (accessiblePRI) {
                        return accessiblePRI;
                    }
                }
            }
            return null; // If no accessible PRI is found under the given scope area
        };

        setFirstAccessiblePRI(findFirstAccessiblePRI());
    }, [modules, currentUserAccess, scopeArea]);

    return firstAccessiblePRI;
};

export default useFirstAccessiblePRIunderSA;
