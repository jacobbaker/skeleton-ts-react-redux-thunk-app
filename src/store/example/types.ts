export interface ExampleData {
  id: number;
  title: string;
  description: string;
}

export enum ExampleActions {
  FETCH_EXAMPLE_REQUEST = "@@example/FETCH_EXAMPLE_REQUEST",
  FETCH_EXAMPLE_SUCCESS = "@@example/FETCH_EXAMPLE_SUCCESS",
  FETCH_EXAMPLE_FAILURE = "@@example/FETCH_EXAMPLE_FAILURE"
}

export interface ExampleState {
  readonly isFetching: boolean;
  readonly data: Array<ExampleData>;
}
