export type ActionType = "SEND" | "SUCCESS" | "ERROR";
export enum RequestState {
  "noAction",
  "pending",
  "completed",
}

export interface HttpAction {
  type: ActionType;
  responseData?: any;
  errorMessage?: string;
}

export interface HttpState {
  data: any;
  error: any;
  status: RequestState;
}
