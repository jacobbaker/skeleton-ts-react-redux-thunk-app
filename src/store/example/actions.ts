import { Action } from "../common/types";
import { ExampleActions, ExampleData } from "./types";

export const fetchExampleRequest = (): Action => ({
  type: ExampleActions.FETCH_EXAMPLE_REQUEST
});

export const fetchExampleSuccess = (data: Array<ExampleData>): Action => ({
  type: ExampleActions.FETCH_EXAMPLE_SUCCESS,
  payload: {
    data
  }
});

export const fetchExampleFailure = (): Action => ({
  type: ExampleActions.FETCH_EXAMPLE_FAILURE,
  error: true
});
