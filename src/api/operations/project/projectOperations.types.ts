import { ProjectInformation, VersionInformation, WorkspaceInformation } from "../../types";

export interface ProjectResponse {
    workspace: WorkspaceInformation
    project: ProjectInformation
    versions: VersionInformation[]
}