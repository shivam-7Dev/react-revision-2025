/*
    1. Create a new Vite React Project

    2. Create a Form.jsx file to create a Form
       Component that you export within it

    3. Inside Form, create an 3 <input> text fields, one
       for first name, last name, and email. Create a 'submit'
       <button> below the inputs. Wrap the inputs and button inside
       a <form> element. Then, add an <h1> element below the
       <form> element (empty text to start)

    4. Make it so that when you type in to the 3 <input> elements
       and then click 'submit', the data for the 3 inputs gets
       displayed inside the <h1> element as text. You can format
       this text however you want, but make sure the page does not
       reload when you click 'submit'

    5. Import the Form component in to main.jsx and replace the
       <App /> with it and test that it works in the Browser

    BONUS* Can you think of a few ways you could do this?
*/
import React, { useState } from "react";

const Two = () => {
  const [form, setform] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
    console.log("Form Data:", form); // ✅ Access form data here
  };

  return (
    <div>
      Two
      <form action="" onSubmit={handleForm}>
        <input
          type="text"
          name="firstName"
          onChange={(e) => {
            setform({
              ...form,
              [e.target.name]: e.target.value,
            });
          }}
          value={form.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={(e) => {
            setform({
              ...form,
              [e.target.name]: e.target.value,
            });
          }}
          value={form.lastName}
        />
        <input
          type="text"
          name="email"
          onChange={(e) => {
            setform({
              ...form,
              [e.target.name]: e.target.value,
            });
          }}
          value={form.email}
        />
        <button type="submit">submit form</button>
      </form>
      <h1>
        Name: {form.firstName} {form.lastName}, Email: {form.email}
      </h1>
    </div>
  );
};

export default Two;
