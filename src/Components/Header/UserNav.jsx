import React from "react";
import { useSelector } from "react-redux";
import { localServ } from "../../service/localStoreService";
import { message } from "antd";

export default function UserNav() {
  let user = useSelector((state) => state.userSlice.userInfo);
  console.log("user: ", user);
  let btnClass = "px-5 py-2 mr-2 rounded border border-black";
  let handleLogout = () => {
    localServ.removeUser();
    window.location.reload();
  };
  let renderContent = () => {
    if (user) {
      return (
        <>
          <span>{user.hoTen}</span>
          <button onClick={handleLogout} className={btnClass}>
            Đăng Xuất
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={() => {
              window.location.href = "/login";
            }}
            className={btnClass}
          >
            Đăng Nhập
          </button>
          <button className={btnClass}>Đăng Kí</button>
        </>
      );
    }
  };
  return <div className="flex items-center space-x-5">{renderContent()}</div>;
}
