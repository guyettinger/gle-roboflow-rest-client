import { BlobUtilities, OperationsConfigurationModel, OperationsModel } from "../../../core";
import {
    InstanceSegmentationOptions,
    InstanceSegmentationResponse
} from "./instanceSegmentationOperations.types";

export class InstanceSegmentationOperations extends OperationsModel {

    constructor(operationsConfiguration: OperationsConfigurationModel, public outlineUrl: string) {
        super(operationsConfiguration)
    }

    private getInstanceSegmentationRoute(modelId: string, modelVersion: string): string {
        return `${this.basePath}${modelId}/${modelVersion}`
    }

    async instanceSegmentationOnBlob(modelId: string, modelVersion: string, imageBlob: Blob, instanceSegmentationOptions?: InstanceSegmentationOptions): Promise<InstanceSegmentationResponse> {
        try {
            const instanceSegmentationImage = await BlobUtilities.blobToBase64(imageBlob)
            const instanceSegmentationUrl = this.getInstanceSegmentationRoute(modelId, modelVersion)
            let params: any = {}
            if (instanceSegmentationOptions) {
                params = {
                    ...instanceSegmentationOptions
                }
            }
            const response = await this.client.post<InstanceSegmentationResponse>(
                instanceSegmentationUrl,
                instanceSegmentationImage,
                {
                    baseURL: this.outlineUrl,
                    params: params,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            )
            const instanceSegmentationResponse = response.data
            return instanceSegmentationResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }

    async instanceSegmentationOnUrl(modelId: string, modelVersion: string, imageUrl: string, instanceSegmentationOptions?: InstanceSegmentationOptions): Promise<InstanceSegmentationResponse> {
        try {
            const instanceSegmentationUrl = this.getInstanceSegmentationRoute(modelId, modelVersion)
            let params: any = {
                image: imageUrl
            }
            if (instanceSegmentationOptions) {
                params = {
                    ...instanceSegmentationOptions,
                }
            }
            const response = await this.client.post<InstanceSegmentationResponse>(
                instanceSegmentationUrl,
                null,
                {
                    baseURL: this.outlineUrl,
                    params: params
                }
            )
            const instanceSegmentationResponse = response.data
            return instanceSegmentationResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
