import { ProjectInformation, VersionInformation, WorkspaceSummaryInformation } from "../../types";

export interface VersionResponse {
    workspace: WorkspaceSummaryInformation
    project: ProjectInformation
    version: VersionInformation
}