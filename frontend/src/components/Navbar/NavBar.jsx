import { AiFillHome, AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="h-10 bg-[#ED145B]">
      <div className="max-w-[1200px] m-auto h-full">
        <ul className="flex items-center gap-4 h-full text-white font-bold ">
          <Link to="/">
            <AiFillHome size={25} />
          </Link>
          <li>THƯƠNG HIỆU</li>
          <li>TRANG ĐIỂM</li>
          <li>DƯÕNG DA</li>
          <li>BỘ SẢN PHẨM</li>
          <li>NƯỚC HOA</li>
          <li>DÙNG THỬ</li>
          <li>HỘP QUÀ KOS</li>
          <div className="flex items-center gap-4 ml-auto">
            <li>
              <AiFillLike />
            </li>
            <li>Top Review </li>
            <li>Hướng Dẫn</li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
