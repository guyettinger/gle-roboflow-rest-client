import { BlobUtilities, OperationsConfigurationModel, OperationsModel } from "../../../core";
import {
    ClassificationOptions, MultiLabelClassificationResponse,
    SingleLabelClassificationResponse
} from "./classificationOperations.types";

export class ClassificationOperations extends OperationsModel {

    constructor(operationsConfiguration: OperationsConfigurationModel, public segmentUrl: string) {
        super(operationsConfiguration)
    }

    private getClassificationRoute(modelId: string, modelVersion: string): string {
        return `${this.basePath}${modelId}/${modelVersion}`
    }

    async singleLabelClassificationOnBlob(modelId: string, modelVersion: string, imageBlob: Blob, classificationOptions?: ClassificationOptions): Promise<SingleLabelClassificationResponse> {
        try {
            const classificationImage = await BlobUtilities.blobToBase64(imageBlob)
            const classificationUrl = this.getClassificationRoute(modelId, modelVersion)
            let params: any = {}
            if (classificationOptions) {
                params = {
                    ...classificationOptions
                }
            }
            const response = await this.client.post<SingleLabelClassificationResponse>(
                classificationUrl,
                classificationImage,
                {
                    baseURL: this.segmentUrl,
                    params: params,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            )
            const classificationResponse = response.data
            return classificationResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }

    async singleLabelClassificationOnUrl(modelId: string, modelVersion: string, imageUrl: string, classificationOptions?: ClassificationOptions): Promise<SingleLabelClassificationResponse> {
        try {
            const classificationUrl = this.getClassificationRoute(modelId, modelVersion)
            let params: any = {
                image: imageUrl
            }
            if (classificationOptions) {
                params = {
                    ...classificationOptions,
                }
            }
            const response = await this.client.post<SingleLabelClassificationResponse>(
                classificationUrl,
                null,
                {
                    baseURL: this.segmentUrl,
                    params: params
                }
            )
            const classificationResponse = response.data
            return classificationResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }

    async multiLabelClassificationOnBlob(modelId: string, modelVersion: string, imageBlob: Blob, classificationOptions?: ClassificationOptions): Promise<MultiLabelClassificationResponse> {
        try {
            const classificationImage = await BlobUtilities.blobToBase64(imageBlob)
            const classificationUrl = this.getClassificationRoute(modelId, modelVersion)
            let params: any = {}
            if (classificationOptions) {
                params = {
                    ...classificationOptions
                }
            }
            const response = await this.client.post<MultiLabelClassificationResponse>(
                classificationUrl,
                classificationImage,
                {
                    baseURL: this.segmentUrl,
                    params: params,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            )
            const classificationResponse = response.data
            return classificationResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }

    async multiLabelClassificationOnUrl(modelId: string, modelVersion: string, imageUrl: string, classificationOptions?: ClassificationOptions): Promise<MultiLabelClassificationResponse> {
        try {
            const classificationUrl = this.getClassificationRoute(modelId, modelVersion)
            let params: any = {
                image: imageUrl
            }
            if (classificationOptions) {
                params = {
                    ...classificationOptions,
                }
            }
            const response = await this.client.post<MultiLabelClassificationResponse>(
                classificationUrl,
                null,
                {
                    baseURL: this.segmentUrl,
                    params: params
                }
            )
            const classificationResponse = response.data
            return classificationResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
