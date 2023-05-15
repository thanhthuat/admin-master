import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { links } from "../../data/dummy";

const SideBar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md  m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md  text-gray-700 m-2";
  return (
    <div className="lg:w-full sm:w-1/2 w-3/4 h-full bg-white  md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 sidebar">
      {activeMenu && (
        <>
          <div className="flex border-b-2 border-gray justify-between items-center">
            <Link
              className="flex  justify-between items-center gap-3 m-auto py-4"
              to={"/"}
            >
              {/* <div>
                <img src="../../src/assets/images/logo-icon.png" />
              </div> */}
              <h3
                style={{ color: "rgb(3, 201, 215)" }}
                className="font-extrabold text-2xl"
              >
                LINENEWS
              </h3>
            </Link>
          </div>
          <div className=" ">
            {links.map((item) => (
              <NavLink
                to={`/${item?.slug}`}
                key={item.name}
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {item.icon}
                <span className="capitalize ">{item.name}</span>
              </NavLink>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
