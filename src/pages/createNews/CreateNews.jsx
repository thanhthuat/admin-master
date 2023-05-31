import { Input, Select } from "antd";
import moment from "moment";
import { AiOutlineSearch } from "react-icons/ai";
import { useStateContext } from "../../contexts/ContextProvider";
import TableDataCustom from "../../components/common/TableDataCustom";
import { Link } from "react-router-dom";
import SearchFillterCreateNews from "./search-fillter";

const columns = [
  {
    title: "No.",
    width: "5%",
    render: (item, record, index) => <>{index + 1}</>,
  },
  {
    title: "Sản phẩm",
    width: "15%",
    render: () => <div>BASIC</div>,
  },
  {
    title: "Tiêu đề",
    dataIndex: "name",
    render: (name) => (
      <Link
        className="text-blue-500"
        to={`/form-create-news?name=${name.first}`}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
    ),
    width: "30%",
  },
  {
    title: "Domain",
    render: () => <p>http://www.boranews.kr/</p>,
    width: "10%",
  },
  {
    title: "Tác giả",
    render: () => <p className="text-center">Yeo Sang Wook</p>,
    width: "10%",
  },
  {
    title: "Email",
    render: () => <p className="text-center">abcdef@hanmail.net</p>,
    width: "10%",
  },
  {
    title: "Số điện thoại",
    render: () => <p className="text-center">010-2345-6789</p>,
    width: "10%",
  },

  {
    title: "Ngày nộp đơn",
    dataIndex: "dob",
    render: (dob) => (
      <div className="flex justify-center">
        <span>{moment(dob.date).format(`DD-MM-YYYY hh:mm:ss`)}</span>
      </div>
    ),
    width: "15%",
  },
];

const CreateNews = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="md:ml-6 h-100">
      <div className="text-2xl pb-10 font-bold uppercase text-gray-600 ">
        Đăng kí news
      </div>
      <SearchFillterCreateNews/>
      {/* <div
        // style={{ borderColor: currentColor }}
        className="w-full border-t-4 2xl:flex-nowrap flex-wrap text-sm border-y-3 border-y-teal-300 flex gap-7 items-center bg-white p-6"
      >
        <div className="flex justify-between items-center gap-3 2xl:w-1/4 md:w-1/3 w-full">
          <span className="w-2/4 block break-keep">Tìm kiếm theo</span>
          <div className="w-full">
            <Select
              defaultValue={0}
              className="w-full"
              options={[
                {
                  value: 0,
                  label: "Tất cả",
                },
                {
                  value: 1,
                  label: "Tự đề",
                },
                {
                  value: 2,
                  label: "Domain",
                },
                {
                  value: 3,
                  label: "Người soạn thảo",
                },
                {
                  value: 4,
                  label: "Email",
                },
              ]}
            />
          </div>
        </div>
        <div className="flex gap-3 justify-end">
          <div className="flex justify-start gap-7 items-center w-full">
            <Input placeholder="Nhập..." />
          </div>

          <button className="rounded-lg w-44 justify-center px-4 flex text-sm items-center gap-1 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
            <p> Tìm kiếm</p>
            <AiOutlineSearch />
          </button>
        </div>
      </div> */}

      <div className="bg-white border-t-4 my-6 ">
        <TableDataCustom defaultPageSize={15} columns={columns} />
      </div>
    </div>
  );
};

export default CreateNews;
