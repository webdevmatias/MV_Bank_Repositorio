import { Link } from 'react-router-dom';
import { BsCoin } from "react-icons/bs";


const Header = () => {
  return (
    <nav className="w-full h-auto bg-gray-800 flex flex-row justify-around p-4
    fixed top-0 z-10">
      <Link className='flex flex-rol justify-center items-center gap-2' to="/">
        <BsCoin className='text-white w-6 h-6' />
        <h1 className='text-white'>MVBank</h1>
      </Link>
      <div className="flex flex-row gap-4">
        <Link to="/login" >
          <button className='text-white'>Login</button>
        </Link>
        <Link to="/cadastro">
          <button className='text-white'>Cadastre-se</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
