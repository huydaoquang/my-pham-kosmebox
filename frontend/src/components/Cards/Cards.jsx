import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../constants/CartContext";

const Cards = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  const { id, title, images, price, widthCard, heightImg } = props;
  const { setAddToCart, setPriceSum } = useContext(CartContext);
  console.log(typeof width);

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
    <section className={widthCard}>
      <Link to={`/${id}`}>
        <img src={images} alt="" className={heightImg} />
      </Link>
      <div className="flex flex-col items-center justify-between flex-1">
        <p className="text-center text-sm ">{title}</p>
        <div className="flex flex-col items-center gap-2">
          {/* <span className="line-through opacity-80">{price} đ</span> */}
          <span className="text-[#F01053]">{price.toLocaleString()} đ</span>
          {isAdded ? (
            <button
              disabled
              className="bg-[#eb7095] p-2 text-white px-5 rounded-md text-xs"
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
