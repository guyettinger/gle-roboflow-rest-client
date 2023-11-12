import { OperationsConfigurationModel, OperationsModel } from "../../../core";
import {
    SearchOptions,
    SearchResponse,
} from "./searchOperations.types";

export class SearchOperations extends OperationsModel {
    private _searchOperationRoute = '/'

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration)
    }

    private getSearchOperationRoute(workspaceId: string, projectId: string): string {
        return `${this._searchOperationRoute}${workspaceId}/${projectId}/search`
    }

    async search(workspaceId: string, projectId: string, searchOptions: SearchOptions): Promise<SearchResponse> {
        try {
            const searchUrl = this.getSearchOperationRoute(workspaceId, projectId)
            const response = await this.client.post<SearchResponse>(
                searchUrl,
                searchOptions
            )
            const searchResponse = response.data
            return searchResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
