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
import {
    DatasetUploadAnnotationResponse,
    DatasetUploadImageResponse
} from "./operations/dataset/datasetOperations.types";

const apiKey = ''
const workspaceId = 'guy-ettinger-c9esn'
const projectId = 'hard-hat-sample-w8nmd'
const versionId = "2"
const exportId = "voc"
const jobId = "DYrtPC8aXUJMlWqPW5Kh"
const imageDataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
const imageName = "image.png"
const imageId = "IKlodUb6OjBLEx67gdnC"
const annotationName = "annotation.xml"
const annotationData =
    "<annotation>" +
        "<folder></folder>" +
        "<filename>image.png</filename>" +
        "<path>image.png</path>" +
        "<source>" +
            "<database>Unspecified</database>" +
        "</source>" +
        "<size>" +
            "<width>5</width>" +
            "<height>5</height>" +
            "<depth>3</depth>" +
        "</size>" +
        "<segmented>0</segmented>" +
        "<object>" +
            "<name>helmet</name>" +
            "<pose>Unspecified</pose>" +
            "<truncated>0</truncated>" +
            "<difficult>0</difficult>" +
            "<occluded>0</occluded>" +
            "<bndbox>" +
                "<xmin>1</xmin>" +
                "<xmax>4</xmax>" +
                "<ymin>1</ymin>" +
                "<ymax>4</ymax>" +
             "</bndbox>" +
         "</object>" +
    "</annotation>"
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
                roboflowRestApi.uploadImage(projectId, imageName, imageBlob).then((datasetUploadImageResponse: DatasetUploadImageResponse) => {
                    console.log(JSON.stringify(datasetUploadImageResponse, null, 2))
                    expect(datasetUploadImageResponse).not.toBeNull()
                    done()
                })
            })
        })
    })

    test('Should upload Annotation', (done) => {
        roboflowRestApi.uploadAnnotation(projectId, imageId, annotationName, annotationData, {overwrite: true}).then((datasetUploadAnnotationResponse: DatasetUploadAnnotationResponse) => {
            console.log(JSON.stringify(datasetUploadAnnotationResponse, null, 2))
            expect(datasetUploadAnnotationResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    })
})