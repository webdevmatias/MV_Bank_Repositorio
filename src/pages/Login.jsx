import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // impede que a página seja recarregada
    event.preventDefault();
    console.log({ username, password });
  }

  return (
    <section className="flex flex-col justify-center items-center w-full h-screen bg-gray-800">
      <form onSubmit={handleSubmit} className="bg-gray-700 p-4 md:p-8 rounded-lg flex flex-col gap-4 w-94">
        <h1 className="text-white text-2xl mb-4">Login</h1>

        <div className="flex flex-row items-center bg-gray-600 p-2 rounded">
          <FaUser className="text-white mr-2" />
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 bg-transparent text-white focus:outline-none"
          />
        </div>

        <div className="flex flex-row items-center bg-gray-600 p-2 rounded">
          <FaLock className="text-white mr-2" />
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 bg-transparent text-white focus:outline-none"
          />
        </div>

        <div className="flex justify-between items-center text-white mt-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Lembre de mim
          </label>
          <a href="#" className="text-blue-400 hover:underline">Esqueceu a senha?</a>
        </div>

        <button type="submit" className="bg-blue-600 py-2 rounded text-white mt-4 hover:bg-blue-700">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
