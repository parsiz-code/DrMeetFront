export interface IResBase<T>{
    data: T | null
    errors: string[] | null
    message: string | null
    statusCode: number
}

