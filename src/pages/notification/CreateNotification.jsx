import { Input, Radio } from "antd";
import EdittorCustom from "../../components/common/EditorCustom";
import { BsListStars } from "react-icons/bs";
import { BiSave } from "react-icons/bi";

const CreateNotification = () => {
  return (
    <div className="md:ml-6 h-100">
      <div className="text-2xl pb-10 font-bold uppercase text-gray-600 ">
        Điều khoảng thông báo
      </div>
      <div className="bg-white w-full dark:text-gray-200 dark:bg-secondary-dark-bg p-10 rounded-2xl">
        <form className="flex gap-5 flex-col">
          <div className="flex gap-5 flex-col">
            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3 sm:items-center">
              <lable className="text-base flex items-center gap-1 w-44 leading-8 text-zinc-600">
                Điều khoản thông báo
              </lable>
              <div className="sm:w-1/2 w-full">
                <Radio.Group defaultValue={true} name="status">
                  <Radio value={true}>Công bố</Radio>
                  <Radio value={false}>Không công bố</Radio>
                </Radio.Group>
              </div>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3">
              <lable className="text-base flex items-center gap-1  w-44 leading-8 text-zinc-600">
                Nhập tựa đề
              </lable>
              <div className="sm:w-1/2 w-full">
                <Input placeholder="Nhập tựa đề" />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3">
              <lable className="text-base flex items-start gap-1  w-44 leading-8 text-zinc-600">
                Nội dung
              </lable>
              <div className="sm:w-1/2 w-full">
                <EdittorCustom />
              </div>
            </div>
          </div>

          <div className="pt-6  border-black flex items-center justify-center">
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

export default CreateNotification;
