import React from "react";
import * as Yup from "yup";

import Project from "../../../pages/Project/Project";
// import Project from "./TestApp";
import { ProjectTilesComponent } from "../../../pages/ProjectTiles/ProjectTiles";
import { APIService } from "../../services/apiService";

const Question1 = {
  projectComponents: [
    () => <ProjectTilesComponent.component />,
    () => <Project />,
  ],
  projectSchema: [
    {},
    {
      project_title: Yup.string()
        .required("Project Title is a required field.")
        .min(3),
      project_link: Yup.string()
        .required("Project Link is a required field.")
        .matches(
          /^https?:\/\/(www\.)?github\.com\/.+\/.+(.git)?$/,
          "The project links must follow the format https://github.com/user/repo"
        ),
      subdomain: Yup.string().required(
        "You need to select your preferred subdomain."
      ),
    },
  ],
  initialProjectValue: [{}, { project_link: "", project_title: "" }],
  handleProjectSubmit: async (
    values: any,
    project_slug: string
  ): Promise<number> => {
    try {
      const response = await APIService.getInstance().createProjects({
        project_slug,
        link: values.project_link,
        title: values.project_title,
        subdomain: values.subdomain,
        domain: "technicalp",
      });
      return response.status;
    } catch (error) {
      return -1;
    }
  },
};

export default Question1;
