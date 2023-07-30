import classNames from "classnames";
import { observer } from "mobx-react";
import React, { useContext, useEffect, useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";
import { BiArrowBack, BiCog } from "react-icons/bi";
import {
  FooterCompact,
  Sidebar,
  Task,
  TaskList,
} from "../../shared/components";
import { TextField } from "../../shared/components/Wizard/FormFields";
import { Field } from "formik";
import {
  DomainInstructions,
  GeneralInstructionComponent,
} from "../../shared/components/Wizard/FormSteps/Instructions";
import { APIService } from "../services/api-service";
import { StoreContext } from "../../shared/components/Wizard/Store";
import Markdown from "markdown-to-jsx";

const Project = () => {
  const [settingsMode, setSettingsMode] = useState(true);
  const [currentProject, setCurrentProject] = useState<any>({});
  const { selectedProjectSlug } = useContext(StoreContext);

  useEffect(() => {
    (async () => {
      try {
        const projectsResponse =
          await APIService.getInstance().fetchAllProjects();

        setCurrentProject(
          projectsResponse.data.projects.filter(
            (project: any) => project.slug === selectedProjectSlug
          )[0]
        );
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="kz-project-module">
        {/* <Sidebar /> */}

        <div>
          <div className="kz-project-flex">
            <div className="main left">
              <div className="heading">
                <div>
                  <BiCog
                    className={classNames({ active: settingsMode })}
                    onClick={() => {
                      setSettingsMode(!settingsMode);
                    }}
                  />
                </div>
              </div>
              <div className="instructions-box">
                <DomainInstructions.component domain={"technical"} />
              </div>
              <div className="instructions-box">
                {currentProject.tasks && (
                  <Task
                    activeProject={currentProject}
                    toggleTaskChecked={() => {}}
                    addTask={() => {}}
                    deleteTask={() => {}}
                    clickDisabled={true}
                  />
                )}
              </div>
            </div>

            {settingsMode && (
              <div className="main">
                <div className="settings">
                  <h3>
                    <span>
                      <BiArrowBack
                        onClick={() => {
                          setSettingsMode(false);
                        }}
                      />
                      Project Settings
                    </span>
                  </h3>
                  <div className="settings-box">
                    <div className="field">
                      <label>Project Title</label>
                      <TextField
                        placeholder="Enter the title of your project"
                        name="project_title"
                      />

                      <label>GitHub Repository</label>
                      <TextField
                        placeholder="https://github.com/srm-kzilla/srm-kzilla"
                        name="project_link"
                      />
                      <label htmlFor="subdomain">Preferred Subdomain</label>
                      <Field component="select" name="subdomain">
                        <option value="">
                          Select Your Preferred Subdomain
                        </option>
                        <option value="app">App Development</option>
                        <option value="frontend">Frontend Development</option>
                        <option value="backend">Backend Development</option>
                        <option value="blockchain">Blockchain</option>
                      </Field>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <FooterCompact />
    </>
  );
};

export default observer(Project);
