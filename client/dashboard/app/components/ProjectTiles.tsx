import {useEffect, useState} from "react";
import { Task, Tile } from "~/components";
import type { LinksFunction } from "@remix-run/node";
import projectTilesStyles from "~/styles/pages/ProjectTiles.css";
import { projects } from "~/utils/projects";
import tileStyles from "~/styles/components/Tile.css";
import taskStyles from "~/styles/components/Task.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: projectTilesStyles,
  },
  {
    rel: "stylesheet",
    href: tileStyles,
  },
  {
    rel: "stylesheet",
    href: taskStyles,
  },
];

export interface Task {
  id: string;
  title: string;
  section: string;
}

export interface Project {
  slug: string;
  title: string;
  description?: string;
  domain: string;
  tasks: Task[];
  additionalNotes: string;
}

const ProjectTiles = () => {
  const [activeProject, setActiveProject] = useState<Project>();

  useEffect(() => {
    console.log("[activeProject]", activeProject)
  }, [activeProject]);

  return (
    <div className="kz-project">
      <div>
        <div className="kz-project-flex">
          <div className="kz-project-inner-flex">
            <div className="kz-user">
              <h2>Pick a project to continue</h2>
            </div>
            <div className="kz-project-tiles">
              <div>
                <div className="kz-project-grid">
                  {projects.map((tile) => {
                    return (
                      <div onClick={() => setActiveProject(tile)}>
                        <Tile key={tile.slug} {...tile} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="kz-project-inner-flex">
            <div className="kz-task-wrapper">
              <Task activeProject={activeProject} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTiles;
