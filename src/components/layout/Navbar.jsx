import { useEffect } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { MdOutlineLogout } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate  ,useLocation} from "react-router-dom";

const Navbar = () => {
  const { activeMenu, setActiveMenu, setScreenSize, screenSize } =
    useStateContext();
  const navigate = useNavigate();
   let location = useLocation();
  const name = localStorage.getItem("name");
  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  useEffect(() => {
    if (screenSize <= 1080) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
    useEffect(() => {
      if(activeMenu && screenSize <= 1080){
        setActiveMenu(!activeMenu);
      }
  }, [location?.pathname]);
  return (
    <div className="flex  justify-between navbar px-12 h-12 mb-3  w-full bg-white">
      <div className="flex items-center justify-center">
        <div
          onClick={handleActiveMenu}
          className="text-xl flex items-center p-6 cursor-pointer "
        >
          <AiOutlineMenu />
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="text-gray-500 font-semibold">{name}</div>
        <div
          onClick={handleLogout}
          className="flex  rounded-xl cursor-pointer items-center tex-sm gap-3 text-gray-500"
        >
          <span>Đăng xuất</span>
          <MdOutlineLogout />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
