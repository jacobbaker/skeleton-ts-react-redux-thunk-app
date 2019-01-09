import * as React from "react";
import { ExampleData } from "../../store/example/types";

export interface ExampleDataItemComponentProps {
  data: ExampleData;
}

export class ExampleDataItemComponent extends React.Component<
  ExampleDataItemComponentProps,
  {}
> {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.title}</td>
        <td>{this.props.data.description}</td>
      </tr>
    );
  }
}
