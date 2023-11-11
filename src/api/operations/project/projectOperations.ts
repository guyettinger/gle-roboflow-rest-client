import { OperationsConfigurationModel, OperationsModel } from "../../../models";
import { ProjectResponse } from "./projectOperations.types";

export class ProjectOperations extends OperationsModel {
    private _projectOperationRoute = '/'

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration);
    }

    private createProjectOperationRoute(workspaceId: string, projectId: string): string {
        return `${this._projectOperationRoute}${workspaceId}/${projectId}`
    }

    async getProject(workspaceId: string, projectId: string): Promise<ProjectResponse> {
        try {
            const projectUrl = this.createProjectOperationRoute(workspaceId, projectId)
            const response = await this.client.get<ProjectResponse>(projectUrl)
            const projectResponse = response.data
            return projectResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel;
        }
    }
}
