/*
    1. Create a new Vite React Project

    2. Create a ControlledForm.jsx file with a
       ControlledForm component and export it

    3. Make ControlledForm return:
       - text <input> for a 'name'
       - text <input> for an 'email'
       - number <input> for an 'age'
       - submit button
       Wrap all of the above in a <form> element and
       give them each a relevant 'name' attribute

    4. Create a reducer function and as well as an initial
       state variable that is an object like so:
       const initialState = { name: '', email: '', age: '' }

    5. How would you use useReducer and everything above to
       hook up the form's input values to change as you type
       in them and the values of all 3 inputs to be logged
       out to the console when you click submit?

    6. Replace the <App /> in main.jsx with your ControlledForm
       component and test that it works in your Browser

    BONUS* How would you clear the form on submit?
*/

import React, { useReducer } from "react";

const initialState = { name: "", email: "", age: "" };

const formReducer = (currentState, action) => {
  //   switch (action.type) {
  //     case "name":
  //       return { ...currentState, [action.type]: action.payload };

  //     case "email":
  //       return { ...currentState, [action.type]: action.payload };
  //     case "age":
  //       return { ...currentState, [action.type]: action.payload };

  //     default:
  //       return currentState;
  //   }\\{ ...currentState, [action.type]: action.payload }

  return { ...currentState, [action.type]: action.payload };
};

const Three = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      Three{" "}
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: e.target.name,
                payload: e.target.value,
              })
            }
            placeholder="enter name"
          />
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: e.target.name,
                payload: e.target.value,
              })
            }
            placeholder="enter email"
          />
          <input
            type="number"
            name="age"
            value={state.age}
            onChange={(e) =>
              dispatch({
                type: e.target.name,
                payload: e.target.value,
              })
            }
            placeholder="enter ege"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Three;
