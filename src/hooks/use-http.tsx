import { useReducer } from "react";
import { HttpState, HttpAction, RequestState } from "../module/http";

function httpReducer(state: HttpState, action: HttpAction): HttpState {
  return (
    {
      SEND: { data: null, error: null, status: RequestState.pending },
      SUCCESS: {
        data: action.responseData,
        error: null,
        status: RequestState.completed,
      },
      ERROR: {
        data: null,
        error: action.errorMessage,
        status: RequestState.completed,
      },
    }[action.type] || state
  );
}

function useHttp(requestFunction: any, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? RequestState.pending : RequestState.noAction,
    data: null,
    error: null,
  });

  const sendRequest = async (requestData: any) => {
    dispatch({ type: "SEND" });
    try {
      const responseData = await requestFunction(requestData);
      dispatch({ type: "SEND", responseData });
    } catch (err: any) {
      dispatch({
        type: "ERROR",
        errorMessage: err.message || "Request failed.",
      });
    }
  };

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
