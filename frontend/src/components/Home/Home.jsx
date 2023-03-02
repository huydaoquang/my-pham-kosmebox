import Button from "../Button/Button";
import Cards from "../Cards/Cards";
import Title from "../Title/Title";

const Home = (props) => {
  const { cosmetics } = props;

  return (
    <main className="bg-[#f2f2f2]  ">
      <div className="max-w-[1200px] mx-auto">
        <Title title={"ĐỒNG GIÁ 9K - 79K"} />
        <div className="flex flex-wrap justify-center gap-7 my-6">
          {cosmetics.slice(0, 5).map((item) => (
            <Cards
              widthCard="flex flex-col w-[216px] h-[394px] bg-white p-[10px] mb-5 text-sm hover:shadow-md cursor-pointer ease-in-out duration-300"
              heightImg="h-[220px] mb-2"
              key={item.id}
              id={item.id}
              title={item.title}
              images={item.images}
              price={item.price}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button label={"Xem Thêm"} />
        </div>
        <Title title={"  DEAL SỐC XẢ KHO - ƯU  ĐÃI ĐẾN 70% "} />
        <div className="flex flex-wrap justify-center gap-3 bg-white py-3 ">
          {cosmetics.slice(6, 14).map((item) => (
            <Cards
              widthCard="flex flex-col w-[285px] h-[426px] bg-white p-[10px] mb-2 text-sm hover:shadow-md cursor-pointer ease-in-out duration-300 border"
              heightImg="h-[256px] mb-2"
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
              widthCard="flex flex-col w-[216px] h-[394px] bg-white p-[10px] mb-5 text-sm hover:shadow-md cursor-pointer ease-in-out duration-300"
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
              widthCard="flex flex-col w-[290px] h-[426px] bg-white p-[10px] mb-2 text-sm hover:shadow-md cursor-pointer ease-in-out duration-300"
              heightImg="h-[256px] mb-2"
              key={item.id}
              id={item.id}
              title={item.title}
              images={item.images}
              price={item.price}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button label={"Xem Thêm"} />
        </div>
      </div>
    </main>
  );
};

export default Home;
