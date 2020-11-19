import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Year</th>
        <th></th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.tableData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.year}</td>
        <td>
          <button onClick={() => props.remove(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default class Table extends Component {
  render() {
    const { tableData, remove } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody tableData={tableData} remove={remove} />
      </table>
    );
  }
}
