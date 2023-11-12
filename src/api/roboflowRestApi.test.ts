import { describe, expect, test } from '@jest/globals';
import { RoboflowRestApi } from "./roboflowRestApi";
import {
    BatchesResponse,
    ExportResponse,
    JobResponse,
    JobsResponse,
    ProjectResponse,
    RootResponse,
    UploadAnnotationResponse,
    UploadImageResponse,
    VersionResponse,
    WorkspaceResponse,
} from "./operations";
import { RoboflowRestApiTestConfig } from "./roboflowRestApi.testconfig";

// test config
const apiKey = RoboflowRestApiTestConfig.apiKey
const workspaceId = RoboflowRestApiTestConfig.workspaceId
const projectId = RoboflowRestApiTestConfig.projectId
const versionId = RoboflowRestApiTestConfig.versionId
const exportId = RoboflowRestApiTestConfig.exportId
const jobId = RoboflowRestApiTestConfig.jobId
const imageDataUrl = RoboflowRestApiTestConfig.imageDataUrl
const imageName = RoboflowRestApiTestConfig.imageName
const imageId = RoboflowRestApiTestConfig.imageId
const annotationName = RoboflowRestApiTestConfig.annotationName
const annotationData = RoboflowRestApiTestConfig.annotationData

// test api
const roboflowRestApi = new RoboflowRestApi('https://api.roboflow.com', apiKey)

describe('Roboflow Rest API', () => {
    test('Should get Root', (done) => {
        roboflowRestApi.getRoot().then((rootResponse: RootResponse) => {
            console.log(JSON.stringify(rootResponse, null, 2))
            expect(rootResponse).not.toBeNull()
            done()
        })
    })

    test('Should get Workspace', (done) => {
        roboflowRestApi.getWorkspace(workspaceId).then((workspaceResponse: WorkspaceResponse) => {
            console.log(JSON.stringify(workspaceResponse, null, 2))
            expect(workspaceResponse).not.toBeNull()
            done()
        })
    })

    test('Should get Project', (done) => {
        roboflowRestApi.getProject(workspaceId, projectId).then((projectResponse: ProjectResponse) => {
            console.log(JSON.stringify(projectResponse, null, 2))
            expect(projectResponse).not.toBeNull()
            done()
        })
    })

    test('Should get Version', (done) => {
        roboflowRestApi.getVersion(workspaceId, projectId, versionId).then((versionResponse: VersionResponse) => {
            console.log(JSON.stringify(versionResponse, null, 2))
            expect(versionResponse).not.toBeNull()
            done()
        })
    })

    test('Should get Export', (done) => {
        roboflowRestApi.getExport(workspaceId, projectId, versionId, exportId).then((exportResponse: ExportResponse) => {
            console.log(JSON.stringify(exportResponse, null, 2))
            expect(exportResponse).not.toBeNull()
            done()
        })
    })

    test('Should get Batches', (done) => {
        roboflowRestApi.getBatches(workspaceId, projectId).then((batchesResponse: BatchesResponse) => {
            console.log(JSON.stringify(batchesResponse, null, 2))
            expect(batchesResponse).not.toBeNull()
            done()
        })
    })

    test('Should get Jobs', (done) => {
        roboflowRestApi.getJobs(workspaceId, projectId).then((jobsResponse: JobsResponse) => {
            console.log(JSON.stringify(jobsResponse, null, 2))
            expect(jobsResponse).not.toBeNull()
            done()
        })
    })

    test('Should get Job', (done) => {
        roboflowRestApi.getJob(workspaceId, projectId, jobId).then((jobResponse: JobResponse) => {
            console.log(JSON.stringify(jobResponse, null, 2))
            expect(jobResponse).not.toBeNull()
            done()
        })
    })

    test('Should upload Image', (done) => {
        fetch(imageDataUrl).then((r) => {
            r.blob().then((imageBlob) => {
                roboflowRestApi.uploadImage(projectId, imageName, imageBlob).then((datasetUploadImageResponse: UploadImageResponse) => {
                    console.log(JSON.stringify(datasetUploadImageResponse, null, 2))
                    expect(datasetUploadImageResponse).not.toBeNull()
                    done()
                })
            })
        })
    })

    test('Should upload Annotation', (done) => {
        roboflowRestApi.uploadAnnotation(projectId, imageId, annotationName, annotationData, {overwrite: true}).then((datasetUploadAnnotationResponse: UploadAnnotationResponse) => {
            console.log(JSON.stringify(datasetUploadAnnotationResponse, null, 2))
            expect(datasetUploadAnnotationResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    })
})