import { Input, Radio } from "antd";
import { useNavigate } from "react-router-dom";

const UpdateAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="md:ml-6 h-100">
      <div className="text-2xl pb-10 font-bold uppercase text-gray-600 ">
        Quản lý người quản lý
      </div>
      <div className="bg-white w-full dark:text-gray-200 dark:bg-secondary-dark-bg p-10 rounded-2xl">
        <form className="flex gap-5 flex-col mb-3">
          <div className="flex gap-5 flex-col">
            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3">
              <lable className="text-base flex items-center gap-1 w-44 leading-8 text-zinc-600">
                Tên người quản lý
              </lable>
              <div className="sm:w-1/2 w-full">
                <Input placeholder="Nhập tên người quản lý" />
              </div>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3">
              <lable className="text-base flex items-center gap-1 w-44 leading-8 text-zinc-600">
                Email
              </lable>
              <div className="sm:w-1/2 w-full">
                <Input placeholder="Nhập Email" />
              </div>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3">
              <lable className="text-base flex items-center gap-1 w-44 leading-8 text-zinc-600">
                Password
              </lable>
              <div className="sm:w-1/2 w-full">
                <Input placeholder="Nhập Password" />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3 sm:items-center">
              <lable className="text-base flex items-center gap-1 w-44 leading-8 text-zinc-600">
                Sử dụng CDN
              </lable>
              <div className="sm:w-1/2 w-full">
                <Radio.Group defaultValue={false} name="status">
                  <Radio value={true}>Sử dụng</Radio>
                  <Radio value={false}>Không sử dụng</Radio>
                </Radio.Group>
              </div>
            </div>
          </div>
        </form>

        <div className="pt-6 border-t border-black flex items-center justify-between">
          <button
            type="button"
            className={`rounded-lg px-4 flex text-sm items-center gap-1 py-2 bg-red-500 text-white hover:bg-red-600 duration-300 disabled:opacity-75 `}
          >
            <span>Xóa</span>
          </button>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => navigate("/admin-management")}
              className="rounded-lg px-4 flex text-sm items-center gap-1 py-2 bg-gray-500 text-white hover:bg-gray-600 duration-300"
            >
              <span>Danh sách</span>
            </button>
            <button
              type="button"
              className="rounded-lg px-4 flex text-sm items-center gap-1 py-2 bg-blue-500 text-white hover:bg-blue-600 duration-300"
            >
              <span>Lưu</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAdmin;
