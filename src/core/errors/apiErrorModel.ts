import { plainToClassFromExist } from 'class-transformer';

export class ApiErrorModel {
    timestamp?: string;
    status?: number;
    error?: string;
    message?: string;
    path?: string;

    public static createErrorModel(error: any): ApiErrorModel {
        return plainToClassFromExist(new ApiErrorModel(), error);
    }
}
