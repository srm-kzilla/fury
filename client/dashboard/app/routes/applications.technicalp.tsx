import { projectTilesLinks, ProjectTiles } from "~/components";
import { Form } from "@remix-run/react";

export const links = () => [
  ...projectTilesLinks(),
];

const Application = () => {
  return (
    <>
      <Form>
        <ProjectTiles />
      </Form>
    </>
  );
};

export default Application;
