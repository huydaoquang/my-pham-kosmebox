const Cart = () => {
  return (
    <section className="p-5">
      <div className="max-w-[1100px] flex flex-col gap-5 m-auto pr-7 text-sm">
        <span className="bg-[#F2F2F2] w-full py-4 font-bold border-b-2 border-neutral-500 ">
          Giỏ Hàng
        </span>
        <p>Giỏ hàng của bạn đang trống!</p>
        <div className="flex justify-end border-dotted border border-neutral-500 p-5">
          <button className="bg-[#F5145B]  ease-in-out duration-300 text-white uppercase p-2 px-3">
            Tiếp Tục
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
