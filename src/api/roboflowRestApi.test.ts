import { describe, expect, test } from '@jest/globals';
import { RoboflowRestApi } from "./roboflowRestApi";
import {
    BatchesResponse,
    ExportResponse,
    InstanceSegmentationResponse,
    JobResponse,
    JobsResponse,
    MultiLabelClassificationResponse,
    ObjectDetectionResponse,
    ProjectResponse,
    RootResponse,
    SearchOptions,
    SearchResponse,
    SemanticSegmentationResponse,
    SingleLabelClassificationResponse,
    TagOperationTypes,
    TagOptions,
    TagResponse,
    UploadAnnotationResponse,
    UploadImageResponse,
    VersionResponse,
    WorkspaceResponse,
} from "./operations";
import { RoboflowRestApiTestConfig } from "./roboflowRestApi.testconfig";
import { BlobUtilities } from "../core";

// test config
const apiKey = RoboflowRestApiTestConfig.apiKey
const workspaceId = RoboflowRestApiTestConfig.workspaceId
const projectId = RoboflowRestApiTestConfig.projectId
const versionId = RoboflowRestApiTestConfig.versionId
const exportId = RoboflowRestApiTestConfig.exportId
const jobId = RoboflowRestApiTestConfig.jobId
const imageDataUrl = RoboflowRestApiTestConfig.imageDataUrl
const imageUrl = RoboflowRestApiTestConfig.imageUrl
const imageName = RoboflowRestApiTestConfig.imageName
const imageId = RoboflowRestApiTestConfig.imageId
const annotationName = RoboflowRestApiTestConfig.annotationName
const annotationData = RoboflowRestApiTestConfig.annotationData

// test api
const roboflowRestApi = new RoboflowRestApi(apiKey)

describe('Roboflow Rest API', () => {
    test('Should get Root', (done) => {
        roboflowRestApi.getRoot().then((rootResponse: RootResponse) => {
            console.log(JSON.stringify(rootResponse, null, 2))
            expect(rootResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    })

    test('Should get Workspace', (done) => {
        roboflowRestApi.getWorkspace(workspaceId).then((workspaceResponse: WorkspaceResponse) => {
            console.log(JSON.stringify(workspaceResponse, null, 2))
            expect(workspaceResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    })

    test('Should get Project', (done) => {
        roboflowRestApi.getProject(workspaceId, projectId).then((projectResponse: ProjectResponse) => {
            console.log(JSON.stringify(projectResponse, null, 2))
            expect(projectResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    })

    test('Should get Version', (done) => {
        roboflowRestApi.getVersion(workspaceId, projectId, versionId).then((versionResponse: VersionResponse) => {
            console.log(JSON.stringify(versionResponse, null, 2))
            expect(versionResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    })

    test('Should get Export', (done) => {
        roboflowRestApi.getExport(workspaceId, projectId, versionId, exportId).then((exportResponse: ExportResponse) => {
            console.log(JSON.stringify(exportResponse, null, 2))
            expect(exportResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    })

    test('Should get Batches', (done) => {
        roboflowRestApi.getBatches(workspaceId, projectId).then((batchesResponse: BatchesResponse) => {
            console.log(JSON.stringify(batchesResponse, null, 2))
            expect(batchesResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    })

    test('Should get Jobs', (done) => {
        roboflowRestApi.getJobs(workspaceId, projectId).then((jobsResponse: JobsResponse) => {
            console.log(JSON.stringify(jobsResponse, null, 2))
            expect(jobsResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    })

    test('Should get Job', (done) => {
        roboflowRestApi.getJob(workspaceId, projectId, jobId).then((jobResponse: JobResponse) => {
            console.log(JSON.stringify(jobResponse, null, 2))
            expect(jobResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    })

    test('Should upload Image', (done) => {
        const imageBlob = BlobUtilities.dataURItoBlob(imageDataUrl)
        roboflowRestApi.uploadImage(projectId, imageName, imageBlob).then((datasetUploadImageResponse: UploadImageResponse) => {
            console.log(JSON.stringify(datasetUploadImageResponse, null, 2))
            expect(datasetUploadImageResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    })

    test('Should upload Image Form Data', (done) => {
        const imageBlob = BlobUtilities.dataURItoBlob(imageDataUrl)
        roboflowRestApi.uploadImageFormData(projectId, imageName, imageBlob).then((datasetUploadImageResponse: UploadImageResponse) => {
            console.log(JSON.stringify(datasetUploadImageResponse, null, 2))
            expect(datasetUploadImageResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
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

    test('Should Search', (done) => {
        const searchOptions: SearchOptions = {
            in_dataset: true,
            limit: 125,
            fields: ["id", "name", "annotations", "labels", "split", "tags", "owner", "created"]
        }
        roboflowRestApi.search(workspaceId, projectId, searchOptions).then((searchResponse: SearchResponse) => {
            console.log(JSON.stringify(searchResponse, null, 2))
            expect(searchResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    })

    test('Should add Tag', (done) => {
        const tagOptions: TagOptions = {
            operation: TagOperationTypes.Add,
            tags: ["test-tag"]
        }
        roboflowRestApi.tag(workspaceId, projectId, imageId, tagOptions).then((tagResponse: TagResponse) => {
            console.log(JSON.stringify(tagResponse, null, 2))
            expect(tagResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    })

    test('Should remove Tag', (done) => {
        const tagOptions: TagOptions = {
            operation: TagOperationTypes.Remove,
            tags: ["test-tag"]
        }
        roboflowRestApi.tag(workspaceId, projectId, imageId, tagOptions).then((tagResponse: TagResponse) => {
            console.log(JSON.stringify(tagResponse, null, 2))
            expect(tagResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    })

    test('Should run Object Detection on Blob', (done) => {
        const imageBlob = BlobUtilities.dataURItoBlob(imageDataUrl)
        roboflowRestApi.objectDetectionOnBlob(projectId, versionId, imageBlob).then((objectDetectionResponse: ObjectDetectionResponse) => {
            console.log(JSON.stringify(objectDetectionResponse, null, 2))
            expect(objectDetectionResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    }, 30000)

    test('Should run Object Detection on Url', (done) => {
        roboflowRestApi.objectDetectionOnUrl(projectId, versionId, imageUrl).then((objectDetectionResponse: ObjectDetectionResponse) => {
            console.log(JSON.stringify(objectDetectionResponse, null, 2))
            expect(objectDetectionResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    }, 30000)

    test('Should run Single Label Classification on Blob', (done) => {
        const imageBlob = BlobUtilities.dataURItoBlob(imageDataUrl)
        roboflowRestApi.singleLabelClassificationOnBlob(projectId, versionId, imageBlob).then((singleLabelClassificationResponse: SingleLabelClassificationResponse) => {
            console.log(JSON.stringify(singleLabelClassificationResponse, null, 2))
            expect(singleLabelClassificationResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    }, 30000)

    test('Should run Single Label Classification on Url', (done) => {
        roboflowRestApi.singleLabelClassificationOnUrl(projectId, versionId, imageUrl).then((singleLabelClassificationResponse: SingleLabelClassificationResponse) => {
            console.log(JSON.stringify(singleLabelClassificationResponse, null, 2))
            expect(singleLabelClassificationResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    }, 30000)

    test('Should run Multi Label Classification on Blob', (done) => {
        const imageBlob = BlobUtilities.dataURItoBlob(imageDataUrl)
        roboflowRestApi.multiLabelClassificationOnBlob(projectId, versionId, imageBlob).then((multiLabelClassificationResponse: MultiLabelClassificationResponse) => {
            console.log(JSON.stringify(multiLabelClassificationResponse, null, 2))
            expect(multiLabelClassificationResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    }, 30000)

    test('Should run Multi Label Classification on Url', (done) => {
        roboflowRestApi.multiLabelClassificationOnUrl(projectId, versionId, imageUrl).then((multiLabelClassificationResponse: MultiLabelClassificationResponse) => {
            console.log(JSON.stringify(multiLabelClassificationResponse, null, 2))
            expect(multiLabelClassificationResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    }, 30000)

    test('Should run Instance Segmentation on Blob', (done) => {
        const imageBlob = BlobUtilities.dataURItoBlob(imageDataUrl)
        roboflowRestApi.instanceSegmentationOnBlob(projectId, versionId, imageBlob).then((instanceSegmentationResponse: InstanceSegmentationResponse) => {
            console.log(JSON.stringify(instanceSegmentationResponse, null, 2))
            expect(instanceSegmentationResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    }, 30000)

    test('Should run Instance Segmentation on Url', (done) => {
        roboflowRestApi.instanceSegmentationOnUrl(projectId, versionId, imageUrl).then((instanceSegmentationResponse: InstanceSegmentationResponse) => {
            console.log(JSON.stringify(instanceSegmentationResponse, null, 2))
            expect(instanceSegmentationResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    }, 30000)

    test('Should run Semantic Segmentation on Blob', (done) => {
        const imageBlob = BlobUtilities.dataURItoBlob(imageDataUrl)
        roboflowRestApi.semanticSegmentationOnBlob(projectId, versionId, imageBlob).then((semanticSegmentationResponse: SemanticSegmentationResponse) => {
            console.log(JSON.stringify(semanticSegmentationResponse, null, 2))
            expect(semanticSegmentationResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    }, 30000)

    test('Should run Semantic Segmentation on Url', (done) => {
        roboflowRestApi.semanticSegmentationOnUrl(projectId, versionId, imageUrl).then((semanticSegmentationResponse: SemanticSegmentationResponse) => {
            console.log(JSON.stringify(semanticSegmentationResponse, null, 2))
            expect(semanticSegmentationResponse).not.toBeNull()
            done()
        }).catch((reason) => {
            console.log(JSON.stringify(reason, null, 2))
            done()
        })
    }, 30000)

})