import * as React from "react";
import { ExampleDataItemComponent } from "./ExampleDataItemComponent";
import { ExampleData } from "../../store/example/types";

export interface ExampleComponentProps {
  data: Array<ExampleData>;
}

export class ExampleDataTableComponent extends React.Component<
  ExampleComponentProps,
  {}
> {
  render() {
    console.log(this.props.data);
    let d = this.props.data.map((object, i) => (
      <ExampleDataItemComponent data={object} key={i} />
    ));

    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{d}</tbody>
      </table>
    );
  }
}
