import { Alert, Input, Space } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const login = [
    {
      username: "admin",
      password: "123456",
      role: 0,
      name: "Jay Park",
    },
  ];

  const [inputValues, setinputValues] = useState({});
  const [isError, setIsError] = useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const form = useForm();
  const { control, handleSubmit } = form;
  const onSubmit = (data) => {
    const user = login.find(
      (item) =>
        item.username === data?.username &&
        item.password === data?.password
    );

    if (!user) {
      setIsError(true);
      return;
    }

    localStorage.setItem("isLogin", true);
    localStorage.setItem("role", user.role);
    localStorage.setItem("name", user.name);
    navigate("/");
  };

  // const handleInputChange = ({ target }) => {
  //   const { name, value } = target;
  //   setinputValues((prev) => ({ ...prev, [name]: value }));
  // };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const user = login.find(
  //     (item) =>
  //       item.username === inputValues?.username &&
  //       item.password === inputValues?.password
  //   );

  //   if (!user) {
  //     setIsError(true);
  //     return;
  //   }

  //   localStorage.setItem("isLogin", true);
  //   localStorage.setItem("role", user.role);
  //   localStorage.setItem("name", user.name);
  //   navigate("/");
  // };

  return (
    <div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div class="w-full sm:max-w-md p-5 mx-auto">
        <h2 class="mb-12 text-center text-3xl ">
          Trang quản lý tên khách hàng
        </h2>
        {isError && (
          <Alert
            message="Error"
            description="Tài khoảng mật khẩu không chính xác"
            type="error"
            showIcon
          />
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-4">
            <label class="block mb-1" for="email">
              Tài khoản
            </label>
            <Controller
              name={"email"}
              control={control}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { error },
              }) => (
                <Input
                  name={name}
                  value={value}
                  onChange={onChange}
                  className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                />
              )}
            />
            {/* <input
              onChange={handleInputChange}
              id="email"
              type="text"
              name="username"
              className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />*/}
          </div>
          <div class="mb-4">
            <label class="block mb-1" for="password">
              Mật khẩu
            </label>
            <Controller
              name={"password"}
              control={control}
              // rules={rules}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { error },
              }) => (
                <Input.Password
                  name={name}
                  value={value}
                  placeholder="input password"
                  onChange={onChange}
                  // className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                  className="py-2 px-3  w-full"
                />
              )}
            />

            {/* <input
              onChange={handleInputChange}
              id="password"
              type="password"
              name="password"
              class="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            /> */}
          </div>
          {/* <div class="mt-6 flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                class="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
              <label
                for="remember_me"
                class="ml-2 block text-sm leading-5 text-gray-900"
              >
                Lưu đăng nhập
              </label>
            </div>
          </div> */}
          <div class="mt-6">
            <button
              type="submit"
              class="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition"
            >
              Đăng nhập
            </button>
          </div>

          <div className="mt-6 text-center">
            © 2015 - {moment().year()} LINEADD corp. All rights reserved.
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
