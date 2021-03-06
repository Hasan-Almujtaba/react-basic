import React from "react";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Year</th>
        <th>Action</th>
      </tr>
    </thead>
  );
}

function TableBody({ tableData, remove, detail }) {
  const data = tableData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.year}</td>
        <td>
          <button onClick={() => detail(index)}>Edit</button>
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
}

export default function Table({ tableData, remove, detail }) {
  return (
    <table>
      <TableHeader />
      <TableBody tableData={tableData} remove={remove} detail={detail} />
    </table>
  );
}
