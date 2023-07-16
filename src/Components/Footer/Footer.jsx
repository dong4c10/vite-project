import React from "react";
import {
  TwitterOutlined,
  InstagramOutlined,
  GooglePlusOutlined,
  FacebookOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
import { Desktop, Mobile, Tablet } from "../../responsive/responsive";
import FooterMobile from "./FooterMobile";
import FooterDeskTop from "./FooterDeskTop";
import FooterTablet from "./FooterTablet";
// const contentStyle = {
//   margin: 0,
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "black",
// };

export default function Footer() {
  return (
    <div>
      <footer
        style={{
          backgroundColor: "#17202A",
          height: "370px",
        }}
      >
        <div>
          <div className="container">
            <div className="flex justify-around">
              <div className="col-lg-4 col-sm-6 mt-16">
                <a href="#">
                  <img
                    className="rounded-2xl w-1/2"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </a>
                <div className="footer-contact text-white">
                  <p>
                    Support:
                    <a className="underline " href="#">
                      Support@Wefinet.Vn
                    </a>
                  </p>
                  <p>Hotline: 1900 1722</p>
                  <ul className="flex gap-4 mt-4">
                    <li className="">
                      <FacebookOutlined className="w-1/2" />
                    </li>
                    <li>
                      <TwitterOutlined />
                    </li>
                    <li>
                      <InstagramOutlined />
                    </li>
                    <li>
                      <GooglePlusOutlined />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6  mt-16">
                <div>
                  <h1 className="text-white  font-bold text-xl mb-6">
                    CHÍNH SÁCH
                  </h1>
                  <ul className="text-white">
                    <li>
                      <a href="#"></a>
                      <DoubleRightOutlined />
                      Điều Khoản Chung
                    </li>
                    <li>
                      <a href="#"></a>
                      <DoubleRightOutlined />
                      Chính Sách Thanh Toán
                    </li>
                    <li>
                      <a href="#"></a>
                      <DoubleRightOutlined />
                      Chính Sách Bảo Mật
                    </li>
                    <li>
                      <a href="#"></a>
                      <DoubleRightOutlined />
                      Chính Sách Bảo Mật
                    </li>
                    <li>
                      <a href="#"></a>
                      <DoubleRightOutlined />
                      Chính Sách Thanh Toán
                    </li>
                    <li>
                      <a href="#"></a>
                      <DoubleRightOutlined />
                      Điều Khoản Chung
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6  mt-16">
                <div>
                  <h1 className="text-white  font-bold text-xl mb-6">
                    DOWNLOAD APP
                  </h1>
                  <p className="text-white">
                    Tải Ngay Ứng Dụng Đặt Vé Online Cho Dế Yêu Của Bạn !
                  </p>
                  <ul className="flex items-center ">
                    <li className="m-0 p-0">
                      <a href="#">
                        <img
                          className="w-56"
                          src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png?hl=vi"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="w-44"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Download_on_the_App_Store_Badge_IT_RGB_blk.svg/800px-Download_on_the_App_Store_Badge_IT_RGB_blk.svg.png"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-12" />
        <div className="copyright-area">
          <div className="container text-center">
            <div className="mt-4">
              <div className="col-lg-12 ">
                <div className="copyright-box ">
                  <p className="text-white ">
                    2019 © StarLight. All Rights Reserved - Design By KingPro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    // <div>
    //   <Desktop>
    //     <FooterDeskTop />
    //   </Desktop>
    //   <Tablet>
    //     <FooterTablet />
    //   </Tablet>
    //   <Mobile>
    //     <FooterMobile />
    //   </Mobile>

    // </div>
  );
}
