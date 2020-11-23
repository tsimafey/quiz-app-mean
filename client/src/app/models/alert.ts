export class Alert {
    id: string;
    type: AlertType;
    message: string;
    autoclose: boolean;
    keapAfterRouteChange: boolean;
    fase: boolean;

    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}