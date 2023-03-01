import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { BsBoxArrowInRight, BsSearch } from "react-icons/bs";
import { IoLogoUsd } from "react-icons/io";

import logo from "../../assets/images/logo.jpg";
import girl from "../../assets/images/girl.png";
import user from "../../assets/images/user.png";
import { useContext } from "react";
import { CartContext } from "../../constants/CartContext";

const Header = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <header className=" mb-3 ">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-end text-xs gap-5 mt-3 ml-3">
          <div className="flex gap-2 items-center">
            <AiFillHeart size={15} />
            <Link to="/about-us">Về Kosmebox</Link>
          </div>
          <div className="flex gap-2 items-center">
            <FaUser size={15} className="text-red-600" />
            <Link to="/login">Đăng Nhập</Link>
          </div>
          <div className="flex gap-2 items-center">
            <BsBoxArrowInRight size={15} className="text-red-600" />
            <Link to="/register">Đăng Ký</Link>
          </div>
          <div className="flex gap-2 items-center">
            <IoLogoUsd size={15} />
            <Link to="/cart">Thanh Toán</Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-start gap-10  mt-1  relative">
          <Link to="/">
            <img src={logo} alt="" className="w-52 h-20" />
          </Link>
          <div className="flex items-end w-96 relative">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="border-solid border border-red-500 outline-none rounded-3xl text-sm px-4 py-2 w-full"
            />
            <BsSearch
              className="absolute right-3 top-[50px] text-red-500 cursor-pointer"
              size={20}
            />
          </div>
          <div className="grid grid-cols-2 items-end text-sm">
            <img src={girl} alt="" className="-mb-3" />
            <div className="flex flex-col cursor-pointer hover:text-red-500 ease-in-out duration-300">
              <span>Bí quyết </span>
              <span>làm đẹp</span>
            </div>
          </div>
          <div className="grid grid-cols-2 items-end text-sm">
            <img src={user} alt="" className="-mb-3" />
            <div className="flex flex-col cursor-pointer hover:text-red-500 ease-linear duration-300">
              <span>Tuyển </span>
              <span>CTV</span>
            </div>
          </div>
          <div className="absolute right-0 bottom-0">
            <Link to="/cart" className="flex relative cursor-pointer">
              <AiOutlineShoppingCart size={35} className="text-red-600" />
              <span className="bg-red-600 text-white px-[7px] py-1 rounded-full absolute -right-1 -top-1">
                {addToCart.length - 1}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
