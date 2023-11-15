import { OperationsConfigurationModel, OperationsModel } from "../../../core";
import {
    UploadImageOptions,
    UploadImageResponse
} from "./imageOperations.types";

export class ImageOperations extends OperationsModel {

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration)
    }

    private getProjectDatasetOperationRoute(projectId: string): string {
        return `${this.basePath}dataset/${projectId}`
    }

    private getProjectImageUploadRoute(projectId: string): string {
        return `${this.getProjectDatasetOperationRoute(projectId)}/upload`
    }

    async uploadImage(projectId: string, imageFileName: string, imageBlob: Blob, options?: UploadImageOptions): Promise<UploadImageResponse> {
        try {
            const formData = new FormData()
            formData.append("name", imageFileName)
            formData.append("file", imageBlob, imageFileName)
            if (options?.batch) {
                formData.append("split", options.batch);
            }

            if (options?.split) {
                formData.append("split", options.split);
            }

            const uploadImageUrl = this.getProjectImageUploadRoute(projectId)
            const response = await this.client.post<UploadImageResponse>(
                uploadImageUrl,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )
            const uploadImageResponse = response.data
            return uploadImageResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
