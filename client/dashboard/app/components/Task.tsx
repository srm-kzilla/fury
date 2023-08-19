import taskStyles from "~/styles/components/Task.css";
import Markdown from "markdown-to-jsx";
import type { LinksFunction } from "@remix-run/node";

interface TaskProps {
  activeProject: Project | undefined;
}

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: taskStyles,
  },
];

const Task = ({ activeProject }: TaskProps) => {
  return (
    <div className="kz-task-project">
      {!activeProject && (
        <div className="not-found">
          <img src="/empty.svg" alt="No Elements in pool" />
          <p>Please select a project to show its task list</p>
        </div>
      )}
      {activeProject && (
        <div style={{ height: "100%" }}>
          <div className="kz-task-project-wrapper">
            <div className="kz-project-title">
              <div>
                <h2>{activeProject?.title}</h2>
              </div>
              <h5>
                <Markdown options={{ forceBlock: true }}>
                  {activeProject.description || ""}
                </Markdown>
              </h5>
            </div>
            <div className="kz-task">
              <div className="kz-task-title">
                <h4>Suggested Tasks</h4>
              </div>
              <div className="kz-task-list">
                {activeProject?.tasks
                  .filter(({ section }: TaskType) => section === "suggested")
                  .map(({ id, title }: TaskType) => (
                    <Markdown options={{ forceBlock: true }} key={id}>
                      {title}
                    </Markdown>
                  ))}
              </div>
            </div>
            <div className="kz-task">
              <div className="kz-task-title">
                <h4>Bonus Tasks</h4>
              </div>
              <div className="kz-task-list">
                {activeProject.tasks
                  .filter(({ section }: TaskType) => section === "bonus")
                  .map(({ id, title }: TaskType) => (
                    <Markdown options={{ forceBlock: true }} key={id}>
                      {title}
                    </Markdown>
                  ))}
              </div>
            </div>
            {activeProject.additionalNotes && (
              <div className="kz-task">
                <div className="kz-task-title">
                  <h4>Additional Notes</h4>
                </div>
                <div className="kz-task-list">
                  <Markdown options={{ forceBlock: true }}>
                    {activeProject.additionalNotes}
                  </Markdown>
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
