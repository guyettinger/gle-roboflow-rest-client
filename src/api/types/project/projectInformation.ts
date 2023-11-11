import { AugmentationInformation } from "../augmentation/augmentationInformation";
import { IconInformation } from "../icon/iconInformation";
import { PreprocessingInformation } from "../preprocessing/preprocessingInformation";

export interface ProjectInformation {
    id: string
    type: string,
    name: string
    created: number
    updated: number
    images: number
    unannotated: number
    annotation: string
    versions: number
    public: boolean
    license: string,
    splits: { [key: string]: number }
    colors: { [key: string]: string },
    classes: { [key: string]: number }
    icon: IconInformation
    preprocessing: PreprocessingInformation
    augmentation: AugmentationInformation
}