import { observer } from "mobx-react";
import { useContext, useEffect } from "react";
import { AuthStore } from "../stores";
import { useNavigate } from "@remix-run/react";
import Store from "~/shared/components/Wizard/Store";
import { Loading, UserProfileForm } from "~/shared/components";
import { links as loadingLinks } from "~/shared/components/Loading";
import { links as userProfileLinks } from "~/shared/components/UserProfile";
import type { ReactNode } from "react";
import type { LinksFunction } from "@remix-run/node";

interface PrivateRouteProps {
  children: ReactNode;
  redirectTo: string;
  loading: boolean;
}

export const links: LinksFunction = () => [
  ...loadingLinks(),
  ...userProfileLinks(),
];

const PrivateRoute = ({ children, redirectTo, loading }: PrivateRouteProps) => {
  const authStore = useContext(AuthStore);
  const navigate = useNavigate();

  useEffect(() => {}, [loading, authStore.user]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {authStore.user ? (
            authStore.user.gender ? (
              <>{children}</>
            ) : (
              <>
                <Store>
                  <UserProfileForm />
                </Store>
              </>
            )
          ) : (
            navigate(redirectTo)
          )}
        </>
      )}
    </>
  );
};

export default observer(PrivateRoute);
