import * as React from "react";
import { returntypeof } from "react-redux-typescript";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { State } from "../../store";
import { ExampleDataTableComponent } from "src/components/Example/ExampleDataTableComponent";
import { fetchExample } from "../../store/example/thunk";

class ExampleDataContainer extends React.Component<Props, State> {
  componentDidMount() {
    this.props.fetchExample();
  }

  render() {
    return (
      <div>
        {!this.props.isFetching && (
          <ExampleDataTableComponent data={this.props.data} />
        )}
        {this.props.isFetching && <span>Fetching data...</span>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ fetchExample }, dispatch);
};

const mapStateToProps = (state: State) => {
  return { data: state.example.data, isFetching: state.example.isFetching };
};

const stateProps = returntypeof(mapStateToProps);
const dispatchProps = returntypeof(mapDispatchToProps);

type Props = typeof stateProps & typeof dispatchProps;

export default connect<typeof stateProps, typeof dispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(ExampleDataContainer);
