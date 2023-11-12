import { OperationsConfigurationModel, OperationsModel } from "../../../core";
import { ProjectResponse } from "./projectOperations.types";
import { ProjectCreationInformation } from "../../types";

export class ProjectOperations extends OperationsModel {

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration)
    }

    private getProjectOperationRoute(workspaceId: string, projectId: string): string {
        return `${this.basePath}${workspaceId}/${projectId}`
    }

    private getProjectsOperationRoute(workspaceId: string): string {
        return `${this.basePath}${workspaceId}/projects`
    }

    async getProject(workspaceId: string, projectId: string): Promise<ProjectResponse> {
        try {
            const projectUrl = this.getProjectOperationRoute(workspaceId, projectId)
            const response = await this.client.get<ProjectResponse>(projectUrl)
            const projectResponse = response.data
            return projectResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }

    async createProject(workspaceId: string, projectCreationInformation: ProjectCreationInformation): Promise<ProjectResponse> {
        try {
            const projectsUrl = this.getProjectsOperationRoute(workspaceId)
            const response = await this.client.post<ProjectResponse>(projectsUrl, projectCreationInformation)
            const projectResponse = response.data
            return projectResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
