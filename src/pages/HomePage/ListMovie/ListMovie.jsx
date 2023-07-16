import React, { useEffect, useState } from "react";
import { https } from "../../../service/config";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);

  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03")
      .then((res) => {
        console.log("res: ", res);
        setMovieArr(res.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let renderMovieList = () => {
    return movieArr.map(({ hinhAnh, tenPhim, maPhim }) => {
      //card antd
      return (
        <Card
          key={maPhim}
          className="shadow-xl"
          hoverable
          style={{
            width: 240,
            marginTop:"100px"
          }}
          cover={
            <img className="h-60 object-cover" alt="example" src={hinhAnh} />
          }
        >
          <Meta title={tenPhim} />
          <NavLink
            className="w-full inline-block text-center rounded-lg py-3 bg-red-700 text-white mt-3 transition duration-500 hover:scale-75 cursor-pointer"
            to={`/detail/${maPhim}`}
          >
            Xem Phim
          </NavLink>
        </Card>
      );
    });
  };
  return (
    <div className="container grid grid-cols-4 gap-5">{renderMovieList()}</div>
  );
}
