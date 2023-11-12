import { AxiosInstance } from 'axios';
import { ApiModel } from '../apis';

export class OperationsConfigurationModel {
    public client: AxiosInstance;
    public api: ApiModel;

    constructor(axiosInstance: AxiosInstance, apiInstance: ApiModel, public basePath:string = '/') {
        this.client = axiosInstance;
        this.api = apiInstance;
    }
}
