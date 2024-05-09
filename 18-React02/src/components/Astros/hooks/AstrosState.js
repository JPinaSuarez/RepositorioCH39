import { useState } from 'react';

const useAstrosState = () => {
    const [astros, setAstros] = useState([]);

    return { astros, setAstros };
};

export default useAstrosState;
