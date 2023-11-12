import { ImageInformation, ObjectDetectionPredictionInformation } from "../../types";

export interface ObjectDetectionResponse {
    predictions: ObjectDetectionPredictionInformation[]
    image: ImageInformation
}