import { Select } from "antd";
import { requestContent } from "../../routes/routes";
import { MdSave } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineComment } from "react-icons/ai";
import { useState } from "react";
import EdittorCustom from "../../components/common/EditorCustom";

const AnswerQuestion = () => {
  const [isReply, setIsReply] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="md:ml-6 h-100">
      <div className="text-2xl pb-10 font-bold uppercase text-gray-600 ">
        Quản lí yêu cầu thao tác
      </div>
      <div className="bg-white w-full dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
        <div className="flex sm:flex-row flex-col gap-3 justify-between border-b-2 pb-6">
          <h3 className="font-bold text-zinc-500">
            Sửa đổi thông tin thành viên công ty
          </h3>
          <p>02-08-1964 02:26:40</p>
        </div>

        <div className="flex sm:flex-row flex-col justify-between sm:items-center border-b-2 py-6 gap-3">
          <div>
            <span className="pr-3 font-bold text-zinc-500">Khách hàng :</span>
            <span>Kênh 14</span>
          </div>
          <div className="flex items-center gap-3 ">
            <label className="font-bold text-zinc-500 w-24">Trạng thái</label>
            <div className="w-44">
              <Select
                defaultValue={0}
                className="w-full"
                options={[
                  {
                    value: 0,
                    label: "Tiếp nhận",
                  },
                  {
                    value: 1,
                    label: "Đang thao tác",
                  },
                  {
                    value: 2,
                    label: "Hoàn thành",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div
          className={
            isReply
              ? "h-80 w-4/5 m-auto overflow-y-scroll border-2 p-6 overflow-hidden my-3"
              : "h-fit"
          }
        >
          {requestContent}
        </div>

        {isReply && (
          <div className="flex flex-col border-t-2 py-6 ">
            <label className="font-bold text-zinc-500">Trả lời :</label>
            <div className="w-4/5 m-auto">
              <EdittorCustom />
            </div>
          </div>
        )}

        {!isReply ? (
          <div className="pt-6 flex items-center border-t-2 justify-between">
            <button
              type="button"
              onClick={() => navigate("/quan-li-request")}
              className="rounded-lg px-4 flex text-sm items-center gap-1 py-2 bg-gray-500 text-white hover:bg-gray-600 duration-300"
            >
              <span>Danh sách</span>
              <HiOutlineClipboardList />
            </button>

            <div className="flex gap-3">
              <button
                onClick={() => setIsReply(!isReply)}
                type="button"
                className="rounded-lg px-4 flex text-sm items-center gap-1 py-2 bg-blue-500 text-white hover:bg-blue-600 duration-300"
              >
                <span>Trả lời</span>
                <AiOutlineComment />
              </button>
              <button
                type="button"
                className="rounded-lg px-4 flex text-sm items-center gap-1 py-2 bg-green-500 text-white hover:bg-green-600 duration-300"
              >
                <span>Lưu</span>
                <MdSave />
              </button>
            </div>
          </div>
        ) : (
          <div className="pt-6 flex items-center border-t-2 justify-between">
            <button
              type="button"
              onClick={() => navigate("/quan-li-request")}
              className="rounded-lg px-4 flex text-sm items-center gap-1 py-2 bg-gray-500 text-white hover:bg-gray-600 duration-300"
            >
              <span>Danh sách</span>
              <HiOutlineClipboardList />
            </button>

            <div className="flex gap-3">
              <button
                type="button"
                className="rounded-lg px-4 flex text-sm items-center gap-1 py-2 bg-blue-500 text-white hover:bg-blue-600 duration-300"
              >
                <span>Lưu</span>
                <MdSave />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnswerQuestion;
