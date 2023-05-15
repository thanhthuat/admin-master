import { NavLink } from "react-router-dom";
import moment from "moment";
import { AiFillSetting, AiOutlinePlus } from "react-icons/ai";
import TableDataCustom from "../../components/common/TableDataCustom";
import { MdDelete } from "react-icons/md";
const columns = [
  {
    title: "No.",
    width: "5%",
    render: (item, record, index) => <>{index + 1}</>,
  },
  {
    title: "Tựa đề",
    dataIndex: "picture",
    render: (picture) => (
      <div className="flex items-center gap-3">
        <div className="w-24 h-16 ">
          <img
            style={{ height: "65px", margin: "auto" }}
            className="object-cover rounded-md"
            src={picture.large}
            alt=""
          />
        </div>
        <p>Tựa đề hình ảnh</p>
      </div>
    ),
    width: "40%",
  },
  {
    title: "Categories ",

    render: () => <p>Chính trị</p>,
    width: "10%",
  },
  {
    title: "Caption",

    render: () => (
      <p className=" truncate w-72">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ab nisi
        laborum. Voluptatem animi consequuntur fugit rerum. Consequuntur
        temporibus ipsa illo tenetur ut excepturi maxime, iusto necessitatibus
        magnam. Voluptate odit labore dolorem ab molestiae animi fugit corrupti
        maxime dicta eveniet officia quas illo eos minima aliquam sapiente minus
        optio ipsam consequuntur, laborum omnis officiis temporibus laboriosam
        eligendi! Ullam autem nostrum dicta ipsum minima sint deserunt doloribus
        quibusdam adipisci magni suscipit, quaerat, voluptatibus perspiciatis
        veritatis recusandae tenetur voluptatum voluptate iste dignissimos
        excepturi fuga perferendis optio. Maxime consequuntur quam ea debitis
        corrupti, dolores laudantium atque accusamus, quas vel excepturi,
        possimus quis reiciendis?
      </p>
    ),
    width: "30%",
  },

  {
    title: "Ngày sử dụng",
    dataIndex: "dob",
    render: (dob) => (
      <div className="flex justify-center">
        <span>{moment(dob.date).format(`DD/MM/YYYY`)}</span>
      </div>
    ),
    width: "15%",
  },
];

const DBImagesManagement = () => {
  return (
    <div className="md:ml-6 h-100">
      <div className="text-2xl pb-10 font-bold uppercase text-gray-600 ">
        Quản lí DB hình ảnh
      </div>

      <div className="bg-white rounded-2xl my-3 ">
        <div className="flex md:flex-row flex-col justify-between items-center ml-3">
          <h6 className="text-xl md:mt-0 mt-3">Danh sách hình ảnh</h6>
          <div className="flex md:gap-3 md:flex-row flex-col items-cemter">
            <NavLink
              to={"/setting-categories"}
              className="md:my-3 my-1 rounded-lg  px-4 flex text-sm items-center gap-1 py-2 bg-gray-500 text-gray-100  hover:bg-gray-600 duration-300"
            >
              <span>Thiết lập categories hình ảnh</span>
              <AiFillSetting />
            </NavLink>
            <NavLink to={"/create-image"} className="rounded-lg md:my-3 my-1 px-4 flex text-sm items-center gap-1 py-2 bg-green-500 text-green-100  hover:bg-green-600 duration-300">
              <span>Tạo mới hình ảnh</span>
              <AiOutlinePlus />
            </NavLink>
            <button className="rounded-lg md:my-3 my-1 px-4 flex text-sm items-center gap-1 py-2 bg-rose-500 text-red-100  hover:bg-rose-600 duration-300">
              <span> Xóa bài báo đã chọn</span>
              <MdDelete />
            </button>
          </div>
        </div>
        <TableDataCustom defaultPageSize={20} columns={columns} />
      </div>
    </div>
  );
};

export default DBImagesManagement;
