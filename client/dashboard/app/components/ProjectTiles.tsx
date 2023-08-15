import { useState } from "react";
import { Task, Tile } from "~/components";
import { produce } from "immer";
import type { LinksFunction } from "@remix-run/node";
import projectTilesStyles from "~/styles/pages/ProjectTiles.css";
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

export interface TaskType {
  id: string;
  title: string;
  section: string;
  done: boolean;
  isDeletable: boolean;
}

export interface ProjectTile {
  slug: string;
  title: string;
  description?: string;
  domain: string;
  color: string;
  tasks: TaskType[];
  active?: boolean;
  track?: string;
  additionalNotes: string;
}

const ProjectTiles = () => {
  const [projects, setProjects] = useState<ProjectTile[]>([]);
  const [activeProject] = useState<ProjectTile>();

  const toggleTileActive = (id: string) => {
    setProjects(
      projects.map((projectTile) => {
        if (projectTile.slug === id) {
          return { ...projectTile, active: !projectTile.active };
        } else {
          return { ...projectTile, active: false };
        }
      })
    );
  };

  const toggleTaskChecked = (taskId: string) => {
    const activeProjectId = activeProject?.slug;

    // @ts-ignore
    const newProjectTiles = produce(projects, (draft) => {
      const projectIndex = projects.findIndex(
        (p) => p.slug === activeProjectId
      );
      const taskIndex = projects[projectIndex].tasks.findIndex(
        (t) => t.id === taskId
      );

      const isActive = draft[projectIndex].tasks[taskIndex].done;
      draft[projectIndex].tasks[taskIndex].done = !isActive;
    });

    setProjects(newProjectTiles);
  };

  const addTask = (task: TaskType) => {
    const activeProjectId = activeProject?.slug;
    // @ts-ignore
    const newProjectTiles = produce(projects, (draft) => {
      const projectIndex = projects.findIndex(
        (p) => p.slug === activeProjectId
      );
      draft[projectIndex].tasks.push(task);
    });
    setProjects(newProjectTiles);
  };

  const deleteTask = (taskId: string) => {
    const activeProjectId = activeProject?.slug;
    // @ts-ignore
    const newProjectTiles = produce(projects, (draft) => {
      const projectIndex = projects.findIndex(
        (p) => p.slug === activeProjectId
      );
      const taskIndex = projects[projectIndex].tasks.findIndex(
        (p) => p.id === taskId
      );
      draft[projectIndex].tasks.splice(taskIndex, 1);
    });
    setProjects(newProjectTiles);
  };

  return (
    <div className="kz-project">
      {/*TODO: Apply flexbox here*/}
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
                      <div key={tile.slug}>
                        <Tile
                          tile={tile}
                          toggleTileActive={(id: string) => {
                            toggleTileActive(id);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="kz-project-inner-flex">
            <div className="kz-task-wrapper">
              <Task
                activeProject={activeProject}
                toggleTaskChecked={(taskId: string) => {
                  toggleTaskChecked(taskId);
                }}
                addTask={(task: TaskType) => {
                  addTask(task);
                }}
                deleteTask={(taskId: string) => {
                  deleteTask(taskId);
                }}
                clickDisabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectTilesComponent = {
  Component: ProjectTiles,
  validationSchemas: {},
  initialValues: {},
};

export default ProjectTiles;
