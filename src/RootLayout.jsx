import { ToastContainer } from "react-toastify";
import { useStateContext } from "./contexts/ContextProvider";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import SideBar from "./components/layout/SideBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const RootLayout = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className="flex w-full relative ">
      {activeMenu ? (
        <div className="lg:w-72 sidebar h-screen lg:top-0 top-12 w-full fixed sidebar bg-gray-900 bg-opacity-50 ">
          <SideBar />
        </div>
      ) : (
        <div className="w-0">
          <SideBar />
        </div>
      )}
      <div
        style={{ backgroundColor: "rgb(248, 249, 250)" }}
        className={
          activeMenu
            ? "  min-h-screen lg:ml-72 w-full "
            : "  w-full min-h-screen flex-2 "
        }
      >
        <div className=" sticky top-0">
          <Navbar />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <div className="w-full  px-6">
          <Suspense fallback={"loading..."}>
            <Outlet />
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
