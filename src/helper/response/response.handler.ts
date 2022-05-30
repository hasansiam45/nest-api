export const successhandler = (data: any, message: string) => {
    return {
        statusCode: 200,
        data: data || {},
        message: message || 'Success'
    };
}
export const errorhandler = (code: number, message: string) => {
    return {
        statusCode: code,
        message: message || 'Something went wrong!'
    };
}