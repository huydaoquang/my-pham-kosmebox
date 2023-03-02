import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../constants/CartContext";

const Cart = () => {
  const { addToCart, priceSum, setAddToCart, setPriceSum } =
    useContext(CartContext);

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handlePay = () => {
    setAddToCart([{}]);
    alert("Thanh toán thành công", priceSum);
    setPriceSum(0);
  };

  return (
    <section className="p-5">
      <div className="max-w-[1200px] mx-auto">
        {priceSum ? (
          <>
            <table className="w-full ">
              <thead>
                <tr className="flex justify-between">
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Đơn Giá</th>
                </tr>
              </thead>
            </table>
            {addToCart.slice(1).map((item) => (
              <div
                className="flex justify-between items-center gap-5 border-b"
                key={item.id}
              >
                <img
                  src={item.images}
                  alt=""
                  className="w-[130px] h-[150px] object-cover my-2"
                />
                <div className="text-red-500 w-96 ">{item.title}</div>
                <div className="flex gap-3">
                  <button className="bg-[#fff] px-2 py-1 border">+</button>
                  <button className="bg-[#fff] px-2 py-1 border">1</button>
                  <button className="bg-[#fff] px-2 py-1 border">-</button>
                </div>
                <div className="text-red-500">
                  {item.price.toLocaleString()} đ
                </div>
              </div>
            ))}
            <div className="w-full flex justify-end gap-5 py-5">
              <span>Tổng cộng : </span>
              <span className="text-red-500">
                {priceSum.toLocaleString()} đ
              </span>
            </div>
            <div className="flex justify-between p-5 border">
              <button
                onClick={handleGoHome}
                className="bg-[#f5145b] hover:bg-red-500 ease-in-out duration-300 text-white px-4 py-3 uppercase"
              >
                tiếp tục mua hàng
              </button>
              <button
                onClick={handlePay}
                className="bg-[#f5145b] hover:bg-red-500 ease-in-out duration-300 text-white px-4 py-3 uppercase"
              >
                thanh toán
              </button>
            </div>
          </>
        ) : (
          <div className=" flex flex-col gap-5 m-auto pr-7 text-sm">
            <span className="bg-[#e1e0e0] w-full py-3 font-bold border-b-2 border-neutral-500 ">
              Giỏ Hàng
            </span>
            <p>Giỏ hàng của bạn đang trống!</p>
            <div className="flex justify-end border-dotted border border-neutral-500 p-5">
              <button
                onClick={handleGoHome}
                className="bg-[#F5145B]  ease-in-out duration-300 text-white uppercase p-2 px-3"
              >
                Tiếp Tục
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
