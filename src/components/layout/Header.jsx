import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="w-full h-auto bg-red-500 flex flex-row justify-around p-4
    fixed top-0 z-10">
      <Link to="/">
          <h1>MVBank</h1>
      </Link>
      <div className="flex flex-row gap-4">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cadastro">
          <button>Cadastre-se</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
