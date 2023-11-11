import { JobInformation } from "../../types";

export interface JobResponse extends JobInformation {

}

export interface JobsResponse {
    jobs: JobInformation[]
}
