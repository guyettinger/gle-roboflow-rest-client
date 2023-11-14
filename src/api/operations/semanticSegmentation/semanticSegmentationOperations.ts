import { BlobUtilities, OperationsConfigurationModel, OperationsModel } from "../../../core";
import {
    SemanticSegmentationOptions,
    SemanticSegmentationResponse
} from "./semanticSegmentationOperations.types";

export class SemanticSegmentationOperations extends OperationsModel {

    constructor(operationsConfiguration: OperationsConfigurationModel, public segmentUrl: string) {
        super(operationsConfiguration)
    }

    private getSemanticSegmentationRoute(modelId: string, modelVersion: string): string {
        return `${this.basePath}${modelId}/${modelVersion}`
    }

    async semanticSegmentationOnBlob(modelId: string, modelVersion: string, imageBlob: Blob, semanticSegmentationOptions?: SemanticSegmentationOptions): Promise<SemanticSegmentationResponse> {
        try {
            const semanticSegmentationImage = await BlobUtilities.blobToBase64(imageBlob)
            const semanticSegmentationUrl = this.getSemanticSegmentationRoute(modelId, modelVersion)
            let params: any = {}
            if (semanticSegmentationOptions) {
                params = {
                    ...semanticSegmentationOptions
                }
            }
            const response = await this.client.post<SemanticSegmentationResponse>(
                semanticSegmentationUrl,
                semanticSegmentationImage,
                {
                    baseURL: this.segmentUrl,
                    params: params,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            )
            const semanticSegmentationResponse = response.data
            return semanticSegmentationResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }

    async semanticSegmentationOnUrl(modelId: string, modelVersion: string, imageUrl: string, semanticSegmentationOptions?: SemanticSegmentationOptions): Promise<SemanticSegmentationResponse> {
        try {
            const semanticSegmentationUrl = this.getSemanticSegmentationRoute(modelId, modelVersion)
            let params: any = {
                image: imageUrl
            }
            if (semanticSegmentationOptions) {
                params = {
                    ...semanticSegmentationOptions,
                }
            }
            const response = await this.client.post<SemanticSegmentationResponse>(
                semanticSegmentationUrl,
                null,
                {
                    baseURL: this.segmentUrl,
                    params: params
                }
            )
            const semanticSegmentationResponse = response.data
            return semanticSegmentationResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
