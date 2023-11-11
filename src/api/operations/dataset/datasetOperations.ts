import { OperationsConfigurationModel, OperationsModel } from "../../../models";
import {
    DatasetUploadAnnotationResponse,
    DatasetUploadImageOptions,
    DatasetUploadImageResponse
} from "./datasetOperations.types";

export class DatasetOperations extends OperationsModel {
    private _datasetOperationRoute = '/'

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration)
    }

    private getDatasetOperationRoute(projectId: string): string {
        return `${this._datasetOperationRoute}dataset/${projectId}`
    }

    private getDatasetOperationImageUploadRoute(projectId: string): string {
        return `${this.getDatasetOperationRoute(projectId)}/upload`
    }


    private getDatasetOperationAnnotationUploadRoute(projectId: string, imageId: string): string {
        return `${this.getDatasetOperationRoute(projectId)}/annotate/${imageId}`
    }

    async uploadImage(projectId: string, imageFileName: string, imageBlob: Blob, options?: DatasetUploadImageOptions): Promise<DatasetUploadImageResponse> {
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

            const uploadImageUrl = this.getDatasetOperationImageUploadRoute(projectId)
            const response = await this.client.post<DatasetUploadImageResponse>(
                uploadImageUrl,
                formData
            )
            const datasetUploadImageResponse = response.data
            return datasetUploadImageResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }

    async uploadAnnotation(projectId: string, imageId: string, annotationName: string, annotationData: string): Promise<DatasetUploadAnnotationResponse> {
        try {
            const uploadAnnotationUrl = this.getDatasetOperationAnnotationUploadRoute(projectId, imageId)
            const response = await this.client.post<DatasetUploadAnnotationResponse>(
                uploadAnnotationUrl,
                annotationData,
                {
                    params: {
                        name: annotationName
                    },
                    headers: {
                        "Content-Type": "text/plain"
                    }
                });
            const datasetUploadAnnotationResponse = response.data
            return datasetUploadAnnotationResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
