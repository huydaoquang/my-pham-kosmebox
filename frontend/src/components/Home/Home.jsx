import { SlDiamond } from "react-icons/sl";
import { AiOutlineGift, AiFillLike } from "react-icons/ai";

import Button from "../Button/Button";
import Cards from "../Cards/Cards";
import Images from "../Images/Images";
import Title from "../Title/Title";

const Home = (props) => {
  const { cosmetics } = props;

  return (
    <main className="home:px-5 bg-[#f2f2f2]">
      <Images
        src="https://www.kosmebox.com/image/data/banner2021/banner-sale-cuoi-nam/5dc13313549d9ec3c78c.jpg"
        className="w-full mt-1"
      />
      <div className="max-w-[1200px] mx-auto">
        <div className="xs:pl-5 sm:flex-col flex justify-between flex-wrap gap-2 my-6">
          <div className=" flex items-center gap-10">
            <div className="flex items-center justify-center shrink-0 w-[50px] h-[50px] rounded-full border border-redCustom">
              <SlDiamond className="text-redCustom " size={18} />
            </div>
            <div className="text-sm">
              <p className="xs:text-left sm:text-left text-redCustom font-semibold text-center pb-2">
                TÍCH LUỸ ĐIỂM & VIP
              </p>
              <p>Tích Luỹ Điểm & Kích Hoạt VIP Thêm Các Ưu Đãi</p>
            </div>
          </div>
          <div className=" flex items-center gap-10">
            <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full border border-redCustom">
              <AiOutlineGift className="text-redCustom " size={18} />
            </div>
            <div className="text-sm">
              <p className="xs:text-left sm:text-left text-redCustom font-semibold text-center pb-2">
                TÍCH ĐIỂM ĐỔI QUÀ
              </p>
              <p>Áp dụng từ VIP2 trở lên</p>
            </div>
          </div>
          <div className=" flex items-center gap-10">
            <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full border border-redCustom">
              <AiFillLike className="text-redCustom " size={18} />
            </div>
            <div className="text-sm">
              <p className="xs:text-left sm:text-left text-redCustom font-semibold text-center pb-2">
                Hàng Chính Hãng
              </p>
              <p>Đảm bảo hàng thật chính hãng</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-5 py-2 bg-white  ">
          <AiFillLike size={20} className="text-redCustom" />
          <p className="text-redCustom text-sm font-semibold ">
            Miễn phí hoàn trả sản phẩm trong 7 ngày
          </p>
          <Button
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white px-6 py-2 ease-linear duration-800"
            label="Xem Thêm"
          />
        </div>
        <Title title={"ĐỒNG GIÁ 9K - 79K"} />
        <div className="flex flex-wrap justify-center gap-4 my-6">
          {cosmetics.slice(0, 5).map((item) => (
            <Cards
              className="flex flex-col xs:w-[157px] xs:h-[355px] w-[216px] h-[394px] bg-white p-[10px] mb-5 text-sm hover:shadow-md cursor-pointer ease-in-out duration-300"
              heightImg="xs:w-[143px] xs:h-[159px] h-[220px] mb-2"
              key={item.id}
              id={item.id}
              title={item.title}
              images={item.images}
              price={item.price}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            label={"Xem Thêm"}
            className="bg-redCustom m-3 rounded-md text-white px-16 py-[10px] uppercase"
          />
        </div>
        <Title title={"  DEAL SỐC XẢ KHO - ƯU  ĐÃI ĐẾN 70% "} />
        <div className="flex flex-wrap justify-center gap-3 bg-white py-3 ">
          {cosmetics.slice(6, 14).map((item) => (
            <Cards
              className="flex flex-col w-[285px] h-[426px] bg-white p-[10px] mb-2 text-sm hover:shadow-md cursor-pointer ease-in-out duration-300 border"
              heightImg="h-[256px] mb-2 mx-auto"
              key={item.id}
              id={item.id}
              title={item.title}
              images={item.images}
              price={item.price}
            />
          ))}
        </div>
        <Title title={"  Sản Phẩm Bán Chạy Nhất "} />
        <div className="flex flex-wrap justify-center gap-7 my-6">
          {cosmetics.slice(15, 20).map((item) => (
            <Cards
              className="flex flex-col w-[216px] h-[394px] bg-white p-[10px] mb-5 text-sm hover:shadow-md cursor-pointer ease-in-out duration-300"
              heightImg="h-[220px] mb-2"
              key={item.id}
              id={item.id}
              title={item.title}
              images={item.images}
              price={item.price}
            />
          ))}
        </div>
        <Title title={"  Bí Quyết Làm Đẹp"} />
        <div className="flex flex-wrap justify-center gap-3 my-6">
          {cosmetics.slice(20, 24).map((item) => (
            <Cards
              className="flex flex-col w-[290px] h-[468px] bg-white p-[10px] mb-2 text-sm hover:shadow-md cursor-pointer ease-in-out duration-300"
              heightImg="h-[256px] mb-2 mx-auto"
              key={item.id}
              id={item.id}
              title={item.title}
              images={item.images}
              price={item.price}
              label={"Xem thêm"}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            label={"Xem Thêm"}
            className="bg-redCustom m-3 rounded-md text-white px-16 py-[10px] uppercase"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
