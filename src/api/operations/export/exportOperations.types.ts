import { ExportInformation, ProjectInformation, VersionInformation, WorkspaceInformation } from "../../types";

export interface ExportResponse {
    workspace: WorkspaceInformation
    project: ProjectInformation
    version: VersionInformation
    export: ExportInformation
    progress: number
}