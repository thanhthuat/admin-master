import CountUp from "react-countup";
import {
  dataCreateNews,
  dataRequestClient,
  dataService,
  earningData,
} from "../../data/dummy";

const DarshBoard = () => {
  return (
    <div className=" flex px-3 w-full flex-col gap-4 items-start">
      {/* card */}
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full  gap-2">
        {earningData.map((item, index) => (
          <div
            key={index}
            className="flex   gap-6 items-center p-6   rounded-2xl"
            style={{ background: "rgb(255, 255, 255)" }}
          >
            <div
              className={`flex text-xl items-center justify-center rounded-full w-12 h-12  ${item.textColor} ${item.bgColor}`}
            >
              {item.icon}
            </div>
            <div className="flex gap-3 flex-col">
              <p className="text-gray-400 font-medium">{item.title}</p>
              <span className="text-3xl font-bold text-sky-600">
                <CountUp start={0} end={item?.amount} />
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* center */}
      <div className="w-full flex flex-col xl:flex-row gap-3  rounded-2xl">
        {/*đăng kí news */}
        <div className="bg-white rounded-2xl p-6 xl:basis-2/3 basis-full ">
          <h6 className="text-xl pb-6 font-semibold text-gray-500">
            Đăng kí news
          </h6>
          <table className="min-w-full divide-y md:table block overflow-x-scroll overflow-hidden divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Mã service
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tên công ty
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ngày Đăng kí
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dataCreateNews.map((item) => (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.codeService}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.nameCompany}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.createDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Hiện trạng service */}
        <div className="bg-white flex flex-col  rounded-2xl p-6 xl:basis-1/3 basis-full">
          <h6 className="text-xl pb-6 font-semibold text-gray-500">
            Hiện trạng service
          </h6>
          <div className="w-full flex flex-col  gap-3 p-3">
            {dataService.map((item) => (
              <div className="flex border-b-2 h-20 pb-3 justify-between items-center ">
                <span className="text-xl text-gray-500">
                  {item.nameService}
                </span>
                <span className="font-bold text-xl text-gray-500">
                  {item.member}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="w-full flex flex-col 2xl:flex-row gap-3  rounded-2xl">
        {/* left */}
        <div className="bg-white rounded-2xl p-6 2xl:w-2/3 w-full ">
          <h6 className="text-xl pb-6 font-semibold text-gray-500">
            Hiện trạng yêu cầu thao tác
          </h6>
          <table className="min-w-full divide-y md:table block overflow-x-scroll overflow-hidden divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tên công ty
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Yêu cầu thao tác
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ngày yêu cầu
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dataRequestClient.map((item) => (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.nameCompany}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.request}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* right */}
        <div className="bg-white flex flex-col  rounded-2xl p-6 2xl:w-1/3 w-full">
          <h6 className="text-xl pb-6 font-semibold text-gray-500">
            Tiếp nhận thắc mắc
          </h6>
          <table class="border block w-full">
            <tbody class="w-full block">
              <tr class="border block ">
                <td class="p-3  text-gray-500 block truncate items-center gap-3  ">
                  <p class="cursor-pointer  truncate ">
                    Đây là hướng dẫn về việc không thanh toán phí sử dụng.
                  </p>
                </td>
              </tr>
              <tr class="border block">
                <td class="p-3 text-gray-500 block  items-center gap-3  ">
                  <p class="cursor-pointer   truncate">
                    Không có ảnh đại diện trong bài viết liên
                  </p>
                </td>
              </tr>
              <tr class="border block">
                <td class="p-3 text-gray-500 block truncate items-center gap-3  ">
                  <p class="cursor-pointer truncate">
                    Thông tin bảo trì máy chủ từ ngày 13 tháng 8 ~ ngày 14 tháng
                    8.
                  </p>
                </td>
              </tr>
              <tr class="border block">
                <td class="p-3 text-gray-500 block  items-center gap-3  ">
                  <p class="cursor-pointer  truncate ">
                    Bài viết đã được sửa chữa.
                  </p>
                </td>
              </tr>
              <tr class="border block">
                <td class="p-3 text-gray-500 block  items-center gap-3  ">
                  <p class="cursor-pointer  truncate">
                    Đây là hướng dẫn về việc không thanh toán phí sử dụng.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DarshBoard;
