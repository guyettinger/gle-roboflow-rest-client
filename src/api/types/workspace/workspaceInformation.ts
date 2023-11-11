import { ProjectInformation } from "../project";

export interface WorkspaceInformation {
    name: string
    url: string
    members: number
    projects: ProjectInformation[]
}