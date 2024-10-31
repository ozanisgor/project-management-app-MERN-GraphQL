import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";
import Spinner from "./Spinner";
import { ProjectsData } from "../types";

export default function Projects() {
  const { loading, error, data } = useQuery<ProjectsData>(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <div>Error happened</div>;

  return (
    <>
      {data?.projects?.length ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project?.id} project={project} />
          ))}
        </div>
      ) : (
        <div>No Projects</div>
      )}
    </>
  );
}
