import { OperationsConfigurationModel, OperationsModel } from "../../../core";
import {
    TagOptions,
    TagResponse
} from "./tagOperations.types";

export class TagOperations extends OperationsModel {

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration)
    }

    private getTagOperationRoute(workspaceId: string, projectId: string, imageId: string): string {
        return `${this.basePath}${workspaceId}/${projectId}/images/${imageId}/tags`
    }

    async tag(workspaceId: string, projectId: string, imageId: string, tagOptions: TagOptions): Promise<TagResponse> {
        try {
            const tagUrl = this.getTagOperationRoute(workspaceId, projectId, imageId)
            const response = await this.client.post<TagResponse>(
                tagUrl,
                tagOptions
            )
            const tagResponse = response.data
            return tagResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
