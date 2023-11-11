
export interface DatasetUploadImageOptions {
    batch?: string
    split?: string
    concurrent?: number
}
export interface DatasetUploadImageResponse {
    success?: boolean
    duplicate?: boolean
    id: string
}

export interface DatasetUploadAnnotationResponse {
}