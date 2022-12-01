import React, { useState } from "react";

function ShortForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (event) => {
    event.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(data);
  };

  return (
    <div className="shadow-2xl py-5 w-72 rounded-lg flex items-center">
      <form className="mx-5 space-y-3" onSubmit={submit}>
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="border-2 border-gray-300 outline-none rounded-lg h-8"
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="border-2 border-gray-300 outline-none rounded-lg h-8"
            onBlur={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-2 border-gray-300 outline-none rounded-lg h-8"
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-2 border-gray-300 outline-none rounded-lg h-8"
            onBlur={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-sky-700 text-white px-4 py-1 rounded-lg w-20"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ShortForm;
