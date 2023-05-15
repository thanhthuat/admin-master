import { AiFillSetting, AiOutlineBarChart } from "react-icons/ai";
import { BsPencilSquare, BsCardImage } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { RiUserSettingsFill } from "react-icons/ri";
import { MdAdminPanelSettings, MdFormatListNumbered } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { GrArticle } from "react-icons/gr";
import { IoMdRefreshCircle } from "react-icons/io";
import { ImUser, ImUserMinus, ImUsers } from "react-icons/im";

export const links = [
  {
    name: "Quản lý khách hàng",
    icon: <BsPencilSquare />,
    slug: "quan-li-khach-hang",
  },
  {
    name: "Đăng kí news",
    icon: <MdFormatListNumbered />,
    slug: "dang-ki-news",
  },
  {
    name: "Quản lý yêu cầu thao tác",
    icon: <BiCategory />,
    slug: "quan-li-request",
  },
  {
    name: "Quản lí câu hỏi",
    icon: <AiFillSetting />,
    slug: "quan-li-cau-hoi",
  },
  {
    name: "Điều khoản thông báo",
    icon: <GrArticle />,
    slug: "dieu-khoan-thong-bao",
  },
  {
    name: "Quản lý dữ liệu hình ảnh",
    icon: <MdAdminPanelSettings />,
    slug: "db-images-management",
  },
  {
    name: "Quản lý người quản lý",
    icon: <TiShoppingCart />,
    slug: "admin-management",
  },
];

export const earningData = [
  {
    icon: <ImUser />,
    amount: 155,
    percentage: "-4%",
    title: "Khách hàng đang sử dụng",
    textColor: "text-sky-600",
    bgColor: "bg-cyan-200",
  },
  {
    icon: <IoMdRefreshCircle />,
    amount: 12,
    percentage: "+23%",
    title: "Khách hàng dừng tạm thời",
    textColor: "text-sky-600",
    bgColor: "bg-cyan-200",
  },
  {
    icon: <ImUserMinus />,
    amount: 21,
    percentage: "+38%",
    title: "Khách hàng ngưng sử dụng",
    textColor: "text-sky-600",
    bgColor: "bg-cyan-200",
  },
  {
    icon: <ImUsers />,
    amount: 231,
    percentage: "-12%",
    title: "Tổng khách hàng",
    textColor: "text-sky-600",
    bgColor: "bg-cyan-200",
  },
];

export const dataCreateNews = [
  {
    codeService: "BA",
    nameCompany: "VNexpress",
    createDate: "2023-03-20",
  },
  {
    codeService: "ST",
    nameCompany: "VNexpress",
    createDate: "2023-03-06",
  },
  {
    codeService: "BA",
    nameCompany: "VNexpress",
    createDate: "2023-02-19",
  },
  {
    codeService: "LU",
    nameCompany: "VNexpress",
    createDate: " 2022-12-27",
  },
  {
    codeService: "BA",
    nameCompany: "VNexpress",
    createDate: " 2022-11-14",
  },
  {
    codeService: "BA",
    nameCompany: "VNexpress",
    createDate: "  2022-11-03",
  },
];

export const dataService = [
  {
    nameService: "BASIC",
    member: 1124,
  },
  {
    nameService: "STANDARD ",
    member: 26,
  },
  {
    nameService: "LUXURY",
    member: 6,
  },
  {
    nameService: "PREMIUM",
    member: 6,
  },
];

export const dataRequestClient = [
  {
    nameCompany: "VnExpress",
    request: "Thông tin yêu cầu",
    date: "2022-10-25",
  },
  {
    nameCompany: "Tuổi trẻ",
    request: "Thông tin yêu cầu",
    date: "2022-08-15",
  },
  {
    nameCompany: "Thanh niên",
    request: "Thông tin yêu cầu",
    date: "2022-08-15",
  },
  {
    nameCompany: "Yarn",
    request: "Thông tin yêu cầu",
    date: "2022-08-15",
  },
];
