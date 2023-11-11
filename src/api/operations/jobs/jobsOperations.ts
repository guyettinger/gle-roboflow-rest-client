import { OperationsConfigurationModel, OperationsModel } from "../../../models";
import { JobsResponse, JobResponse } from "./jobsOperations.types";

export class JobsOperations extends OperationsModel {
    private _jobsOperationRoute = '/'

    constructor(operationsConfiguration: OperationsConfigurationModel) {
        super(operationsConfiguration)
    }

    private getJobsOperationRoute(workspaceId: string, projectId: string): string {
        return `${this._jobsOperationRoute}${workspaceId}/${projectId}/jobs`
    }

    private getJobOperationRoute(workspaceId: string, projectId: string, jobId: string): string {
        return `${this._jobsOperationRoute}${workspaceId}/${projectId}/jobs/${jobId}`
    }

    async getJobs(workspaceId: string, projectId: string): Promise<JobsResponse> {
        try {
            const jobsUrl = this.getJobsOperationRoute(workspaceId, projectId)
            const response = await this.client.get<JobsResponse>(jobsUrl)
            const jobsResponse = response.data
            return jobsResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }

    async getJob(workspaceId: string, projectId: string, jobId: string): Promise<JobResponse> {
        try {
            const jobUrl = this.getJobOperationRoute(workspaceId, projectId, jobId)
            const response = await this.client.get<JobResponse>(jobUrl)
            const jobResponse = response.data
            return jobResponse
        } catch (error) {
            const errorModel = this.interpretError(error)
            throw errorModel
        }
    }
}
