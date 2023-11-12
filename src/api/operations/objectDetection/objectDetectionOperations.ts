import { BlobUtilities, OperationsConfigurationModel, OperationsModel } from "../../../core";
import {
    ObjectDetectionResponse
} from "./objectDetectionOperations.types";

export class ObjectDetectionOperations extends OperationsModel {

    constructor(operationsConfiguration: OperationsConfigurationModel, public detectUrl: string) {
        super(operationsConfiguration)
    }

    private getObjectDetectionRoute(modelId: string, modelVersion: string): string {
        return `${this.basePath}${modelId}/${modelVersion}`
    }

    async objectDetectionOnBlob(modelId: string, modelVersion: string, imageBlob: Blob): Promise<ObjectDetectionResponse> {
        try {
            const objectDetectionImage = await BlobUtilities.blobToBase64(imageBlob)
            const objectDetectionUrl = this.getObjectDetectionRoute(modelId, modelVersion)
            const response = await this.client.post<ObjectDetectionResponse>(
                objectDetectionUrl,
                objectDetectionImage,
                {
                    baseURL: this.detectUrl,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            )
            const objectDetectionResponse = response.data
            return objectDetectionResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }

    async objectDetectionOnUrl(modelId: string, modelVersion: string, imageUrl: string): Promise<ObjectDetectionResponse> {
        try {
            const objectDetectionUrl = this.getObjectDetectionRoute(modelId, modelVersion)
            const response = await this.client.post<ObjectDetectionResponse>(
                objectDetectionUrl,
                null,
                {
                    baseURL: this.detectUrl,
                    params: {
                        image: imageUrl
                    }
                }
            )
            const objectDetectionResponse = response.data
            return objectDetectionResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
