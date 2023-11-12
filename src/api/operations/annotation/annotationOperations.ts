import { OperationsConfigurationModel, OperationsModel } from "../../../models";
import {
    UploadAnnotationOptions,
    UploadAnnotationResponse,
} from "./annotationOperations.types";
import { AxiosRequestConfig } from "axios";

export class AnnotationOperations extends OperationsModel {
    private _annotationOperationRoute = '/'

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration)
    }

    private getProjectDatasetOperationRoute(projectId: string): string {
        return `${this._annotationOperationRoute}dataset/${projectId}`
    }

    private getProjectAnnotationUploadRoute(projectId: string, imageId: string): string {
        return `${this.getProjectDatasetOperationRoute(projectId)}/annotate/${imageId}`
    }

    async uploadAnnotation(projectId: string, imageId: string, annotationName: string, annotationData: string, options?: UploadAnnotationOptions): Promise<UploadAnnotationResponse> {
        try {
            const uploadAnnotationUrl = this.getProjectAnnotationUploadRoute(projectId, imageId)
            let uploadAnnotationRequestConfig: AxiosRequestConfig<UploadAnnotationResponse> = {
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

            const response = await this.client.post<UploadAnnotationResponse>(
                uploadAnnotationUrl,
                annotationData,
                uploadAnnotationRequestConfig
            )
            const uploadAnnotationResponse = response.data
            return uploadAnnotationResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
