import { useEffect, useState } from 'react';
import useCurrentUserAccess from './useCurrentUserAccess';  // Assuming this hook fetches the current user's access data.

const useFirstAccessiblePRI = (modules) => {
    const [firstAccessiblePRI, setFirstAccessiblePRI] = useState(null);
    const currentUserAccess = useCurrentUserAccess();

    useEffect(() => {
        const findFirstAccessiblePRI = () => {
            // Iterate through modules, scope areas, and PRIs to find the first accessible PRI.
            for (let module of modules) {
                for (let scope of module['Scope Areas']) {
                    // Find the first PRI in the scope that the user has access to
                    const accessiblePRI = scope['PRIs'].find((pri) => {
                        const scopeAreaAccess = currentUserAccess.find(
                            (access) => access['Scope Area'] === scope['Scope Area']
                        );
                        return scopeAreaAccess?.PRIs.some((priAccess) => priAccess['PRI Name'] === pri);
                    });

                    // If found, return it as the first accessible PRI
                    if (accessiblePRI) {
                        return accessiblePRI;
                    }
                }
            }
            return null; // If no accessible PRI is found across all scope areas
        };

        setFirstAccessiblePRI(findFirstAccessiblePRI());
    }, [modules, currentUserAccess]);

    return firstAccessiblePRI;
};

export default useFirstAccessiblePRI;
