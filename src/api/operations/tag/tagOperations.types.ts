export enum TagOperationTypes {
    Add = "add",
    Remove = "remove",
    Set = "set"
}

export interface TagOptions {
    // options are ["add", "remove", "set"]
    operation: TagOperationTypes,

    // array of strings of the tags
    tags: string[],
}

export interface TagResponse {
    success?: boolean
}