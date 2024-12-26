import React, { useState } from "react";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <h1>Simple Form </h1>
      <form action="onSubmit">
        <label>Enter Your First name </label>
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
          onChange={handleChange}
        />
        <br />
        <label>Enter Your Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
        />
        <br />
        <label>Enter Your Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <label>Enter Your PassWord</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <input type="submit"  onClick={handleSubmit}/>
      </form>
    </>
  );
};

export default SimpleForm;
