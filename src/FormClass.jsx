import React, { Component } from "react";

export default class Form extends Component {
  initialState = {
    title: "",
    year: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { title, year } = this.state;

    return (
      <form onSubmit={this.submitForm}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          id="name"
          value={title}
          onChange={this.handleChange}
        />
        <label htmlFor="year">year</label>
        <input
          type="text"
          name="year"
          id="year"
          value={year}
          onChange={this.handleChange}
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}
