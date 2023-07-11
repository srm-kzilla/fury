import React, {Fragment, useEffect} from "react";

function ScrollToTop({history, children}: { history: any; children: any }) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, []);

    return <Fragment>{children}</Fragment>;
}

//@ts-ignore
export default ScrollToTop;
