import { useContext, useState } from "react";
import { CartContext } from "../../constants/CartContext";

const Cards = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  const { id, title, images, price } = props;
  const { setAddToCart, setPriceSum } = useContext(CartContext);

  const handleAddToCart = () => {
    setIsAdded(true);
    const newItems = {
      id: id,
      title: title,
      images: images,
      price: price,
    };
    setAddToCart((items) => [...items, newItems]);
    setPriceSum((prevPice) => (prevPice += Number(price)));
  };

  return (
    <section className="flex flex-col  w-[216px] h-[394px] bg-white p-[7px] mb-5 text-sm hover:shadow-md cursor-pointer ease-in-out duration-300">
      <img
        src={images}
        alt=""
        className="w-[202px] h-[202px] object-cover mb-2"
      />
      <div className="flex flex-col items-center justify-between flex-1">
        <p className="text-center ">{title}</p>
        <div className="flex flex-col items-center gap-2">
          {/* <span className="line-through opacity-80">{price} đ</span> */}
          <span className="text-[#F01053]">{price.toLocaleString()} đ</span>
          {isAdded ? (
            <button
              disabled
              className="bg-[#eb7095] p-2 text-white px-5 rounded-md"
              onClick={handleAddToCart}
            >
              Đã Thêm vào giỏ hàng
            </button>
          ) : (
            <button
              className="bg-[#F01053] hover:bg-red-600 ease-in-out duration-300 p-2 text-white px-5 rounded-md"
              onClick={handleAddToCart}
            >
              Mua Hàng
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cards;
