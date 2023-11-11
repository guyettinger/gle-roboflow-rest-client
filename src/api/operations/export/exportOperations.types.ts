import {
    ExportInformation,
    ProjectInformation,
    VersionInformation,
    WorkspaceSummaryInformation
} from "../../types";

export interface ExportResponse {
    workspace: WorkspaceSummaryInformation
    project: ProjectInformation
    version: VersionInformation
    export: ExportInformation
    progress: number
}