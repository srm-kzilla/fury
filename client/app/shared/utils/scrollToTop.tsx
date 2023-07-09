import React, {Fragment, useEffect} from "react";
import {withRouter} from "react-router-dom";

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
export default withRouter(ScrollToTop);
