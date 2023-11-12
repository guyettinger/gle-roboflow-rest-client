import { OperationsConfigurationModel, OperationsModel } from "../../../core";
import { VersionResponse } from "./versionOperations.types";

export class VersionOperations extends OperationsModel {

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration)
    }

    private getVersionOperationRoute(workspaceId: string, projectId: string, versionId: string): string {
        return `${this.basePath}${workspaceId}/${projectId}/${versionId}`
    }

    async getVersion(workspaceId: string, projectId: string, versionId: string): Promise<VersionResponse> {
        try {
            const versionUrl = this.getVersionOperationRoute(workspaceId, projectId, versionId)
            const response = await this.client.get<VersionResponse>(versionUrl)
            const versionResponse = response.data
            return versionResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
