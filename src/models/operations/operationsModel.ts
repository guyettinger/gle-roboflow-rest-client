import { AxiosInstance } from 'axios';
import { OperationsConfigurationModel } from './operationsConfigurationModel';
import { ApiErrorModel } from '../errors/apiErrorModel';

export class OperationsModel {
    protected operationsConfiguration: OperationsConfigurationModel;

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        this.operationsConfiguration = operationsConfiguration;
    }

    protected get client(): AxiosInstance {
        return this.operationsConfiguration.client;
    }

    protected createErrorModel(errorData: any): ApiErrorModel {
        const errorModel = ApiErrorModel.createErrorModel(errorData);
        return errorModel;
    }

    protected interpretError(error: any): ApiErrorModel {
        let errorData = {};

        if (error.response) {
            // the request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const responseData = error.response.data;
            if (responseData) {
                errorData = responseData;
            } else {
                errorData = {
                    error: 'error',
                    message: error.message,
                    status: error.status
                };
            }
        } else if (error.request) {
            // the request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            let message = 'network error';
            const request = error.request;
            if (request) {
                const requestError = request.error;
                if (requestError) {
                    message = requestError;
                }
            }
            errorData = {
                error: 'network error',
                message: message
            };
        } else {
            // something happened in setting up the request that triggered an Error
            const errorType = error.error ? error.error : 'unknown error';
            const message = error.message ? error.message : '';
            const path = error.path ? error.path : '';
            const status = error.status ? error.status : null;
            const timestamp = error.timestamp ? error.timestamp : null;

            errorData = {
                error: errorType,
                message: message,
                path: path,
                status: status,
                timestamp: timestamp
            };
        }
        const errorModel = this.createErrorModel(errorData);
        return errorModel;
    }
}
