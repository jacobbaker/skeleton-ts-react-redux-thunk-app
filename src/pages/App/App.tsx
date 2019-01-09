import * as React from "react";
import { returntypeof } from "react-redux-typescript";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { State } from "../../store";
import ExampleDataContainer from "../../containers/Example/ExampleDataContainer";

class App extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <ExampleDataContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({}, dispatch);
};

const mapStateToProps = (state: State) => {
  return {};
};

const stateProps = returntypeof(mapStateToProps);
const dispatchProps = returntypeof(mapDispatchToProps);

type Props = typeof stateProps & typeof dispatchProps;

export default connect<typeof stateProps, typeof dispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(App);
