import { ImageInformation, MultiLabelClassificationPrediction, SingleLabelClassificationPrediction } from "../../types";

export interface ClassificationOptions {
    image?: string
    confidence?: number
}

export interface SingleLabelClassificationResponse {
    time: number
    image: ImageInformation,
    predictions: SingleLabelClassificationPrediction[]
    top: string
    confidence: number
    image_path: string
    prediction_type: string
}

export interface MultiLabelClassificationResponse {
    time: number
    image: ImageInformation,
    predictions: { [key: string]: MultiLabelClassificationPrediction }
    predicted_classes: string[]
    image_path: string
    prediction_type: string
}