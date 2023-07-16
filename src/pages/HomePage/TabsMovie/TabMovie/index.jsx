import React from 'react'

export default function TabMovie() {
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
}