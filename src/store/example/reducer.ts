import { Reducer } from "redux";
import { ExampleState, ExampleActions } from "./types";

const initialState: ExampleState = {
  data: [],
  isFetching: false
};

const reducer: Reducer<ExampleState> = (state = initialState, action) => {
  switch (action.type) {
    case ExampleActions.FETCH_EXAMPLE_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case ExampleActions.FETCH_EXAMPLE_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        data: action.payload.data
      };
    }
    case ExampleActions.FETCH_EXAMPLE_FAILURE: {
      return {
        ...state,
        isFetching: false,
        data: undefined
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as exampleReducer };
