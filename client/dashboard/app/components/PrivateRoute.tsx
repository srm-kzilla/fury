import { observer } from "mobx-react";
import { useContext, useEffect } from "react";
import { AuthStore } from "~/shared/stores";
import { useNavigate } from "@remix-run/react";
import Store from "~/components/Wizard/Store";
import { Loading } from "~/components";
import { UserProfileForm } from "~/components/UserProfile";
import { links as loadingLinks } from "~/components/Loading";
import { links as userProfileLinks } from "~/components/UserProfile";
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
