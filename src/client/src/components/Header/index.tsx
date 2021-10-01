import { Link } from 'react-router-dom';

const index = () => {
  return (
    <>
      <nav className="bg-black text-white">
        <Link className="mr-2" to="/">
          Home
        </Link>
        <Link className="mr-2" to="/login">
          Login/Register
        </Link>
        <Link className="mr-2" to="/test">
          Test
        </Link>
      </nav>
    </>
  );
};

export default index;
