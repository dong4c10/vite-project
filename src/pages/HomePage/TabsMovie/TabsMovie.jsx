import React, { useEffect, useState } from "react";
import { https } from "../../../service/config";
import { Tabs } from "antd";
import moment from "moment/moment";
const onChange = (key) => {
  console.log(key);
};
// const items = [
//   {
//     key: "1",
//     label: `Tab 1`,
//     children: `Content of Tab Pane 1`,
//   },
//   {
//     key: "2",
//     label: `Tab 2`,
//     children: `Content of Tab Pane 2`,
//   },
//   {
//     key: "3",
//     label: `Tab 3`,
//     children: `Content of Tab Pane 3`,
//   },
// ];
export default function TabsMovie() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    https
      .get(
        "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03"
      )
      .then((res) => {
        console.log("res: ", res);
        setMovie(res.data.content);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);
  let renderDanhSachPhim = (danhSachPhim) => {
    return danhSachPhim.map((phim, i1) => {
      // console.log("phim: ", phim);
      return (
        <div key={i1}>
          <div className="p-5 flex space-x-4">
            <img
              className="w-32 h-40 object-cover "
              src={phim.hinhAnh}
              alt=""
            />
            {/* <h3 className="">{phim.tenPhim}</h3> */}
            <div className="grid grid-cols-2 ml-5 gap-2 w-1/2 text-center ">
              {phim.lstLichChieuTheoPhim.slice(0, 4).map((lichChieu, i2) => {
                //moment js
                return (
                  <div key={i2}>
                    {/* <p>{renderDanhSachPhim(lichChieu.danhSachPhim.tenPhim)}</p> */}
                    <div className="border border-solid text-white bg-red-800 h-12 rounded-md leading-10">
                      <p>
                        {moment(lichChieu.ngayChieuGioChieu).format(
                          "DD/MM/YYYY ~ mm:hh"
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  };

  let renderHeThongRap = () => {
    return movie.map((heThong, index) => {
      return {
        key: index,
        label: <img className="w-20" src={heThong.logo} alt="" />,
        children: (
          <Tabs
            tabPosition="left"
            defaultActiveKey="1"
            items={heThong.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.tenCumRap,
                label: (
                  <div className="w-80 whitespace-normal text-left">
                    <h3 className="text-red-900  ">{cumRap.tenCumRap}</h3>
                    <p className="truncate ">{cumRap.diaChi}</p>
                    <p className="text-red-900 font-bold">[chi tiết]</p>
                  </div>
                ),
                children: renderDanhSachPhim(cumRap.danhSachPhim),
              };
            })}
          ></Tabs>
        ),
      };
    });
  };
  return (
    <div className="container pb-96">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={renderHeThongRap()}
        onChange={onChange}
      />
    </div>
  );
}
