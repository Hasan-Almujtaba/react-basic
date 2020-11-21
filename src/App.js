import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Table from "./Table";

export default function App() {
  const [lists, setLists] = useState([]);
  const [list, setList] = useState({});

  const remove = (index) => {
    const updatedList = lists.filter((list, i) => {
      return i !== index;
    });

    setLists(updatedList);
  };

  const detail = (index) => {
    const data = lists[index];
    data.id = index;
    setList(data);
  };

  const handleSubmit = (list) => {
    if (list.id !== null) {
      const newLists = [...lists];
      newLists[list.id] = list;

      setLists(newLists);
      setList({});
    } else {
      setLists(lists.concat(list));
    }
  };

  return (
    <div className="container">
      <h1>React Basic</h1>
      <p>add new anime list to table</p>
      <Table tableData={lists} remove={remove} detail={detail} />
      <Form handleSubmit={handleSubmit} list={list} />
    </div>
  );
}
