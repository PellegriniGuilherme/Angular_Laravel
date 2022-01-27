export class Api<T> {
    data: T|any;
    message?: string;
    status: 'Success' | 'Error' | undefined;
}
