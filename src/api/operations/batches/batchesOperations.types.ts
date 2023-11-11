import { JobInformation } from "../../types";

export interface BatchResponse extends JobInformation {

}

export interface BatchesResponse {
    batches: JobInformation[]
}