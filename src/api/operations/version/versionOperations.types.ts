import { ProjectInformation, VersionInformation, WorkspaceInformation } from "../../types";

export interface VersionResponse {
    workspace: WorkspaceInformation
    project: ProjectInformation
    version: VersionInformation
}