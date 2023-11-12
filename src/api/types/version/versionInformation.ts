import { PreprocessingInformation } from "../preprocessing";
import { AugmentationInformation } from "../augmentation";
import { TrainingInformation } from "../training";
import { ModelTrainingInformation } from "../modelTraining";
import { ModelInformation } from "../model";

export interface VersionInformation {
    id: string
    name: string
    created: number
    images: number
    splits: { [key: string]: number }
    model: ModelInformation
    preprocessing: PreprocessingInformation
    augmentation: AugmentationInformation
    exports: string[]
    train: TrainingInformation
    models: { [key: string]: ModelTrainingInformation }
}