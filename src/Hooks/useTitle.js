import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}-Nature World`;
    }, [title]);
};

export default useTitle;