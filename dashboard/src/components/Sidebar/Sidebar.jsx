import { useContext, useState } from "react";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaIdCardClip } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/admin/logout", {
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

  const gotoHomePage = () => {
    navigateTo("/");
    setShow(!show);
  };
  const gotoArtistsPage = () => {
    navigateTo("/artists");
    setShow(!show);
  };
  
  const gotoAddNewArtist = () => {
    navigateTo('/artist/add');
    setShow(!show);
  };
  const gotoAddNewAdmin = () => {
    navigateTo("/admin/add");
    setShow(!show);
  };

  return (
    <>
      <nav
        style={!isAuthenticated ? { display: 'none' } : { display: 'flex' }}
        className={show ? 'show sidebar' : 'sidebar'}
      >
        <div className="links">
          <TiHome onClick={gotoHomePage} />
          <FaIdCardClip onClick={gotoArtistsPage} />
          <MdAddModerator onClick={gotoAddNewAdmin} />
          <IoPersonAddSharp onClick={gotoAddNewArtist} />
          <RiLogoutBoxFill onClick={handleLogout} />
        </div>
      </nav>
      <div
        className="wrapper"
        style={!isAuthenticated ? { display: 'none' } : { display: 'flex' }}
      >
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </div>
    </>
  );
};

export default Sidebar;
