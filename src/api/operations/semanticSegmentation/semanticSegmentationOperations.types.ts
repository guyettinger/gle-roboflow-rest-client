import { ImageInformation } from "../../types";

export interface SemanticSegmentationOptions {
    image?: string
    confidence?: number
}

export interface SemanticSegmentationResponse {
    segmentation_mask: string
    class_map: { [key: string]: string }
    image: ImageInformation
}