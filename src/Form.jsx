import React, { useState, useEffect } from "react";

export default function Form({ handleSubmit, list }) {
  const initialForm = {
    id: null,
    title: "",
    year: "",
  };

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (Object.keys(list).length !== 0) {
      setForm(list);
    }
  }, [list]);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    handleSubmit(form);
    setForm(initialForm);
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">title</label>
      <input
        type="text"
        name="title"
        id="name"
        onChange={handleChange}
        value={form.title}
      />
      <label htmlFor="year">year</label>
      <input
        type="number"
        name="year"
        id="year"
        onChange={handleChange}
        value={form.year}
      />
      <button type="submit">submit</button>
    </form>
  );
}
