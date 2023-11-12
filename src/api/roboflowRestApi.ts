import { ApiModel } from "../models";
import {
    RootResponse,
    RootOperations,
    BatchesOperations,
    BatchesResponse,
    JobsOperations,
    JobsResponse
} from "./operations";
import { WorkspaceResponse, WorkspaceOperations } from "./operations/workspace";
import { ProjectResponse, ProjectOperations } from "./operations/project";
import { VersionResponse, VersionOperations } from "./operations/version";
import { ExportResponse, ExportOperations } from "./operations/export";
import { BatchResponse } from "./operations/batches/batchesOperations.types";
import { JobResponse } from "./operations/jobs/jobsOperations.types";
import { ProjectCreationInformation } from "./types";
import {
    DatasetOperations,
    DatasetUploadAnnotationOptions,
    DatasetUploadAnnotationResponse
} from "./operations/dataset";
import { DatasetUploadImageOptions, DatasetUploadImageResponse } from "./operations/dataset/datasetOperations.types";

export class RoboflowRestApi extends ApiModel {
    constructor(baseUrl: string, apiKey: string) {
        super(baseUrl, apiKey)
    }

    // root operations
    private rootOperations: RootOperations = new RootOperations(this.operationsConfiguration)

    async getRoot(): Promise<RootResponse> {
        return this.rootOperations.getRoot()
    }

    // workspace operations
    private workspaceOperations: WorkspaceOperations = new WorkspaceOperations(this.operationsConfiguration)

    async getWorkspace(workspaceId: string): Promise<WorkspaceResponse> {
        return this.workspaceOperations.getWorkspace(workspaceId)
    }

    // project operations
    private projectOperations: ProjectOperations = new ProjectOperations(this.operationsConfiguration)

    async getProject(workspaceId: string, projectId: string): Promise<ProjectResponse> {
        return this.projectOperations.getProject(workspaceId, projectId)
    }

    async createProject(workspaceId: string, projectCreationInformation: ProjectCreationInformation): Promise<ProjectResponse> {
        return this.projectOperations.createProject(workspaceId, projectCreationInformation)
    }

    // version operations
    private versionOperations: VersionOperations = new VersionOperations(this.operationsConfiguration)

    async getVersion(workspaceId: string, projectId: string, versionId: string): Promise<VersionResponse> {
        return this.versionOperations.getVersion(workspaceId, projectId, versionId)
    }

    // export operations
    private exportOperations: ExportOperations = new ExportOperations(this.operationsConfiguration)

    async getExport(workspaceId: string, projectId: string, versionId: string, exportId: string): Promise<ExportResponse> {
        return this.exportOperations.getExport(workspaceId, projectId, versionId, exportId)
    }

    // batches operations
    private batchesOperations: BatchesOperations = new BatchesOperations(this.operationsConfiguration)

    async getBatch(workspaceId: string, projectId: string, batchId: string): Promise<BatchResponse> {
        return this.batchesOperations.getBatch(workspaceId, projectId, batchId)
    }

    async getBatches(workspaceId: string, projectId: string): Promise<BatchesResponse> {
        return this.batchesOperations.getBatches(workspaceId, projectId)
    }

    // jobs operations
    private jobsOperations: JobsOperations = new JobsOperations(this.operationsConfiguration)

    async getJob(workspaceId: string, projectId: string, jobId: string): Promise<JobResponse> {
        return this.jobsOperations.getJob(workspaceId, projectId, jobId)
    }

    async getJobs(workspaceId: string, projectId: string): Promise<JobsResponse> {
        return this.jobsOperations.getJobs(workspaceId, projectId)
    }

    // dataset operations
    private datasetOperations: DatasetOperations = new DatasetOperations(this.operationsConfiguration)

    async uploadImage(projectId: string, imageFileName: string, imageFile: Blob, options?: DatasetUploadImageOptions): Promise<DatasetUploadImageResponse> {
        return this.datasetOperations.uploadImage(projectId, imageFileName, imageFile, options)
    }

    async uploadAnnotation(projectId: string, imageId: string, annotationName: string, annotationData: string, options?: DatasetUploadAnnotationOptions): Promise<DatasetUploadAnnotationResponse> {
        return this.datasetOperations.uploadAnnotation(projectId, imageId, annotationName, annotationData, options)
    }
}