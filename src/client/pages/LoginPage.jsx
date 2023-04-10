import { Link, useHistory } from 'react-router-dom'
import { useState } from "react";
import { errorMessage } from '@wasp/utils.js';
import login from '@wasp/auth/login.js';

const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      history.push("/");
    } catch(err) {
      console.error(err);
      window.alert(errorMessage(err));
    }
  }

  return (
    <div className="h-full flex justify-center items-center flex-col">
      <form method="GET" onSubmit={handleLogin} className="flex flex-col gap-4 min-w-52 w-1/2 max-w-lg">
        <div className="flex flex-col">
          <h2 className="text-gray-500">Username</h2>
          <input
            type="text"
            value={username}
            placeholder="example_username"
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-100 border-transparent rounded mt-1 focus:border-gray-500 focus:bg-white focus:ring-0"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-gray-500">Password</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 border-transparent rounded mt-1 focus:border-gray-500 focus:bg-white focus:ring-0"
          />
        </div>
        <input 
          type="submit" 
          value="Log in"
          className="cursor-pointer text-base font-bold rounded-3xl bg-gray-200 p-2 px-4 transition-all drop-shadow hover:bg-yellow-400 active:bg-yellow-500 focus:outline-none focus:ring focus:ring-gray-100"
        />
      </form>
      <br />
      <span>
        Don't have an account yet? {" "}
        <Link to="/signup" className="visited:text-blue-500 underline">(Signup)</Link>
      </span>
    </div>
  )
};


export default LoginPage