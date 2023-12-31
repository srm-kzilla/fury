import projectStyles from "~/styles/pages/Project.css";
import { Task } from "~/components";
import { BiLoader } from "react-icons/bi";
import { useNavigation } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import type { ActionData } from "~/routes/applications.technical-project";

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
    throw json({ message: "Not a valid project slug" }, { status: 400 });
  }

  const navigation = useNavigation();

  return (
    <div className="kz-project-module">
      <div className="kz-project-flex">
        <div className="main left">
          <div>
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
              <button type="submit" name="_action" value="submit" disabled={navigation.state === "submitting"}>
                {navigation.state === "submitting" ? <BiLoader /> : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
