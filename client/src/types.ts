export interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  client: Client;
}

export enum ProjectStatusUpdate {
  new = "new",
  progress = "progress",
  completed = "completed",
}

export interface ProjectsData {
  projects: Project[];
}

export interface ProjectData {
  project: Project;
}

export interface Client {
  email: string;
  id: string;
  name: string;
  phone: string;
}

export interface ClientData {
  client: Client;
}
