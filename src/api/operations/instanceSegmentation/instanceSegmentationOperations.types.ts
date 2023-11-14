import {
    InstanceSegmentationPredictionInformation,
} from "../../types";

export interface InstanceSegmentationOptions {
    image?: string
    confidence?: number
}

export interface InstanceSegmentationResponse {
    predictions: InstanceSegmentationPredictionInformation[]
}