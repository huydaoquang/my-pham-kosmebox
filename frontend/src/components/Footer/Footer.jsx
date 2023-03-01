import img from "../../assets/images/bocongthuong.png";

const Footer = () => {
  return (
    <footer className=" border-t-4 border-red-500  bg-[#E5E5E5] w-full">
      <div className="max-w-[1200px] flex flex-wrap m-auto  gap-10  py-5 ">
        <div className="">
          <h4 className="font-semibold pb-5">THÔNG TIN CHUNG</h4>
          <div className="leading-6 text-sm ">
            <li>Về Chúng Tôi</li>
            <li>Chính sách riêng tư</li>
            <li>Câu hỏi Thường Gặp</li>
            <li>Chính sách bảo mật thông tin</li>
            <li>Chính sách bảo hành đổi trả</li>
            <li>Chính sách thanh toán</li>
            <li>Chính sách Giao, nhận hàng và kiểm tra hàng</li>
            <li>
              <img src={img} alt="" className="w-[222px]" />
            </li>
          </div>
        </div>
        <div>
          <h4 className="font-semibold pb-5">CHĂM SÓC KHÁCH HÀNG</h4>
          <div className="leading-6 text-sm ">
            <li>liên hệ</li>
          </div>
        </div>
        <div>
          <h4 className="font-semibold pb-5">CÁC THÔNG TIN KHÁC</h4>
          <div className="leading-6 text-sm ">
            <li>Thương hiệu</li>
            <li>Khuyến mãi</li>
            <li>Bí quyết làm đẹp</li>
          </div>
        </div>
        <div>
          <h4 className="font-semibold pb-5">THÔNG TIN</h4>
          <div className="leading-6 text-sm  w-56">
            <p className="font-bold">CÔNG TY TNHH ASIALFT</p>
            <span className="font-bold">Địa chỉ: </span>
            <span>
              96 Phạm Thị Tánh, Phường 4, Quận 8, Thành phố Hồ Chí Minh, Việt
              Nam
            </span>
            <p>
              <span className="font-bold">Hotline: </span> (+84) 775750185 -
              (+84) 778871783
            </p>
            <p>
              <span className="font-bold">Email: </span> info@kosmebox.com
            </p>
            <p>
              <span className="font-bold">GPKD: </span> 0315476762 do Sở Kế
              hoạch và Đầu tư thành phố Hồ Chí Minh cấp ngày 14 tháng 01 năm
              2019{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#f2f2f2] p-6">
        <span>Bản quyền thuộc về Kosmebox Pte. Ltd.</span>
      </div>
    </footer>
  );
};

export default Footer;
