export enum ProjectType {
    ObjectDetection = "object-detection",
    SingleLabelClassification = "single-label-classification",
    MultiLabelClassification = "multi-label-classification",
    InstanceSegmentation = "instance-segmentation",
    SemanticSegmentation = "semenatic-segmentation"
}

export enum ProjectLicenseType {
    PublicDomain = "Public Domain",
    MIT = "MIT",
    CC_BY_4 = "CC BY 4.0",
    BY_NC_SA_4 = "BY-NC-SA 4.0",
    OBdl_V1 = "OBdL v1.0",
    Private = "Private"
}

export interface ProjectCreationInformation {
    /**
     * name (string) - [Required] the name of the project
     */
    name: string
    /**
     * type (string) - [Required] the project type. Accepted values:
     *     - object-detection
     *     - single-label-classification
     *     - multi-label-classification
     *     - instance-segmentation
     *     - semenatic-segmentation
     */
    type: ProjectType
    /**
     * license (string) - Required for public workspaces unless the value is "Public". Accepted values:
     *     - Public Domain
     *     - MIT
     *     - CC BY 4.0
     *     - BY-NC-SA 4.0
     *     - OBdL v1.0
     *     - Private
     */
    license?: ProjectLicenseType
    /**
     * annotation (string, alphanumeric) - [Required] the name of the annotation group
     */
    annotation: string
    /**
     * group (string) - Id of the group to add this project to
     */
    group?: string
}