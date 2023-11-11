import { OperationsConfigurationModel, OperationsModel } from "../../../models";
import { WorkspaceResponse } from "./workspaceOperations.types";

export class WorkspaceOperations extends OperationsModel {
    private _workspaceOperationRoute = '/'

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration)
    }

    private createWorkspaceOperationRoute(workspaceId: string): string {
        return `${this._workspaceOperationRoute}${workspaceId}`
    }

    async getWorkspace(workspaceId: string): Promise<WorkspaceResponse> {
        try {
            const workspaceUrl = this.createWorkspaceOperationRoute(workspaceId)
            const response = await this.client.get<WorkspaceResponse>(workspaceUrl)
            const workspaceResponse = response.data
            return workspaceResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
