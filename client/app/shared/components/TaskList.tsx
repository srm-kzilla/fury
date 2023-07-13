import React from "react";
import { MdCheck, MdDelete } from "react-icons/md";
import classNames from "classnames";
import taskListCss from "../../styles/shared/components/TaskList.css";
import { TaskType } from "../../routes/ProjectTiles";
import Markdown from "markdown-to-jsx";
import {LinksFunction} from "@remix-run/node"; // TODO: Update this dependency

export const links: LinksFunction = () => {
    return [
        {
            rel: "stylesheet",
            href: taskListCss,
        },
    ];
};

interface Props {
  projectTask: TaskType;
  toggleTaskChecked: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
  clickDisabled: boolean;
}

const TaskList = (props: Props) => {
  return (
    <div className="kz-list">
      <div
        className={classNames("checkicon", {
          active: props.projectTask.done,
        })}
        onClick={() => {
          props.toggleTaskChecked(props.projectTask.id);
        }}
      >
        {props.projectTask.done && <MdCheck />}
      </div>
      <div className="description">
        <h5>
          <Markdown>{props.projectTask.title}</Markdown>
        </h5>
      </div>
      {!props.clickDisabled && props.projectTask.isDeletable && (
        <div
          className="kz-task-delete"
          onClick={() => {
            props.deleteTask(props.projectTask.id);
          }}
        >
          <MdDelete />
        </div>
      )}
    </div>
  );
};

export default TaskList;
