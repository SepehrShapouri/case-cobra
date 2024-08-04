
import React from "react";
import { login, signup } from "../actions";

async function page() {
  return (
    <form action={login}>
      <label htmlFor="username">username</label>
      <input name="username" id="email" />
      <br />
      <label htmlFor="password">Password</label>
      <input name="password" id="password" />
      <br />
      <button type="submit">continue</button>
    </form>
  );
}

export default page;
