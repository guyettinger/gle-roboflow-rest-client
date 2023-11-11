import { ProjectInformation, VersionInformation, WorkspaceSummaryInformation } from "../../types";

export interface ProjectResponse {
    workspace: WorkspaceSummaryInformation
    project: ProjectInformation
    versions: VersionInformation[]
}