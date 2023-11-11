export interface AugmentationBlurInformation {
    pixels: number
}

export interface AugmentationBrightnessInformation {
    brighten: boolean
    percent: number
    darken: boolean
}

export interface AugmentationFlipInformation {
    horizontal: boolean
    vertical: boolean
}

export interface AugmentationNinetyInformation {
    clockwise: boolean
    "upside-down": boolean
    "counter-clockwise": boolean
}

export interface AugmentationCropInformation {
    min: number
    percent: number
}

export interface AugmentationRotateInformation {
    degrees: number
}

export interface AugmentationRGrayscaleInformation {
    percent: number
}

export interface AugmentationHueInformation {
    degrees: number
}

export interface AugmentationSaturationInformation {
    percent: number
}

export interface AugmentationExposureInformation {
    percent: number
}

export interface AugmentationCutoutInformation {
    count: number
    percent: number
}

export interface AugmentationImageInformation {
    versions: number
}

export interface AugmentationInformation {
    image?: AugmentationImageInformation
    blur?: AugmentationBlurInformation
    brightness?: AugmentationBrightnessInformation
    flip?: AugmentationFlipInformation
    ninety?: AugmentationNinetyInformation
    crop?: AugmentationCropInformation
    rotate?: AugmentationRotateInformation
    rgrayscale?: AugmentationRGrayscaleInformation
    hue?: AugmentationHueInformation
    saturation?: AugmentationSaturationInformation
    exposure?: AugmentationExposureInformation
    cutout?: AugmentationCutoutInformation
}