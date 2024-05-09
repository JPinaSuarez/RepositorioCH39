import { useEffect } from "react";

const useAstrosEffect = (getAstros) => {
    useEffect(() => {
        getAstros();
    }, [getAstros]);
};

export default useAstrosEffect;