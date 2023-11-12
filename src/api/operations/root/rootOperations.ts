import { OperationsConfigurationModel, OperationsModel } from "../../../core";
import { RootResponse } from "./rootOperations.types";

export class RootOperations extends OperationsModel {
    private _rootOperationRoute = '/'

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration)
    }

    async getRoot(): Promise<RootResponse> {
        try {
            const response = await this.client.get<RootResponse>(this._rootOperationRoute)
            const rootResponse = response.data
            return rootResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
