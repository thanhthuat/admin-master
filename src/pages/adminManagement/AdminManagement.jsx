import { Input, Select, Tag } from "antd";
import { useStateContext } from "../../contexts/ContextProvider";
import { AiFillDelete, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import TableDataCustom from "../../components/common/TableDataCustom";
import moment from "moment";

const columns = [
  {
    title: "No.",
    width: "5%",
    render: (item, record, index) => <>{index + 1}</>,
  },
  {
    title: "Tên thành viên",
    dataIndex: "name",
    width: "15%",
    render: (name) => <p>{name.first}</p>,
  },
  {
    title: "Cấp bậc",
    width: "15%",
    render: () => <p>Quản lí</p>,
  },
  {
    title: "Email ",
    dataIndex: "name",
    render: (name) => (
      <Link className="text-blue-500" to={`/update-admin?name=${name.first}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
    ),
    width: "30%",
  },
  {
    title: "Ngày đăng kí",
    dataIndex: "dob",
    render: (dob) => (
      <div className="flex justify-center">
        <span>{moment(dob.date).format(`DD-MM-YYYY hh:mm:ss`)}</span>
      </div>
    ),
    width: "15%",
  },
  {
    title: "Ngày truy cập cuối cùng",
    dataIndex: "dob",
    render: (dob) => (
      <div className="flex justify-center">
        <span>{moment(dob.date).format(`DD-MM-YYYY hh:mm:ss`)}</span>
      </div>
    ),
    width: "15%",
  },
  {
    title: "Trạng thái",

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

const AdminManagement = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="md:ml-6 h-100">
      <div className="text-2xl pb-10 font-bold uppercase text-gray-600 ">
        Quản lý người quản lý
      </div>
      <div
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
      </div>
      <div className="bg-white border-t-4 my-6 ">
        <div className="float-right">
          <button className="mb-3 rounded-lg mt-3 mr-3 px-4 flex text-sm items-center gap-1 py-2 bg-red-500 text-red-100  hover:bg-red-600 duration-300">
            <span>Xóa mục đã chọn</span>
            <AiFillDelete />
          </button>
        </div>
        <TableDataCustom defaultPageSize={20} columns={columns} />
      </div>
    </div>
  );
};

export default AdminManagement;
