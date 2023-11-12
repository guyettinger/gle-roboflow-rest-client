import { ApiModel } from "../models";
import {
    AnnotationOperations,
    BatchResponse,
    BatchesOperations,
    BatchesResponse,
    ExportOperations,
    ExportResponse,
    ImageOperations,
    JobResponse,
    JobsOperations,
    JobsResponse,
    ProjectOperations,
    ProjectResponse,
    RootOperations,
    RootResponse,
    UploadAnnotationOptions,
    UploadAnnotationResponse,
    UploadImageOptions,
    UploadImageResponse,
    VersionOperations,
    VersionResponse,
    WorkspaceOperations,
    WorkspaceResponse,
} from "./operations";
import { ProjectCreationInformation } from "./types";

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

    // image operations
    private imageOperations: ImageOperations = new ImageOperations(this.operationsConfiguration)

    async uploadImage(projectId: string, imageFileName: string, imageFile: Blob, options?: UploadImageOptions): Promise<UploadImageResponse> {
        return this.imageOperations.uploadImage(projectId, imageFileName, imageFile, options)
    }

    // annotation operations
    private annotationOperations: AnnotationOperations = new AnnotationOperations(this.operationsConfiguration)

    async uploadAnnotation(projectId: string, imageId: string, annotationName: string, annotationData: string, options?: UploadAnnotationOptions): Promise<UploadAnnotationResponse> {
        return this.annotationOperations.uploadAnnotation(projectId, imageId, annotationName, annotationData, options)
    }
}