import { OperationsConfigurationModel, OperationsModel } from "../../../models";
import {
    DatasetUploadAnnotationOptions,
    DatasetUploadAnnotationResponse,
    DatasetUploadImageOptions,
    DatasetUploadImageResponse
} from "./datasetOperations.types";
import { AxiosRequestConfig } from "axios";

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

    async uploadAnnotation(projectId: string, imageId: string, annotationName: string, annotationData: string, options?: DatasetUploadAnnotationOptions): Promise<DatasetUploadAnnotationResponse> {
        try {
            const uploadAnnotationUrl = this.getDatasetOperationAnnotationUploadRoute(projectId, imageId)
            let uploadAnnotationRequestConfig: AxiosRequestConfig<DatasetUploadAnnotationResponse> = {
                params: {
                    name: annotationName
                },
                headers: {
                    "Content-Type": "text/plain"
                }
            }

            if (options?.overwrite) {
                uploadAnnotationRequestConfig.params.overwrite = options.overwrite
            }

            const response = await this.client.post<DatasetUploadAnnotationResponse>(
                uploadAnnotationUrl,
                annotationData,
                uploadAnnotationRequestConfig
            )
            const datasetUploadAnnotationResponse = response.data
            return datasetUploadAnnotationResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
