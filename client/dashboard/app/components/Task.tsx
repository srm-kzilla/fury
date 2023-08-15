import { useState } from "react";
import TaskList from "./TaskList";
import { BiPlus } from "react-icons/bi";
import classNames from "classnames";
import { v4 as uuid } from "uuid";
import { Assets } from "~/constants";
import type { ProjectTile, TaskType } from "./ProjectTiles";
import Markdown from "markdown-to-jsx";

interface Props {
  activeProject: ProjectTile | undefined;
  toggleTaskChecked: (taskId: string) => void;
  addTask: (task: TaskType) => void;
  deleteTask: (taskId: string) => void;
  clickDisabled: boolean;
}

const Task = (props: Props) => {
  const [addItem, setAddItem] = useState<TaskType>({
    id: "",
    title: "",
    section: "bonus",
    done: true,
    isDeletable: true,
  });

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
                <span>
                  {props.activeProject.track &&
                    props.activeProject.track.split("-").join(" ")}
                </span>
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
              <div
                className={classNames("kz-task-list", {
                  clickDisabled: props.clickDisabled,
                })}
              >
                {props.activeProject?.tasks
                  .filter(
                    (task: any) => task.section.toLowerCase() === "suggested"
                  )
                  .map((task: any) => {
                    return (
                      <TaskList
                        key={task.id}
                        projectTask={task}
                        toggleTaskChecked={props.toggleTaskChecked}
                        deleteTask={props.deleteTask}
                        clickDisabled={props.clickDisabled}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="kz-task">
              <div className="kz-task-title">
                <h4>Bonus Tasks</h4>
              </div>
              <div
                className={classNames("kz-task-list", {
                  clickDisabled: props.clickDisabled,
                })}
              >
                {props.activeProject?.tasks
                  .filter((task: any) => task.section.toLowerCase() === "bonus")
                  .map((task: any) => {
                    return (
                      <TaskList
                        key={task.id}
                        projectTask={task}
                        toggleTaskChecked={props.toggleTaskChecked}
                        deleteTask={props.deleteTask}
                        clickDisabled={props.clickDisabled}
                      />
                    );
                  })}
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
          {!props.clickDisabled && (
            <div className="kz-add-task">
              {/* <div
                className={classNames("check-icon", {
                  active: addItem.title.length > 0,
                })}
              >
                <MdCheck />
              </div> */}
              <button
                onClick={() => {
                  props.addTask({ ...addItem, id: uuid() });
                  setAddItem({ ...addItem, title: "" });
                }}
                disabled={addItem.title.length > 0 ? false : true}
              >
                <BiPlus />
              </button>

              <input
                type="text"
                placeholder="Add task"
                value={addItem.title}
                onChange={(e) => {
                  setAddItem({ ...addItem, title: e.target.value });
                }}
                onKeyPress={(e) => {
                  if (
                    (e.key === "Enter" || e.key === "Return") &&
                    addItem.title.length > 0
                  ) {
                    props.addTask({ ...addItem, id: uuid() });
                    setAddItem({ ...addItem, title: "" });
                  }
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Task;
