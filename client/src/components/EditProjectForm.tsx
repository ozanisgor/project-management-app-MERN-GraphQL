import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECT } from "../queries/projectQueries";
import { ProjectData } from "../types";
import { ProjectStatusUpdate } from "../__generated__/graphql";

const getStatusKey = (status: string): ProjectStatusUpdate => {
  switch (status) {
    case "Not Started":
      return ProjectStatusUpdate.New;
    case "In Progress":
      return ProjectStatusUpdate.Progress;
    case "Completed":
      return ProjectStatusUpdate.Completed;
    default:
      return ProjectStatusUpdate.New;
  }
};

export default function EditProjectForm({ project }: ProjectData) {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState<ProjectStatusUpdate>(
    getStatusKey(project.status)
  );

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: project.id,
      name,
      description,
      status,
    },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!name || !description || !status) {
      return alert("Please fill in all fields");
    }

    updateProject({
      variables: {
        id: project.id,
        name,
        description,
        status,
      },
    });
  };

  return (
    <div className="mt-5">
      <h3>Update Project Details</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value as ProjectStatusUpdate)}
          >
            <option value={ProjectStatusUpdate.New}>Not Started</option>
            <option value={ProjectStatusUpdate.Progress}>In Progress</option>
            <option value={ProjectStatusUpdate.Completed}>Completed</option>
          </select>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
