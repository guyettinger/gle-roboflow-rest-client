export interface JobCreatedInformation {
    _seconds: number
    _nanoseconds: number
}

export interface JobInformation {
    owner: string
    approved: number
    createdBy: string
    sourceBatch: string
    annotated: number
    rejected: number
    labeler: string
    numImages: number
    status: string
    instructionsText: string
    name: string
    reviewer: string
    created: JobCreatedInformation
    project: string
    unannotated: number
    id: string
}