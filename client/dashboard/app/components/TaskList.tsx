import { MdCheck, MdDelete } from "react-icons/md";
import classNames from "classnames";
import { TaskType } from "./ProjectTiles";
import Markdown from "markdown-to-jsx";
import TaskListStyles from "~/styles/components/TaskList.css";

interface Props {
  projectTask: TaskType;
  toggleTaskChecked: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
  clickDisabled: boolean;
}

import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: TaskListStyles,
    },
  ];
};

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
