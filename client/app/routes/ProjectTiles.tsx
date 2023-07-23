import React, { useContext, useEffect, useState } from "react";
import { Task, Tile, User } from "~/shared/components";
import { produce } from "immer";
import { StoreContext } from "~/shared/components/Wizard/Store";
import { APIService } from "~/shared/services/api-service";
import LoadingShimmer from "~/components/LoadingShimmer";
import projectTilesLink from "~/styles/pages/ProjectTiles.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: projectTilesLink,
    },
  ];
};

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
  const [activeProject, setActiveProject] = useState<ProjectTile>();
  const [loading, setLoading] = useState(true);
  const clickDisabled = true;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { selectedProjectSlug, setSelectedProjectSlug } =
    useContext(StoreContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { domain } = useContext(StoreContext);

  useEffect(() => {
    (async () => {
      try {
        const projectsResponse =
          await APIService.getInstance().fetchAllProjects();
        console.log(projectsResponse.data.projects);

        setProjects(projectsResponse.data.projects);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  useEffect(() => {
    const active = projects
      .slice()
      .reverse()
      .find((p) => p.active);
    setActiveProject(active);
    if (active) setSelectedProjectSlug(active?.slug);
  }, [projects]);
  const toggleTileActive = (id: string) => {
    setProjects(
      projects.map((projectTile) => {
        if (projectTile.slug === id) {
          return { ...projectTile, active: !projectTile.active };
        } else {
          return { ...projectTile, active: false };
        }
      }),
    );
  };

  const toggleTaskChecked = (taskId: string) => {
    const activeProjectId = activeProject?.slug;

    // @ts-ignore
    const newProjectTiles = produce(projects, (draft) => {
      const projectIndex = projects.findIndex(
        (p) => p.slug === activeProjectId,
      );
      const taskIndex = projects[projectIndex].tasks.findIndex(
        (t) => t.id === taskId,
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
        (p) => p.slug === activeProjectId,
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
        (p) => p.slug === activeProjectId,
      );
      const taskIndex = projects[projectIndex].tasks.findIndex(
        (p) => p.id === taskId,
      );
      draft[projectIndex].tasks.splice(taskIndex, 1);
    });
    setProjects(newProjectTiles);
  };

  return (
    <div className="kz-project">
      {/*TODO: Apply flexbox here*/}
      <div>
        <div>
          <div>
            <User clickDisabled={clickDisabled} />
            {loading && (
              <div className="kz-shimmer">
                <LoadingShimmer />
                <LoadingShimmer />
                <LoadingShimmer />
                <LoadingShimmer />
              </div>
            )}
            {!loading && (
              <div className="kz-project-tiles">
                <div>
                  <div>
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
            )}
          </div>

          <div>
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
