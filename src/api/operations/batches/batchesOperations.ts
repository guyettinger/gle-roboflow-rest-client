import { OperationsConfigurationModel, OperationsModel } from "../../../models";
import { BatchesResponse, BatchResponse } from "./batchesOperations.types";

export class BatchesOperations extends OperationsModel {
    private _batchesOperationRoute = '/'

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration)
    }

    private getBatchesOperationRoute(workspaceId: string, projectId: string): string {
        return `${this._batchesOperationRoute}${workspaceId}/${projectId}/batches`
    }

    private getBatchOperationRoute(workspaceId: string, projectId: string, batchId: string): string {
        return `${this._batchesOperationRoute}${workspaceId}/${projectId}/batches/${batchId}`
    }

    async getBatches(workspaceId: string, projectId: string): Promise<BatchesResponse> {
        try {
            const batchesUrl = this.getBatchesOperationRoute(workspaceId, projectId)
            const response = await this.client.get<BatchesResponse>(batchesUrl)
            const batchesResponse = response.data
            return batchesResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }

    async getBatch(workspaceId: string, projectId: string, batchId: string): Promise<BatchResponse> {
        try {
            const batchUrl = this.getBatchOperationRoute(workspaceId, projectId, batchId)
            const response = await this.client.get<BatchResponse>(batchUrl)
            const batchResponse = response.data
            return batchResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
