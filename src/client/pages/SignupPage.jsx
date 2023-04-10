import { Link, useHistory } from 'react-router-dom';
import signup from '@wasp/auth/signup';
import login from "@wasp/auth/login";
import { useState } from "react";
import { errorMessage } from '@wasp/utils';

const SignupPage = () => {
  const history = useHistory()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup({ username: username, password: password });
      await login(username, password);

      setUsername("");
      setPassword("");

      history.push("/");
    } catch(err) {
      window.alert(errorMessage(err));
    }
  }

  return (
    <div className="h-full flex justify-center items-center flex-col">
      <form onSubmit={handleSignUp} method='POST' className="flex flex-col gap-4 min-w-52 w-1/2 max-w-lg">
      <div className="flex flex-col">
        <h2 className="text-gray-600">Username</h2>
        <input 
          type="text" 
          name="username"
          value={username} 
          placeholder="example_username"
          onChange={(e) => setUsername(e.target.value)}
          className="bg-gray-100 border-transparent rounded mt-1 focus:border-gray-500 focus:bg-white focus:ring-0"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-gray-600">Password</h2>
        <input 
          type="password" 
          name="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-100 border-transparent rounded mt-1 focus:border-gray-500 focus:bg-white focus:ring-0"
        />
      </div>
      <input 
        type="submit"
        value="Sign Up" 
        className="cursor-pointer text-base font-bold rounded-3xl drop-shadow bg-gray-200 p-2 px-4 transition-all hover:bg-yellow-400 active:bg-yellow-500 focus:outline-none focus:ring focus:ring-gray-100"
      />
      </form>
      <br/>
      <span>
        Already have an account? {" "}
        <Link to="/login" className="visited:text-blue-500 underline">(Login)</Link>
      </span>
    </div>
  )
}

export default SignupPage