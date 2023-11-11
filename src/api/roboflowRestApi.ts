import { ApiModel } from "../models";
import { RootResponse, RootOperations } from "./operations";
import { WorkspaceResponse, WorkspaceOperations } from "./operations/workspace";
import { ProjectResponse, ProjectOperations } from "./operations/project";
import { VersionResponse, VersionOperations } from "./operations/version";
import { ExportResponse, ExportOperations } from "./operations/export";

export class RoboflowRestApi extends ApiModel {
    constructor(baseUrl: string, apiKey: string) {
        super(baseUrl, apiKey)
    }

    // root operations
    private rootOperations: RootOperations = new RootOperations(this.operationsConfiguration)

    async getRoot(): Promise<RootResponse> {
        return this.rootOperations.getRoot()
    }

    // workspace operations
    private workspaceOperations: WorkspaceOperations = new WorkspaceOperations(this.operationsConfiguration)

    async getWorkspace(workspaceId: string): Promise<WorkspaceResponse> {
        return this.workspaceOperations.getWorkspace(workspaceId)
    }

    // project operations
    private projectOperations: ProjectOperations = new ProjectOperations(this.operationsConfiguration)

    async getProject(workspaceId: string, projectId: string): Promise<ProjectResponse> {
        return this.projectOperations.getProject(workspaceId, projectId)
    }

    // version operations
    private versionOperations: VersionOperations = new VersionOperations(this.operationsConfiguration)

    async getVersion(workspaceId: string, projectId: string, versionId: string): Promise<VersionResponse> {
        return this.versionOperations.getVersion(workspaceId, projectId, versionId)
    }

    // export operations
    private exportOperations: ExportOperations = new ExportOperations(this.operationsConfiguration)

    async getExport(workspaceId: string, projectId: string, versionId: string, exportId: string): Promise<ExportResponse> {
        return this.exportOperations.getExport(workspaceId, projectId, versionId, exportId)
    }
}