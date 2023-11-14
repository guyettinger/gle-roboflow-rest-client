import { ApiModel } from "../core";
import {
    AnnotationOperations,
    BatchResponse,
    BatchesOperations,
    BatchesResponse,
    ExportOperations,
    ExportResponse,
    ImageOperations,
    InstanceSegmentationOperations,
    InstanceSegmentationOptions,
    InstanceSegmentationResponse,
    JobResponse,
    JobsOperations,
    JobsResponse,
    ObjectDetectionOperations,
    ObjectDetectionOptions,
    ObjectDetectionResponse,
    ProjectOperations,
    ProjectResponse,
    RootOperations,
    RootResponse,
    SearchOperations,
    SearchOptions,
    SearchResponse,
    TagOperations,
    TagOptions,
    TagResponse,
    UploadAnnotationOptions,
    UploadAnnotationResponse,
    UploadImageOptions,
    UploadImageResponse,
    VersionOperations,
    VersionResponse,
    WorkspaceOperations,
    WorkspaceResponse, SemanticSegmentationOperations, SemanticSegmentationOptions, SemanticSegmentationResponse,
} from "./operations";
import { ProjectCreationInformation } from "./types";

export class RoboflowRestApi extends ApiModel {
    constructor(
        apiKey: string,
        apiUrl: string = 'https://api.roboflow.com',
        public detectUrl = 'https://detect.roboflow.com',
        public classifyUrl = 'https://classify.roboflow.com',
        public outlineUrl = 'https://outline.roboflow.com',
        public segmentUrl = 'https://segment.roboflow.com',
    ) {
        super(apiUrl, apiKey)
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

    // search operations
    private searchOperations: SearchOperations = new SearchOperations(this.operationsConfiguration)

    async search(workspaceId: string, projectId: string, searchOptions: SearchOptions): Promise<SearchResponse> {
        return this.searchOperations.search(workspaceId, projectId, searchOptions)
    }

    // tag operations
    private tagOperations: TagOperations = new TagOperations(this.operationsConfiguration)

    async tag(workspaceId: string, projectId: string, imageId: string, tagOptions: TagOptions): Promise<TagResponse> {
        return this.tagOperations.tag(workspaceId, projectId, imageId, tagOptions)
    }

    // object detection operations
    private objectDetectionOperations: ObjectDetectionOperations = new ObjectDetectionOperations(this.operationsConfiguration, this.detectUrl)

    async objectDetectionOnBlob(modelId: string, modelVersion: string, imageBlob: Blob, objectDetectionOptions?: ObjectDetectionOptions): Promise<ObjectDetectionResponse> {
        return this.objectDetectionOperations.objectDetectionOnBlob(modelId, modelVersion, imageBlob, objectDetectionOptions)
    }

    async objectDetectionOnUrl(modelId: string, modelVersion: string, imageUrl: string, objectDetectionOptions?: ObjectDetectionOptions): Promise<ObjectDetectionResponse> {
        return this.objectDetectionOperations.objectDetectionOnUrl(modelId, modelVersion, imageUrl, objectDetectionOptions)
    }

    // instance segmentation operations
    private instanceSegmentationOperations: InstanceSegmentationOperations = new InstanceSegmentationOperations(this.operationsConfiguration, this.outlineUrl)

    async instanceSegmentationOnBlob(modelId: string, modelVersion: string, imageBlob: Blob, instanceSegmentationOptions?: InstanceSegmentationOptions): Promise<InstanceSegmentationResponse> {
        return this.instanceSegmentationOperations.instanceSegmentationOnBlob(modelId, modelVersion, imageBlob, instanceSegmentationOptions)
    }

    async instanceSegmentationOnUrl(modelId: string, modelVersion: string, imageUrl: string, instanceSegmentationOptions?: InstanceSegmentationOptions): Promise<InstanceSegmentationResponse> {
        return this.instanceSegmentationOperations.instanceSegmentationOnUrl(modelId, modelVersion, imageUrl, instanceSegmentationOptions)
    }

    // semantic segmentation operations
    private semanticSegmentationOperations: SemanticSegmentationOperations = new SemanticSegmentationOperations(this.operationsConfiguration, this.segmentUrl)

    async semanticSegmentationOnBlob(modelId: string, modelVersion: string, imageBlob: Blob, semanticSegmentationOptions?: SemanticSegmentationOptions): Promise<SemanticSegmentationResponse> {
        return this.semanticSegmentationOperations.semanticSegmentationOnBlob(modelId, modelVersion, imageBlob, semanticSegmentationOptions)
    }

    async semanticSegmentationOnUrl(modelId: string, modelVersion: string, imageUrl: string, semanticSegmentationOptions?: SemanticSegmentationOptions): Promise<SemanticSegmentationResponse> {
        return this.semanticSegmentationOperations.semanticSegmentationOnUrl(modelId, modelVersion, imageUrl, semanticSegmentationOptions)
    }
}