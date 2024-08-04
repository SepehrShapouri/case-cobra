
import React from "react";
import { signup } from "../actions";

async function page() {
  return (
    <form action={signup}>
      <label htmlFor="email">Email</label>
      <input name="email" id="email" />
      <br />
      <label htmlFor="username">Username</label>
      <input name="username" id="username" />
      <br />
      <label htmlFor="password">Password</label>
      <input name="password" id="password" />
      <br />
      <button type="submit">continue</button>
    </form>
  );
}

export default page;
