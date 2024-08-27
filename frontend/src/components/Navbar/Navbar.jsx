import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from '../../main';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get('http://localhost:4000/api/user/logout', {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo('/login');
  };

  return (
    <>
      <nav className={'container'}>
        <div className="logo">
          <img src="/logo.svg" alt="logo" className="logo-img" />
        </div>
        <div className={show ? 'navLinks showmenu' : 'navLinks'}>
          <div
            className={show ? 'close-btn .hide' : '. close-btn .show'}
            onClick={() => setShow(!show)}
          >
            <MdClose color="white" />
          </div>

          <div className="links">
            <Link to={'/'} onClick={() => setShow(!show)}>
              Home
            </Link>
            <Link to={'/appointment'} onClick={() => setShow(!show)}>
              Appointment
            </Link>
            <Link to={'/about'} onClick={() => setShow(!show)}>
              About Us
            </Link>
          </div>
          <div className="btn-section">
            {isAuthenticated ? (
              <button
                className="btn btn-darken btn-inline"
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            ) : (
              <button className="btn btn-darken btn-inline" onClick={goToLogin}>
                Sign In
              </button>
            )}
          </div>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
