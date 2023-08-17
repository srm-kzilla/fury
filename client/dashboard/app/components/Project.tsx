import projectStyles from "~/styles/pages/Project.css";
import { Task } from "~/components";
import type { LinksFunction } from "@remix-run/node";
import type { ActionData } from "~/routes/applications.technical-project";
import {useEffect} from "react";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: projectStyles,
  },
];

interface ProjectProps {
  slug: string;
  projects: Project[];
  actionData?: ActionData;
}

const Project = ({ slug, projects, actionData }: ProjectProps) => {
  const activeProject = projects.find((project) => project.slug === slug);

  if (!activeProject) {
    throw new Error("Not a valid project slug");
  }

  useEffect(() => {
    console.log(actionData);
  }, [actionData]);

  return (
    <div className="kz-project-module">
      <div className="kz-project-flex">
        <div className="main left">
          <div className="instructions-box">
            {activeProject.tasks && <Task activeProject={activeProject} />}
          </div>
        </div>
        <div className="main">
          <div className="settings">
            <div className="settings-box">
              <div className="field">
                <label>Project Title</label>
                <input
                  type="text"
                  placeholder="Enter the title of your project"
                  name="title"
                />
                <sub>{actionData?.errors?.title}</sub>
                <label>GitHub Repository</label>
                <input
                  type="text"
                  placeholder="https://github.com/srm-kzilla/srm-kzilla"
                  name="link"
                />
                <sub>{actionData?.errors?.link}</sub>
                <label htmlFor="subdomain">Preferred Subdomain</label>
                <select name="subdomain">
                  <option value="" selected disabled>
                    Select Your Preferred Subdomain
                  </option>
                  <option value="app">App Development</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                </select>
                <sub>{actionData?.errors?.subdomain}</sub>
              </div>
              <button type="submit" name="_action" value="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
