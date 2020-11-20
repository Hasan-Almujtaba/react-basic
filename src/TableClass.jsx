import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Year</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableBody = ({ tableData, remove }) => {
  const data = tableData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.year}</td>
        <td>
          <button onClick={() => remove(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  const noData = (
    <tr>
      <td colSpan="3" style={{ textAlign: "center", color: "grey" }}>
        No Data Available
      </td>
    </tr>
  );

  return <tbody>{tableData.length === 0 ? noData : data}</tbody>;
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
