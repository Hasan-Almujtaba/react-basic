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
  };

  remove = (index) => {
    const { lists } = this.state;

    this.setState({
      lists: lists.filter((list, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (list) => {
    this.setState({ lists: [...this.state.lists, list] });
  };

  render() {
    const { lists } = this.state;

    return (
      <div className="container">
        <h1>React Basic</h1>
        <p>add new anime list to table</p>
        <Table tableData={lists} remove={this.remove} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
