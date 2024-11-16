// hooks/useSelectedPRI.js
import { useState } from 'react';

const useSelectedPRI = () => {
    const [selectedPRI, setSelectedPRI] = useState('');

    // Return both the selected PRI and the function to update it
    return [selectedPRI, setSelectedPRI];
};

export default useSelectedPRI;
