import { Input, Radio, Select } from "antd";
import { DatePicker } from "antd";
import { BiSave } from "react-icons/bi";
import { BsListStars } from "react-icons/bs";
const { RangePicker } = DatePicker;

const { TextArea } = Input;

const FormClient = () => {
  return (
    <div className="md:ml-6 h-100">
      <div className="text-2xl pb-10 font-bold uppercase text-gray-600 ">
        Quản lí khách hàng
      </div>
      <div className="bg-white w-full dark:text-gray-200 dark:bg-secondary-dark-bg p-10 rounded-2xl">
        <form className="flex gap-5 flex-col">
          <div className="flex gap-5 flex-col">
            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3">
              <lable className="text-base flex items-center gap-1 w-44 leading-8 text-zinc-600">
                Tên trang web
              </lable>
              <div className="sm:w-1/2 w-full">
                <Input placeholder="Nhập tên trang web" />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3">
              <lable className="text-base flex items-center gap-1 w-44 leading-8 text-zinc-600">
                Domain
              </lable>
              <div className="sm:w-1/2 w-full">
                <Input placeholder="Nhập domain" />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3">
              <lable className="text-base flex items-center gap-1  w-44 leading-8 text-zinc-600">
                Tên công ty
              </lable>
              <div className="sm:w-1/2 w-full">
                <Input placeholder="Nhập tên công ty" />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3">
              <lable className="text-base flex items-center gap-1  w-44 leading-8 text-zinc-600">
                Số điện thoại
              </lable>
              <div className="sm:w-1/2 w-full">
                <Input type="number" placeholder="Nhập số điện thoại" />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3">
              <lable className="text-base flex items-center gap-1  w-44 leading-8 text-zinc-600">
                Tên sản phẩm
              </lable>
              <div className="sm:w-1/5 w-full">
                <Select
                  style={{ width: "100%" }}
                  defaultValue={1}
                  options={[
                    { value: 1, label: "BASIC" },
                    { value: 2, label: "STANDARD" },
                    { value: 3, label: "LUXURY" },
                    { value: 4, label: "PREMIUM" },
                  ]}
                />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3">
              <lable className="text-base flex items-center gap-1  w-44 leading-8 text-zinc-600">
                Thời gian sử dụng
              </lable>
              <div className="sm:w-1/5 w-full">
                <RangePicker />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3">
              <lable className="text-base flex items-center gap-1  w-44 leading-8 text-zinc-600">
                Sử dụng site
              </lable>
              <div className="sm:w-1/5 w-full">
                <Select
                  style={{ width: "100%" }}
                  defaultValue={1}
                  options={[
                    { value: 1, label: "Đang chuẩn bị" },
                    { value: 2, label: "Đang vận hành" },
                    { value: 3, label: "Tạm dừng" },
                    { value: 4, label: "Đóng cửa" },
                  ]}
                />
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

            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3 sm:items-center">
              <lable className="text-base flex items-center gap-1 w-44 leading-8 text-zinc-600">
                Sử dụng người quản lí
              </lable>
              <div className="sm:w-1/2 w-full">
                <Radio.Group defaultValue={false} name="status">
                  <Radio value={true}>Sử dụng</Radio>
                  <Radio value={false}>Tạm ngừng</Radio>
                </Radio.Group>
              </div>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3 sm:items-center">
              <lable className="text-base flex items-center gap-1 w-44 leading-8 text-zinc-600">
                Phát hành tự động
              </lable>
              <div className="sm:w-1/2 w-full">
                <Radio.Group defaultValue={false} name="status">
                  <Radio value={true}>Sử dụng</Radio>
                  <Radio value={false}>Không sử dụng</Radio>
                </Radio.Group>
              </div>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3 sm:items-center">
              <lable className="text-base flex items-center gap-1 w-44 leading-8 text-zinc-600">
                Phát hành tự động
              </lable>
              <div className="sm:w-1/2 w-full">
                <Radio.Group defaultValue={false} name="status">
                  <Radio value={true}>Sử dụng</Radio>
                  <Radio value={false}>Không sử dụng</Radio>
                </Radio.Group>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3 sm:items-center">
              <lable className="text-base flex items-center gap-1 w-44 leading-8 text-zinc-600">
                Thông tin khác
              </lable>
              <div className="sm:w-1/2 w-full">
                <TextArea rows={5} />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3 sm:items-start">
              <lable className="text-base flex items-center gap-1 sm:w-44 leading-8 text-zinc-600">
                Sử dung thong báo popup
              </lable>
              <div className="sm:w-1/2 flex flex-col gap-3 w-full">
                <Radio.Group defaultValue={false}>
                  <Radio value={true}>Sử dụng</Radio>
                  <Radio value={false}>Không sử dụng</Radio>
                </Radio.Group>
                <TextArea rows={5} />
              </div>
            </div>
          </div>

          <div className="pt-6 border-t-1 border-black flex items-center justify-center">
            <div className="flex gap-3">
              <button
                type="button"
                className="rounded-lg px-4 flex text-sm items-center gap-1 py-2 bg-gray-500 text-white hover:bg-gray-600 duration-300"
              >
                <span>Danh sách</span>
                <BsListStars />
              </button>
              <button
                type="button"
                className="rounded-lg px-4 flex text-sm items-center gap-1 py-2 bg-blue-500 text-white hover:bg-blue-600 duration-300"
              >
                <span>Lưu</span>
                <BiSave />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormClient;
