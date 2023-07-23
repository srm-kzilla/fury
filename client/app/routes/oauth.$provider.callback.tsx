import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "@remix-run/react";
import { APIService } from "~/shared/services/api-service";
import { AuthStore } from "~/shared/stores";
import { observer } from "mobx-react";
import { Loading } from "~/shared/components";
import { toast } from "~/shared/utils/toast";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const OAuthRedirect = () => {
  let query = useQuery();
  let navigate = useNavigate();
  const authStore = useContext(AuthStore);

  const [code] = useState(query.get("code"));

  useEffect(() => {
    (async () => {
      try {
        const response = await APIService.getInstance().getAccessToken(code!);

        const refresh_token = response.data.result.refresh_token;

        const access_token = response.data.result.access_token;
        authStore.setAuthorization({
          access_token,
          provider: "google",
          refresh_token,
        });

        const {
          data: { user },
        } = await APIService.getInstance().fetchUserInfo();
        authStore.setUser(user);
        navigate("/dashboard");
      } catch (e) {
        toast({
          title: "We shot past the moon",
          message:
            "Landing back to #Recruitment2022 failed. Please try again in a moment.",
        });
      }
    })();
  }, []);

  return (
    <div className="kz-oauth-redirect">
      <Loading />
    </div>
  );
};

export default observer(OAuthRedirect);
