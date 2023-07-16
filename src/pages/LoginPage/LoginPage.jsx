import { Button, Checkbox, Form, Input, message } from "antd";
import React from "react";
import { https } from "../../service/config";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { localServ } from "../../service/localStoreService";
import Lottie from "lottie-react";
import  bgAnimation  from "./animation_ljzua8fu.json";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default function LoginPage() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        console.log("res: ", res);
        message.success("Đăng nhập thành công");
        //đẩy data lên redux =
        dispatch(setLogin(res.data.content));
        localServ.setUser(res.data.content);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log("error: ", error);
        message.error("Đăng nhập thất bại");
      });
  };

  return (
    <div className="bg-orange-500 h-screen flex items-center">
      <div className="container p-10 bg-white rounded flex items-center">
        <div className="w-1/2">
          <Lottie animationData={bgAnimation} />
        </div>
        <div className="w-1/2">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                className="bg-orange-400 hover:bg-white"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
