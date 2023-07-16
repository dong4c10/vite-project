import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { https } from "../../service/config";
import { Progress } from "antd";

export default function DetailPage() {
  const [movie, setMovie] = useState({});
  // useParams() => lấy url hiện tại của browser
  let { id } = useParams();
  useEffect(() => {
    console.log("params: ", id);
    https
      .get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((res) => {
        console.log("res: ", res);
        setMovie(res.data.content);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);

  return (
    <div className="container flex items-center justify-center">
      <img className="" src={movie.hinhAnh} width={300} />
      <h2>{movie.tenPhim}</h2>
      <Progress
        type="circle"
        percent={movie.danhGia* 10}
        format={(percent) => `${percent / 10}  Điểm`}
      >
        {" "}
      </Progress>
    </div>
  );
}
