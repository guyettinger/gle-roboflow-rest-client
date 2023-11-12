import { OperationsConfigurationModel, OperationsModel } from "../../../core";
import { WorkspaceResponse } from "./workspaceOperations.types";

export class WorkspaceOperations extends OperationsModel {

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration)
    }

    private getWorkspaceOperationRoute(workspaceId: string): string {
        return `${this.basePath}${workspaceId}`
    }

    async getWorkspace(workspaceId: string): Promise<WorkspaceResponse> {
        try {
            const workspaceUrl = this.getWorkspaceOperationRoute(workspaceId)
            const response = await this.client.get<WorkspaceResponse>(workspaceUrl)
            const workspaceResponse = response.data
            return workspaceResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
