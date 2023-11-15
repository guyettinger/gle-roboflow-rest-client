import { BlobUtilities, OperationsConfigurationModel, OperationsModel } from "../../../core";
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

    async uploadImageFormData(projectId: string, imageFileName: string, imageBlob: Blob, uploadImageOptions?: UploadImageOptions): Promise<UploadImageResponse> {
        try {
            const formData = new FormData()
            formData.append("name", imageFileName)
            formData.append("file", imageBlob, imageFileName)
            if (uploadImageOptions?.batch) {
                formData.append("split", uploadImageOptions.batch);
            }

            if (uploadImageOptions?.split) {
                formData.append("split", uploadImageOptions.split);
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

    async uploadImage(projectId: string, imageFileName: string, imageBlob: Blob, uploadImageOptions?: UploadImageOptions): Promise<UploadImageResponse> {
        try {

            const base64Image = await BlobUtilities.blobToBase64(imageBlob)
            let params: any = {}
            if (uploadImageOptions) {
                params = {
                    ...uploadImageOptions,
                    name: imageFileName
                }
            }
            const uploadImageUrl = this.getProjectImageUploadRoute(projectId)
            const response = await this.client.post<UploadImageResponse>(
                uploadImageUrl,
                base64Image,
                {
                    params: params,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
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
