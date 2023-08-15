import { Assets } from "~/constants";
import type { Project } from "./ProjectTiles";
import Markdown from "markdown-to-jsx";

interface Props {
  activeProject: Project | undefined;
}

const Task = (props: Props) => {
  return (
    <div className="kz-task-project">
      {!props.activeProject && (
        <div className="not-found">
          <img src={Assets.EMPTY} alt="No Elements in pool" />
          <p>Please select a project to show its task list</p>
        </div>
      )}
      {props.activeProject && (
        <div style={{ height: "100%" }}>
          <div className="kz-task-project-wrapper">
            <div className="kz-project-title">
              <div>
                <h2>{props.activeProject?.title}</h2>
              </div>
              <h5>
                <Markdown options={{ forceBlock: true }}>
                  {props.activeProject?.description || ""}
                </Markdown>
              </h5>
            </div>
            <div className="kz-task">
              <div className="kz-task-title">
                <h4>Suggested Tasks</h4>
              </div>
              <div className="kz-task-list">
                {props.activeProject?.tasks
                  .filter(
                    (task: any) => task.section.toLowerCase() === "suggested"
                  )
                  .map((task: any) => {
                    return (
                      <div className="description">
                        <h5>
                          <Markdown>
                            {props.activeProject?.title || ""}
                          </Markdown>
                        </h5>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="kz-task">
              <div className="kz-task-title">
                <h4>Bonus Tasks</h4>
              </div>
              <div className="kz-task-list">
                {props.activeProject?.tasks
                  .filter((task: any) => task.section.toLowerCase() === "bonus")
                  .map((task: any) => (
                    <Markdown>{props.activeProject?.title || ""}</Markdown>
                  ))}
              </div>
            </div>
            {props.activeProject?.additionalNotes && (
              <div className="kz-task">
                <div className="kz-project-title">
                  <div className="kz-task-title">
                    <h4>Additional Notes</h4>
                  </div>
                  <h5>
                    <Markdown options={{ forceBlock: true }}>
                      {props.activeProject?.additionalNotes || ""}
                    </Markdown>
                  </h5>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
