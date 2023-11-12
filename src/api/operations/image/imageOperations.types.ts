export interface UploadImageOptions {
    batch?: string
    split?: string
    concurrent?: number
}

export interface UploadImageResponse {
    success?: boolean
    duplicate?: boolean
    id: string
}