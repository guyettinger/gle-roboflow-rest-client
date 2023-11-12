import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { OperationsConfigurationModel } from '../operations';

export abstract class ApiModel {
    public readonly baseUrl: string
    public readonly apiKey: string
    public readonly client: AxiosInstance
    public readonly requestConfig: AxiosRequestConfig
    public readonly operationsConfiguration: OperationsConfigurationModel

    // default request headers
    requestHeaders: Map<string, string> = new Map<string, string>()

    protected constructor(baseUrl: string, apiKey: string) {
        this.baseUrl = baseUrl
        this.apiKey = apiKey

        // create a client
        this.requestConfig = {
            baseURL: baseUrl,
            paramsSerializer(params: any) {
                // support array parameters
                const searchParams = new URLSearchParams()
                for (const key of Object.keys(params)) {
                    const param = params[key]
                    if (Array.isArray(param)) {
                        for (const p of param) {
                            searchParams.append(key, p)
                        }
                    } else {
                        searchParams.append(key, param)
                    }
                }
                return searchParams.toString()
            }
        };
        this.client = axios.create(this.requestConfig);
        this.client.interceptors.request.use((config) => {
            config.params = config.params || {};
            config.params['api_key'] = this.apiKey;
            return config;
        })
        this.operationsConfiguration = new OperationsConfigurationModel(this.client, this);
        this.requestHeaders.set('Content-Type', 'application/json');
    }
}
