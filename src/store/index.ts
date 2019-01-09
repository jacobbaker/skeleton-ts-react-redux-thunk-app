import { exampleReducer } from "./example/reducer";
import { ExampleState } from "./example/types";

import { combineReducers } from "redux";

export interface State {
  example: ExampleState;
}

export default combineReducers<State>({ example: exampleReducer });
