import { useState } from 'react';

function NewBoxForm({ addBox }) {
  const initialState = {
    height: "",
    width: "",
    backgroundColor: ""
  };

  const [formData, , setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  return (
    <div>
      <form>
        <label></label>
        <input></input>

        <label></label>
        <input></input>

        <label></label>
        <input></input>
      </form>
    </div>
  );
}

