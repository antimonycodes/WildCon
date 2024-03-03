import React, { useState } from "react";
import Validation from "../components/Validation";

const Explore = () => {
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const newObj = { ...values, [event.target.name]: event.target.values };
    setValues(newObj);
  };

  const handleValidation = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className=" bg-slate-600 flex items-center justify-center w-full h-screen">
      <div className=" mt-5 w-[40%]">
        <h1 className=" text-center">REGister</h1>
        <form className=" border p-3" onSubmit={handleValidation}>
          <div className=" mb-4 flex items-center ">
            <label htmlFor="username" className=" basis-[20%]">
              Name:
            </label>
            <input
              type="text"
              placeholder=" Enter Name"
              className=" basis-[70%]
              bg-transparent border 
              rounded-2xl py-1 outline-none
               text-white px-1"
              onChange={handleInput}
            />
            {errors.name && <p className=" text-red-700">errors.name</p>}
          </div>
          <div className=" mb-4 flex items-center">
            <label htmlFor="username" className=" basis-[20%]">
              Username
            </label>
            <input
              type="text"
              placeholder=" Enter username"
              className=" basis-[70%]
              bg-transparent border 
              rounded-2xl py-1 outline-none
               text-white px-1"
              onChange={handleInput}
            />
          </div>
          <div className=" mb-4 flex items-center">
            <label htmlFor="username" className=" basis-[20%]">
              Email
            </label>
            <input
              type="Email"
              placeholder=" Enter Email"
              className=" basis-[70%]
              bg-transparent border 
              rounded-2xl py-1 outline-none
               text-white px-1"
              onChange={handleInput}
            />
          </div>
          {errors.email && (
            <p className=" text-red-700 text-center">errors.name</p>
          )}

          <div className=" mb-4 flex items-center">
            <label htmlFor="username" className=" basis-[20%]">
              Username
            </label>
            <input
              type="password"
              placeholder=" Enter password"
              className=" basis-[70%]
              bg-transparent border 
              rounded-2xl py-1 outline-none
               text-white px-1"
              onChange={handleInput}
            />
            {errors.password && <p className=" text-red-700">errors.name</p>}
          </div>
          <div className=" mt-3">
            <button className=" w-full bg-green-600">Validate</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Explore;
