import React, { useState } from "react";

const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, password);

    try {
      let response = await fetch("http://cloudbox.test/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      console.log(response);

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error("Login failed:", error);
      //   alert("Login failed. Please try again later.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (loggedIn) {
    return (
      <div>
        <h2>Welcome, {email}!</h2>
        <button onClick={handleLogout}>Loout</button>
      </div>
    );
  } else {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
        <div className="w-fit h-fit flex items-center justify-center p-8">
          <form
            // onSubmit={handleLogin}
            className="w-[400px] h-[400px] border flex flex-col gap-5 bg-red-100 pt-20 px-5"
          >
            <input
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
              className="border h-10"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border h-10"
            />
            <button
              onClick={handleLogin}
              className="bg-blue-200 border rounded-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default Login;
