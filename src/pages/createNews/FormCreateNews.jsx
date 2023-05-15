import { Input } from "antd";
import { MdFileDownload } from "react-icons/md";

const FormCreateNews = () => {
  return (
    <div className="md:ml-6 h-100">
      <div className="text-2xl pb-10 font-bold uppercase text-gray-600 ">
        Đăng kí news
      </div>
      <div className="bg-white w-full dark:text-gray-200 dark:bg-secondary-dark-bg p-10 rounded-2xl">
        <form className="flex gap-5 flex-col">
          <div className="flex gap-5 flex-col">
            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3">
              <lable className="text-base flex items-center gap-1 w-44 leading-8 text-zinc-600">
                Tên
              </lable>
              <div className="sm:w-1/2 w-full">
                <Input placeholder="Nhập tên" />
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
                Tên tòa soạn
              </lable>
              <div className="sm:w-1/2 w-full">
                <Input placeholder="Nhập tên tòa soạn" />
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
              <lable className="text-base flex items-center gap-1 w-44 leading-8 text-zinc-600">
                Số điện thoại
              </lable>
              <div className="sm:w-1/2 w-full">
                <Input type="number" placeholder="Nhập sô điện thoại" />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col items-start sm:gap-6 gap-3">
              <lable className="text-base flex items-center gap-1 w-44 leading-8 text-zinc-600">
                File đính kèm
              </lable>
              <div className="sm:w-1/2 gap-3 w-full">
                <p className="text-zinc-500">Tập tin đính kèm</p>
                <div className="flex w-1/3 py-3 flex-col">
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
                  <div className="flex w-full text-zinc-500 items-center justify-between">
                    <p>abc.jpg</p>
                    <div className="cursor-pointer">
                      <MdFileDownload />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-6 gap-3 sm:items-center">
              <lable className="text-base flex items-center gap-1 w-44 leading-8 text-zinc-600">
                Nội dung
              </lable>
              <div className="sm:w-1/2 w-full">
                <Input.TextArea rows={5} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCreateNews;
