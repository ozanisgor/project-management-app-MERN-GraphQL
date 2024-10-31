import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";
import Spinner from "../components/Spinner";
import { GET_PROJECT } from "../queries/projectQueries";
import { ProjectData } from "../types";

export default function Project() {
  const { id = "" } = useParams();
  const { loading, error, data } = useQuery<ProjectData>(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || !data.project) return <div>No project data found</div>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link className="btn btn-light btn-sm w-25 d-inline ms-auto" to={`/`}>
            Back
          </Link>
          <h2>{data?.project?.name}</h2>
          <p>{data?.project?.description}</p>

          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data?.project?.status}</p>

          <ClientInfo client={data?.project?.client} />

          <EditProjectForm project={data?.project} />

          <DeleteProjectButton projectId={data?.project?.id} />
        </div>
      )}
    </>
  );
}
