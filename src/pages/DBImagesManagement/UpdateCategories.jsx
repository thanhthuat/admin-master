import { Input } from "antd";
import { useState } from "react";
import { BiSave } from "react-icons/bi";
import { BsListStars } from "react-icons/bs";

const dataCategories = [
  {
    id: 1,
    category: "parent1",
    children: [
      { title: "children1", id: 2 },
      { title: "children1", id: 3 },
      { title: "children1", id: 4 },
      { title: "children1", id: 5 },
    ],
  },
  {
    id: 6,
    category: "parent2",
    children: [
      { title: "children2", id: 7 },
      { title: "children2", id: 8 },
      { title: "children2", id: 9 },
      { title: "children2", id: 10 },
    ],
  },
  {
    id: 35,
    category: "parent3",
    children: [
      { title: "children3", id: 11 },
      { title: "children3", id: 12 },
      { title: "children3", id: 13 },
      { title: "children3", id: 14 },
    ],
  },
  {
    id: 15,
    category: "parent4",
    children: [
      { title: "children4", id: 16 },
      { title: "children4", id: 17 },
      { title: "children4", id: 18 },
      { title: "children4", id: 19 },
    ],
  },
  {
    id: 20,
    category: "parent5",
    children: [
      { title: "children5", id: 21 },
      { title: "children5", id: 22 },
      { title: "children5", id: 23 },
      { title: "children5", id: 24 },
    ],
  },
  {
    id: 25,
    category: "parent6",
    children: [
      { title: "children6", id: 26 },
      { title: "children6", id: 27 },
      { title: "children6", id: 28 },
      { title: "children6", id: 29 },
    ],
  },
  {
    id: 30,
    category: "parent7",
    children: [
      { title: "children7", id: 31 },
      { title: "children7", id: 32 },
      { title: "children7", id: 33 },
      { title: "children7", id: 34 },
    ],
  },
];

const UpdateCategories = () => {
  const [selectedCategory, setSeletedCategory] = useState(0);
  const [arrCategoriesLevel2, setArrCategoriesLevel2] = useState([]);

  const handleClickParentCategories = (id) => {
    setSeletedCategory(id);

    const arrChildCategories = dataCategories.find(
      (item) => item?.id === id
    ).children;
    setArrCategoriesLevel2(arrChildCategories);
  };

  const handleCancleParentcategories = () => {
    setSeletedCategory(0);
    setArrCategoriesLevel2([]);
  };
  const buttonGroups = (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2  gap-3 mt-3">
      <button className="rounded-lg border hover:bg-gray-300 px-4 flex  text-sm items-center gap-1 py-2 bg-gray-300 text-white-100   justify-center duration-300">
        <span>Lên trên</span>
      </button>
      <button className="rounded-lg border hover:bg-gray-300 px-4 flex text-sm items-center gap-1 py-2 bg-gray-300 text-white-100   justify-center duration-300">
        <span>Xuống dưới</span>
      </button>
      <button className="rounded-lg border hover:bg-gray-300 px-4 flex text-sm items-center gap-1 py-2 bg-gray-300 text-white-100   justify-center duration-300">
        <span>Thêm mới</span>
      </button>
      <button
        onClick={handleCancleParentcategories}
        className="rounded-lg border hover:bg-gray-300 px-4 flex text-sm justify-center items-center gap-1 py-2 bg-gray-300 text-white-100   duration-300"
      >
        <span>Xóa</span>
      </button>
    </div>
  );

  return (
    <div className="md:ml-6 h-100">
      <div className="text-2xl pb-10 font-bold uppercase text-gray-600 ">
        Quản lí DB hình ảnh
      </div>
      <div className="bg-white w-full dark:text-gray-200 dark:bg-secondary-dark-bg sm:p-10 p-3 rounded-2xl">
        <div className="flex sm:flex-row flex-col gap-3 sm:items-center justify-between">
          <h3 className="sm:text-xl text-gray-600 text-lg leading-8 font-semibold">
            Cài đặt danh mục
          </h3>
        </div>
        {/* list */}
        <div className="mt-3 flex sm:flex-row flex-col gap-3 items-center justify-between">
          <div className="flex sm:w-1/3 w-full  flex-col">
            <div className="border rounded-md ">
              <div className="p-6 border-b flex items-center justify-center">
                <h3 className="font-semibold">Dang mục cấp 1</h3>
              </div>
              <div className="p-6 flex gap-3 flex-col h-72  overflow-hidden overflow-y-scroll ">
                {dataCategories.map((item) => (
                  <div
                    onClick={() => handleClickParentCategories(item?.id)}
                    key={item?.id}
                    className={`cursor-pointer  p-2 w-9/12 ${
                      selectedCategory === item?.id &&
                      " bg-gray-200 rounded-lg "
                    }`}
                  >
                    <span className="pl-3">{item?.category}</span>
                  </div>
                ))}
              </div>
            </div>
            {buttonGroups}
          </div>
          <div className="flex sm:w-1/3 w-full  flex-col">
            <div className="border rounded-md">
              <div className="p-6 border-b flex items-center justify-center">
                <h3 className="font-semibold">Dang mục cấp 2</h3>
              </div>
              <div className="p-6  h-72 overflow-y-scroll ">
                {arrCategoriesLevel2.length > 0 &&
                  arrCategoriesLevel2.map((item) => (
                    <div
                      key={item?.id}
                      className={`cursor-pointer  p-2 w-9/12 ${
                        selectedCategory === item?.id &&
                        " bg-gray-200 rounded-lg "
                      }`}
                    >
                      <span className="pl-3">{item?.title}</span>
                    </div>
                  ))}
              </div>
            </div>
            {buttonGroups}
          </div>

          <div className="flex sm:w-1/3 w-full  flex-col">
            <div className="border  rounded-md ">
              <div className="p-6 border-b flex items-center justify-center">
                <h3 className="font-semibold">Dang mục cấp 3</h3>
              </div>
              <div className="p-6  h-72 overflow-y-scroll "></div>
            </div>
            {buttonGroups}
          </div>
        </div>

        {/* form */}
        <div className="mt-6 border-b pb-6 border-black">
          <h3 className="py-4 leading-8 font-semibold">Chi tiết danh mục</h3>
          <form className="flex gap-3 mt-3 flex-col">
            <div className="flex gap-6">
              <lable className="text-base w-44 leading-8 font-semibold">
                Tên danh mục
              </lable>
              <div className="w-52">
                <Input />
              </div>
            </div>
          </form>
        </div>
        <div className="pt-6 border-t-1  flex items-center justify-center">
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

export default UpdateCategories;
