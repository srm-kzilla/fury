import {observer} from "mobx-react";
import React, {useContext, useEffect} from "react";
import {AuthStore} from "../stores";
import {Redirect, Route} from "react-router-dom";
import {Loading, UserProfileForm} from "../components";
import Store from "../components/Wizard/Store";

const PrivateRoute: React.FC<any> = ({
                                         children,
                                         path,
                                         redirectTo,
                                         loading,
                                         ...rest
                                     }) => {
    const authStore = useContext(AuthStore);

    useEffect(() => {
    }, [loading, authStore.user]);

    return (
        <Route
            {...rest}
            exact
            path={path}
            render={({location}) => {
                if (loading) return <Loading/>;

                if (authStore.user) {
                    return authStore.user.gender ? (
                        children
                    ) : (
                        <>
                            <Store>
                                <UserProfileForm/>
                            </Store>
                        </>
                    );
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: redirectTo,
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default observer(PrivateRoute);
