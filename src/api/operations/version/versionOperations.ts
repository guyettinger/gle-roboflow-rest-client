import { OperationsConfigurationModel, OperationsModel } from "../../../models";
import { VersionResponse } from "./versionOperations.types";

export class VersionOperations extends OperationsModel {
    private _versionOperationRoute = '/'

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration);
    }

    private createVersionOperationRoute(workspaceId: string, projectId: string, versionId: string): string {
        return `${this._versionOperationRoute}${workspaceId}/${projectId}/${versionId}`
    }

    async getVersion(workspaceId: string, projectId: string, versionId: string): Promise<VersionResponse> {
        try {
            const versionUrl = this.createVersionOperationRoute(workspaceId, projectId, versionId)
            const response = await this.client.get<VersionResponse>(versionUrl)
            const versionResponse = response.data
            return versionResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel;
        }
    }
}
