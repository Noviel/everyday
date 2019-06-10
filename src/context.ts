export interface ProjectDetails {
  name: string;
}

export interface EverydayContext {
  project: ProjectDetails;
  rootPath: string;
}

export interface EverydayCommandContext {
  name: string;
}
