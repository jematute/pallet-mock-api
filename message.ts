export interface ServerMessage {
    type: MessageType,
    message: string,
}

export enum MessageType {
    GETCASEDATA,
    GETALARMDATA,
}