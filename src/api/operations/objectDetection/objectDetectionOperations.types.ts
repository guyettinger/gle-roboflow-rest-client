import { ImageInformation, ObjectDetectionPredictionInformation } from "../../types";

export interface ObjectDetectionOptions {
    image?: string
    classes?: string
    overlap?: number
    confidence?: number
    stroke?: number
    labels?: boolean
    format?: string
}

export interface ObjectDetectionResponse {
    predictions: ObjectDetectionPredictionInformation[]
    image: ImageInformation
}