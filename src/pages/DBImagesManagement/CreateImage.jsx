import { Input, TreeSelect } from "antd";
import { useState } from "react";
import { BiSave } from "react-icons/bi";
import { BsListStars } from "react-icons/bs";

const treeData = [
  {
    value: "parent 1",
    title: "parent 1",
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0",
        children: [
          {
            value: "leaf1",
            title: "my leaf",
          },
          {
            value: "leaf2",
            title: "your leaf",
          },
        ],
      },
      {
        value: "parent 1-1",
        title: "parent 1-1",
        children: [
          {
            value: "sss",
            title: <b style={{ color: "#08c" }}>style</b>,
          },
        ],
      },
    ],
  },
];

const CreateImage = () => {
  const [image, setImage] = useState(null);

  const handleChangeUploadImages = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <div className="md:ml-6 h-100">
      <div className="text-2xl pb-10 font-bold uppercase text-gray-600 ">
        Quản lí DB hình ảnh
      </div>
      <div className="bg-white p-6 flex flex-col gap-3 rounded-2xl my-3 ">
        <div className="flex md:flex-row flex-col">
          <lable className="leading-8 pb-1 w-64 text-gray-500">
            Thiết lập phân loại hình ảnh
          </lable>
          <div className="flex gap-3 flex-col">
            <div className="w-60">
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : "../../src/assets/images/no-image.jpg"
                }
                className="w-60 object-cover rounded-lg"
                alt=""
              />
            </div>

            <input
              class="relative md:w-96 w-full m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary cursor-pointer"
              type="file"
              id="formFile"
              onChange={handleChangeUploadImages}
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col">
          <lable className="leading-8 pb-1  w-64 text-gray-500">
            Lựa chọn danh mục
          </lable>
          <div className="md:w-96 w-full">
            <TreeSelect
              showSearch
              style={{ width: "100%" }}
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              placeholder="Please select"
              allowClear
              multiple
              treeDefaultExpandAll
              treeData={treeData}
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col">
          <lable className="leading-8 pb-1  w-64 text-gray-500">
            Caption hình ảnh
          </lable>
          <div className="md:w-96 w-full">
            <Input placeholder="dòng chữ hiện ra khi di chuột vào ảnh" />
          </div>
        </div>
        <div className="pt-6 border-t-1 border-t border-black flex items-center justify-center">
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
      </div>
    </div>
  );
};

export default CreateImage;
