import { describe, expect, test } from '@jest/globals';
import { RoboflowRestApi } from "./roboflowRestApi";
import {
    BatchesResponse,
    ExportResponse, JobsResponse,
    ProjectResponse,
    RootResponse,
    VersionResponse,
    WorkspaceResponse
} from "./operations";
import { JobResponse } from "./operations/jobs/jobsOperations.types";

const apiKey = ''
const workspaceId = 'guy-ettinger-c9esn'
const projectId = 'hard-hat-sample-w8nmd'
const versionId = "2"
const exportId = "voc"
const jobId = "DYrtPC8aXUJMlWqPW5Kh"
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
})