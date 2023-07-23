import { useState, useEffect, useContext } from "react";
import { useNavigate } from "@remix-run/react";
import { observer } from "mobx-react";

import {
  DomainSelectForm,
  GeneralInstructions,
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  DomainInstructions,
} from "~/shared/components/Wizard/FormSteps";
import { Loading } from "~/shared/components";
import Wizard, { links as wizardLinks } from "~/shared/components/Wizard/Wizard";
import { links as loadingLinks } from "~/shared/components/Loading";
import { toast } from "~/shared/utils/toast";
import { APIService } from "~/shared/services/api-service";
import { StoreContext } from "~/shared/components/Wizard/Store";
import { AuthStore } from "~/shared/stores";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  ...wizardLinks(),
  ...loadingLinks(),
]

const Application = () => {
  const [loading, setLoading] = useState(false);
  const { setUserProjects, selectedDomainSlug, setSubmitted, domain, setYear } =
    useContext(StoreContext);
  let history = useNavigate();
  const authStore = useContext(AuthStore);
  let { blob } = useContext(StoreContext);

  useEffect(() => {
    let res;
    let retrievedProjects = [];
    let year = "";
    (async () => {
      setLoading(true);
      try {
        res = await APIService.getInstance().fetchApplications();
        const userInfo = await APIService.getInstance().fetchUserInfo();
        year = userInfo.data.user.registration_number.substring(2, 4);
        retrievedProjects = res.data.applications;
      } catch (err) {
        console.log(err)
        toast({
          title: "Something broke",
          message: "Our systems had a hard time figuring out who you are.",
          theme: "error",
        });
      } finally {
        setUserProjects(retrievedProjects);
        setYear(year);
        setLoading(false);
      }
    })();
  }, []);

  const onSubmit = async (values: any) => {
    setSubmitted(true);
    const userInfo = await APIService.getInstance().fetchUserInfo();
    const year = userInfo.data.user.registration_number.substring(2, 4);
    if (domain === "gfx" || domain === "vfx" || domain === "content_writing") {
      if (year === "21" && (domain === "gfx" || domain === "vfx")) {
        if (blob.length <= 0) {
          toast({
            title: "You skipped a part!",
            message: "You must upload a file to continue.",
            theme: "error",
          });
          return setSubmitted(false);
        }
      }
      values.question_8 = blob;
    }
    if (selectedDomainSlug === "") {
      toast({
        title: "You made a boo-boo!",
        message: "You need to select a domain to continue.",
        theme: "error",
      });
    } else {
      setSubmitted(true);
      try {
        await APIService.getInstance().addApplication(values);
        history("/dashboard");
        toast({
          title: "Sweet!",
          message: "You've successfully submitted your application.",
          theme: "info",
        });
      } catch (err) {
        toast({
          message:
            "We were flying to mars and ran into some asteroids. Please check back soon.",
          title: "This is embarrassing",
          theme: "error",
        });
      } finally {
        setSubmitted(false);
      }
    }
  };
  if (authStore.timeLeft > 0)
    return loading ? (
      <Loading />
    ) : (
      <Wizard
        validationSchemas={[
          GeneralInstructions.validationSchema,
          DomainSelectForm.validationSchema,
          DomainInstructions.validationSchema,
          Question1.validationSchema,
          Question2.validationSchema,
          Question3.validationSchema,
          Question4.validationSchema,
          Question5.validationSchema,
          Question6.validationSchema,
          Question7.validationSchema,
          Question8.validationSchema,
        ]}
        initialValues={[
          GeneralInstructions.initialValues,
          DomainSelectForm.initialValues,
          DomainInstructions.initialValues,
          Question1.initialValues,
          Question2.initialValues,
          Question3.initialValues,
          Question4.initialValues,
          Question5.initialValues,
          Question6.initialValues,
          Question7.initialValues,
          Question8.initialValues,
        ]}
        formComponents={[
          observer(() =>
            GeneralInstructions.component({
              timeLeft: authStore.timeLeftDuration,
            }),
          ),
          DomainSelectForm.component,
          DomainInstructions.component,
          Question1.component,
          Question2.component,
          Question3.component,
          Question4.component,
          Question5.component,
          Question6.component,
          Question7.component,
          Question8.component,
        ]}
        handleSubmit={onSubmit}
      />
    );
  else {
    return <h1>Applications have now been closed</h1>;
  }
};

export default Application;
