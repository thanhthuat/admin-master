import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";

import { lazy } from "react";
import { MdFileDownload } from "react-icons/md";
import PrivateRoute from "./privateRoute";
import Login from "../pages/Login/Login";

const DarshBoard = lazy(() => import("../pages/darshboard/DarshBoard"));
const ClientManament = lazy(() =>
  import("../pages/clientManagement/ClientManament")
);
const FormClient = lazy(() => import("../pages/clientManagement/FormClient"));
const CreateNews = lazy(() => import("../pages/createNews/CreateNews"));
const FormCreateNews = lazy(() => import("../pages/createNews/FormCreateNews"));
const RequestManagement = lazy(() =>
  import("../pages/requestManagement/RequestManagement")
);
const AnswerRequest = lazy(() =>
  import("../pages/requestManagement/AnswerRequest")
);
const QuestionManagement = lazy(() =>
  import("../pages/questionManagement/QuestionManagement")
);
const AnswerQuestion = lazy(() =>
  import("../pages/questionManagement/AnswerQuestion")
);
const Notification = lazy(() => import("../pages/notification/Notification"));
const CreateNotification = lazy(() =>
  import("../pages/notification/CreateNotification")
);
const DBImagesManagement = lazy(() =>
  import("../pages/DBImagesManagement/DBImagesManagement")
);
const UpdateCategories = lazy(() =>
  import("../pages/DBImagesManagement/UpdateCategories")
);
const CreateImage = lazy(() =>
  import("../pages/DBImagesManagement/CreateImage")
);
const AdminManagement = lazy(() =>
  import("../pages/adminManagement/AdminManagement")
);
const UpdateAdmin = lazy(() => import("../pages/adminManagement/UpdateAdmin"));

const routes = createBrowserRouter([
  {
    exact: true,
    path: "/",
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        exact: true,
        element: <DarshBoard />,
      },
      {
        path: "quan-li-khach-hang",
        exact: true,
        element: <ClientManament />,
      },
      {
        path: "form-client",
        exact: true,
        element: <FormClient />,
      },
      {
        path: "dang-ki-news",
        exact: true,
        element: <CreateNews />,
      },
      {
        path: "form-create-news",
        exact: true,
        element: <FormCreateNews />,
      },
      {
        path: "quan-li-request",
        exact: true,
        element: <RequestManagement />,
      },
      {
        path: "answer-request",
        exact: true,
        element: <AnswerRequest />,
      },
      {
        path: "quan-li-cau-hoi",
        exact: true,
        element: <QuestionManagement />,
      },
      {
        path: "answer-question",
        exact: true,
        element: <AnswerQuestion />,
      },
      {
        path: "dieu-khoan-thong-bao",
        exact: true,
        element: <Notification />,
      },
      {
        path: "create-notification",
        exact: true,
        element: <CreateNotification />,
      },
      {
        path: "db-images-management",
        exact: true,
        element: <DBImagesManagement />,
      },
      {
        path: "setting-categories",
        exact: true,
        element: <UpdateCategories />,
      },
      {
        path: "create-image",
        exact: true,
        element: <CreateImage />,
      },
      {
        path: "admin-management",
        exact: true,
        element: <AdminManagement />,
      },
      {
        path: "update-admin",
        exact: true,
        element: <UpdateAdmin />,
      },
    ],
  },
  {
    exact: true,
    path: "/login",
    element: <Login />,
  },
]);

export const requestContent = (
  <>
    <div className="py-3 border-b-2">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
        debitis reprehenderit, eligendi ducimus quae animi consectetur quibusdam
        deleniti ipsa repudiandae officia. Eveniet voluptatem ipsa ratione
        facilis blanditiis quasi provident distinctio.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
        debitis reprehenderit, eligendi ducimus quae animi consectetur quibusdam
        deleniti ipsa repudiandae officia. Eveniet voluptatem ipsa ratione
        facilis blanditiis quasi provident distinctio.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
        debitis reprehenderit, eligendi ducimus quae animi consectetur quibusdam
        deleniti ipsa repudiandae officia. Eveniet voluptatem ipsa ratione
        facilis blanditiis quasi provident distinctio.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
        debitis reprehenderit, eligendi ducimus quae animi consectetur quibusdam
        deleniti ipsa repudiandae officia. Eveniet voluptatem ipsa ratione
        facilis blanditiis quasi provident distinctio.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
        debitis reprehenderit, eligendi ducimus quae animi consectetur quibusdam
        deleniti ipsa repudiandae officia. Eveniet voluptatem ipsa ratione
        facilis blanditiis quasi provident distinctio.
      </p>
      <br />

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
        debitis reprehenderit, eligendi ducimus quae animi consectetur quibusdam
        deleniti ipsa repudiandae officia. Eveniet voluptatem ipsa ratione
        facilis blanditiis quasi provident distinctio.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
        debitis reprehenderit, eligendi ducimus quae animi consectetur quibusdam
        deleniti ipsa repudiandae officia. Eveniet voluptatem ipsa ratione
        facilis blanditiis quasi provident distinctio.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
        debitis reprehenderit, eligendi ducimus quae animi consectetur quibusdam
        deleniti ipsa repudiandae officia. Eveniet voluptatem ipsa ratione
        facilis blanditiis quasi provident distinctio.
      </p>
      <br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
        debitis reprehenderit, eligendi ducimus quae animi consectetur quibusdam
        deleniti ipsa repudiandae officia. Eveniet voluptatem ipsa ratione
        facilis blanditiis quasi provident distinctio.
      </p>
    </div>
    <div className="flex gap-6 my-6 items-center">
      <p className="text-xl text-zinc-500">Tập tin đính kèm</p>
      <div className="flex border-l-2 pl-6 w-fit py-3 flex-col">
        <div className="flex  gap-6 w-full text-zinc-500 items-center justify-between">
          <p>abc.jpg</p>
          <div className="cursor-pointer">
            <MdFileDownload />
          </div>
        </div>
        <div className="flex w-full text-zinc-500 items-center justify-between">
          <p>abc.jpg</p>
          <div className="cursor-pointer">
            <MdFileDownload />
          </div>
        </div>
        <div className="flex w-full text-zinc-500 items-center justify-between">
          <p>abc.jpg</p>
          <div className="cursor-pointer">
            <MdFileDownload />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default routes;
