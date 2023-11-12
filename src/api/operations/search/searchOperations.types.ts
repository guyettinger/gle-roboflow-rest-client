export interface SearchOptions {
    // when provided, provides results sorted by semantic similarity
    like_image?: string

    // when provided, provides results sorted by semantic similarity
    prompt?: string

    // defaults to 0
    offset?: number

    // default to 50 (max: 250)
    limit?: number

    // when present, filters images that have the provided tag
    tag?: string

    // when present, filters images that have the provided class name
    class_name?: string

    // when present, filters images that are in the provided project
    in_dataset?: boolean

    // when present, returns only images that are in any batch
    batch?: boolean

    // when present, returns only images present in the provided batch
    batch_id?: string

    // specify the fields to return, defaults to ["id", "created"]
    // options are ["id", "name", "annotations", "labels", "split", "tags", "owner", "embedding", "created"]
    fields?: string[]
}

export interface SearchResult {
    id?: string
    name?: string
    owner?: string
    created?: number
    annotations?: {
        count: number
        classes: { [key: string]: number }
    },
    labels?: string[]
    tags?: string[]
    split?: string
    embedding?: number[]
}

export interface SearchResponse {
    offset: number
    total: number
    results: SearchResult[]
}