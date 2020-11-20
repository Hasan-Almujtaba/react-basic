import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Table from "./Table";

class App extends Component {
  state = {
    lists: [
      {
        title: "Gosic",
        year: "2012",
      },
      {
        title: "Bible black",
        year: "2001",
      },
      {
        title: "Otome Dori",
        year: "2013",
      },
    ],
    list: {},
  };

  remove = (index) => {
    const { lists } = this.state;

    this.setState({
      lists: lists.filter((list, i) => {
        return i !== index;
      }),
    });
  };

  detail = (index) => {
    const { lists } = this.state;

    const data = lists[index];
    data.id = index;
    this.setState({ list: data });
  };

  handleSubmit = (list) => {
    if (list.id !== null) {
      const { lists } = this.state;
      lists[list.id] = list;

      this.setState({ lists: lists });
      this.setState({ list: {} });
    } else {
      this.setState({ lists: [...this.state.lists, list] });
    }
  };

  render() {
    const { lists } = this.state;
    const { list } = this.state;

    return (
      <div className="container">
        <h1>React Basic</h1>
        <p>add new anime list to table</p>
        <Table tableData={lists} remove={this.remove} detail={this.detail} />
        <Form handleSubmit={this.handleSubmit} list={list} />
      </div>
    );
  }
}

export default App;
