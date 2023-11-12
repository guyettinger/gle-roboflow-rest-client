import { AxiosInstance } from 'axios';
import { ApiModel } from '../apis/apiModel';

export class OperationsConfigurationModel {
    public client: AxiosInstance;
    public api: ApiModel;

    constructor(axiosInstance: AxiosInstance, apiInstance: ApiModel) {
        this.client = axiosInstance;
        this.api = apiInstance;
    }
}
