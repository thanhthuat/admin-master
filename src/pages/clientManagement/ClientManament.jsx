import { Select, Input, Tag } from "antd";
import { useStateContext } from "../../contexts/ContextProvider";

import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import TableDataCustom from "../../components/common/TableDataCustom";
import moment from "moment";
import { Link, NavLink } from "react-router-dom";
import SearchFillter from "./search-fillter";

const columns = [
  {
    title: "No.",
    width: "5%",
    render: (item, record, index) => <>{index + 1}</>,
  },
  {
    title: "Tên tòa soạn ",
    dataIndex: "name",
    render: (name) => (
      <Link className="text-blue-500" to={`/form-client?name=${name.first}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
    ),
    width: "30%",
  },
  {
    title: "Domain",

    render: () => <p>http://www.gjdaily.kr</p>,
    width: "10%",
  },
  {
    title: "Mã gói mua",

    render: () => <p className="text-center">BA</p>,
    width: "10%",
  },

  {
    title: "Ngày sử dụng",
    dataIndex: "dob",
    render: (dob) => (
      <div className="flex justify-center">
        <span>{moment(dob.date).format(`DD/MM/YYYY`)}</span>
        <span className="px-3"> -</span>
        <span>{moment(dob.date).format(`DD/MM/YYYY`)}</span>
      </div>
    ),
    width: "15%",
  },
  {
    title: "Tiếp cận người quản lí",

    render: (item, record, index) => (
      <div className="justify-center flex">
        {index === 3 ? (
          <Tag color="#f50">Tạm dừng</Tag>
        ) : (
          <Tag color="#87d068">Sử dụng</Tag>
        )}
      </div>
    ),
    width: "15%",
  },
  {
    title: "Trạng thái của trang",

    render: (item, record, index) => (
      <div className="justify-center flex">
        {index === 4 ? (
          <Tag color="#f50">Không sử dụng</Tag>
        ) : (
          <Tag color="#87d068">Sử dụng</Tag>
        )}
      </div>
    ),
    width: "15%",
  },
];

const ClientManament = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="md:ml-6 h-100">
      <div className="text-2xl pb-10 font-bold uppercase text-gray-600 ">
        Quản lý khách hàng
      </div>
      <SearchFillter/>
      {/* <div
        style={{ borderColor: currentColor }}
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
        <div className="float-right">
          <NavLink
            to={"/form-client"}
            className="mb-3 rounded-lg mt-3 mr-3 px-4 flex text-sm items-center gap-1 py-2 bg-green-500 text-green-100  hover:bg-green-600 duration-300"
          >
            <span>Tạo mới</span>
            <AiOutlinePlus />
          </NavLink>
        </div>
        <TableDataCustom defaultPageSize={15} columns={columns} />
      </div>
    </div>
  );
};

export default ClientManament;
