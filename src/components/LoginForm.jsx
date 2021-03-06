import React, { useContext, useState } from "react";
import { AppContext } from "../App";

const LoginForm = ({ setShowModal }) => {

  const[username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin } = useContext(AppContext);

  const handleCancel = (event) => {
    event.preventDefault();
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userObj = {
      username,
      password
    }
    handleLogin(userObj);
  }




  return (
    <div className="w-full max-w-xs pt-4">
      <form onSubmit={handleSubmit}  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            id="username-input"
            onChange={(e)=> setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password-input"
            onChange={(e)=> setPassword(e.target.value)}            
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button            
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <button
            onClick={handleCancel}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
