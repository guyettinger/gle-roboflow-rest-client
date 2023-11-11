import { PreprocessingInformation } from "../preprocessing";
import { AugmentationInformation } from "../augmentation";

export interface VersionInformation {
    id: string
    name: string
    created: number
    images: number
    splits: { [key: string]: number }
    preprocessing: PreprocessingInformation
    augmentation: AugmentationInformation
    exports: string[]
}