import { OperationsConfigurationModel, OperationsModel } from "../../../models";
import {
    UploadImageOptions,
    UploadImageResponse
} from "./imageOperations.types";

export class ImageOperations extends OperationsModel {
    private _imageOperationRoute = '/'

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration)
    }

    private getProjectDatasetOperationRoute(projectId: string): string {
        return `${this._imageOperationRoute}dataset/${projectId}`
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
                formData
            )
            const uploadImageResponse = response.data
            return uploadImageResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}