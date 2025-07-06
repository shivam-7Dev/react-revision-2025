/*
    1. Create a new Vite React project

    2. Create an Form.jsx with an Form component
       that is exported

    3. Inside Form, return a <form> with the following:
       - text input for a name
       - email input for an email
       - number input for an age
       - button with type submit and text 'Submit'
       Then, add an empty <p> tag below the <form>

    4. Find a way to use useRef such that when you submit
       the form, we display the form content in the <p>
       tag below the form in any format you like so we can
       see the information entered (and clear the form)

    5. Replace the <App /> in main.jsx with your Form
       component and test that it works in your Browser

    HINT* Check how the FormData Web API on MDN
*/

import React, { useState } from "react";
import { useRef } from "react";

const Three = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const handlSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    // Method 1: Using FormData API (Recommended)
    const formDataAPI = new FormData(formRef.current);
    console.log({ formDataAPI });
    const newFormData = {};

    // Iterate over FormData entries
    for (let [key, value] of formDataAPI.entries()) {
      newFormData[key] = value;
    }

    setFormData(newFormData);

    // Clear the form
    formRef.current.reset();
  };

  // Method 2: Using form.elements
  const handlSubmit2 = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const newFormData = {};

    // Iterate over form elements
    for (let element of form.elements) {
      if (element.name) {
        newFormData[element.name] = element.value;
      }
    }

    setFormData(newFormData);
    form.reset();
  };

  // Method 3: Direct access by name
  const handlSubmit3 = (e) => {
    e.preventDefault();

    const form = formRef.current;

    setFormData({
      name: form.elements.name.value,
      email: form.elements.email.value,
      number: form.elements.number.value,
    });

    form.reset();
  };
  return (
    <div>
      Three
      <form onSubmit={handlSubmit} ref={formRef}>
        <input type="text" name="name" placeholder="enter name" />
        <input type="email" name="email" placeholder="enter email" />
        <input type="number" name="number" placeholder="enter number" />
        <button type="submit">submit</button>
      </form>
      {formData && (
        <p>
          name is :{formData.name} number is:{formData.number} email is :
          {formData.email}
        </p>
      )}
    </div>
  );
};

export default Three;
