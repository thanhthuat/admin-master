import React from "react";
import { useForm } from "react-hook-form";
import InputForm from "../../components/common/form/input-form";
import SelectForm from "../../components/common/form/select-form";
import { AiOutlineSearch } from "react-icons/ai";


const SearchFillter = () => {
  const form = useForm();
  const { control, handleSubmit } = form;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        // style={{ borderColor: currentColor }}
        className="w-full border-t-4 2xl:flex-nowrap flex-wrap text-sm border-y-3 border-y-teal-300 flex gap-7 items-center bg-white p-6"
      >
        <div className="flex justify-between items-center gap-3 2xl:w-1/4 md:w-1/3 w-full">
          <span className="w-2/4 block break-keep">Tìm kiếm theo</span>

          <div className="w-full">
            <SelectForm
              options={[
                {
                  value: 0,
                  label: "Tất cả",
                },
                {
                  value: 1,
                  label: "Tên toàn soạn",
                },
                {
                  value: 2,
                  label: "Domain",
                },
                {
                  value: 3,
                  label: "Tên sản phẩm",
                },
              ]}
              name={"select"}
              control={control}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex gap-3 justify-end">
          <div className="flex justify-start gap-7 items-center w-full">
            <InputForm name={"search"} control={control} />
          </div>

          <button
            className="rounded-lg w-44 justify-center px-4 flex text-sm items-center gap-1 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
            type="submit"
          >
            <p> Tìm kiếm</p>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
     
    </form>
  );
};

export default SearchFillter;
