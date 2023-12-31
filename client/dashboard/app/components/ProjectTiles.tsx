import { Task, taskLinks, Tile, tileLinks } from "~/components";
import projectTilesStyles from "~/styles/pages/ProjectTiles.css";
import { Link, useNavigation } from "@remix-run/react";
import { BiHomeAlt, BiLoader } from "react-icons/bi";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  ...tileLinks(),
  ...taskLinks(),
  {
    rel: "stylesheet",
    href: projectTilesStyles,
  },
];

interface ProjectTilesProps {
  projects: Project[];
  activeProject?: Project;
  setActiveProject: (project: Project) => void;
}

const ProjectTiles = ({
  projects,
  activeProject,
  setActiveProject,
}: ProjectTilesProps) => {
  const navigation = useNavigation();

  return (
    <div className="kz-project">
      <div className="kz-project-flex">
        <div className="kz-project-inner-flex">
          <Link to="/" prefetch="viewport">
            <BiHomeAlt size={30} className="home-icon" title="Home" />
          </Link>
          <div className="kz-user">
            <h2>Pick a project to continue</h2>
          </div>
          <div className="kz-project-tiles">
            <div className="kz-project-grid">
              {projects.map((tile) => (
                <div key={tile.slug} onClick={() => setActiveProject(tile)}>
                  <Tile key={tile.slug} {...tile} />
                </div>
              ))}
            </div>
          </div>
          <input hidden name="slug" value={activeProject?.slug} />
          <div className="kz-button-container">
            <button name="_action" value="show" disabled={!activeProject}>
              Make Submission
            </button>
            <button
              name="_action"
              value="delete"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting" ? (
                <BiLoader />
              ) : (
                "Delete Draft"
              )}
            </button>
          </div>
        </div>
        <div className="kz-project-inner-flex">
          <div className="kz-task-wrapper">
            <Task activeProject={activeProject} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTiles;
