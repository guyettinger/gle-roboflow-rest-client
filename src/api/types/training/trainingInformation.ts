import { TrainingResult } from "./trainingResult";

export interface TrainingInformation {
    status: string
    results: {
        class_map: { [key: string]: TrainingResult[] }
    }
}