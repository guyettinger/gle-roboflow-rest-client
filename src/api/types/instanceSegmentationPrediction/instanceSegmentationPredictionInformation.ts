import { Point } from "../point";

export interface InstanceSegmentationPredictionInformation {
    x: number
    y: number
    width: number
    height: number
    class: string
    confidence: number
    points: Point[]
}