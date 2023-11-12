import { OperationsConfigurationModel, OperationsModel } from "../../../core";
import { ExportResponse } from "./exportOperations.types";

export class ExportOperations extends OperationsModel {

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration)
    }

    private getExportOperationRoute(workspaceId: string, projectId: string, versionId: string, exportId: string): string {
        return `${this.basePath}${workspaceId}/${projectId}/${versionId}/${exportId}`
    }

    async getExport(workspaceId: string, projectId: string, versionId: string, exportId: string): Promise<ExportResponse> {
        try {
            const exportUrl = this.getExportOperationRoute(workspaceId, projectId, versionId, exportId)
            const response = await this.client.get<ExportResponse>(exportUrl)
            const exportResponse = response.data
            return exportResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
