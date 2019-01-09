import {
  fetchExampleRequest,
  fetchExampleSuccess,
  fetchExampleFailure
} from "./actions";

export const fetchExample = () => (dispatch: Function) => {
  dispatch(fetchExampleRequest());

  setTimeout(() => {
    fetch("/data.json")
      .then(response => response.json())
      .then(data => {
        dispatch(fetchExampleSuccess(data));
      })
      .catch(err => {
        dispatch(fetchExampleFailure());
      });
  }, 2000);
};
