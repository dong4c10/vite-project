import React from "react";
import { Carousel } from "antd";
import "./style.css";
// const contentStyle = {
//   margin: 0,
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };
export default function Banner() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    // <Carousel afterChange={onChange}>
    //   <div >
    //     <div >
    //       <img
    //         src="https://i.ytimg.com/vi/igPsx57_I9Y/maxresdefault.jpg"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    //   <div>
    //     <div>
    //       <img
    //         src="https://i.ytimg.com/vi/igPsx57_I9Y/maxresdefault.jpg"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    //   <div>
    //     <div>
    //       <img
    //         src="https://i.ytimg.com/vi/igPsx57_I9Y/maxresdefault.jpg"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    //   <div>
    //     <div>
    //       <img
    //         src="https://i.ytimg.com/vi/igPsx57_I9Y/maxresdefault.jpg"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </Carousel>
    <div className="relative">
      <div
        id="default-carousel"
        className="relative w-full z-0"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Item 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://i.ytimg.com/vi/igPsx57_I9Y/maxresdefault.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2022/12/17/avatar1671258574464-1671258574641567784020.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://ss-images.saostar.vn/wp700/2023/7/13/pc/1689238665333/saostar-vssgg04505ha4qmb.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://emagazine24.net/wp-content/uploads/2023/07/vd7.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://i.imgur.com/JzzMIid.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30  flex space-x-3 -translate-x-1/2 bottom-12 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to={0}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to={1}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to={2}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to={3}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to={4}
          />
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div
        style={{
          left: "50%",
          width: "100%",
          bottom: "0",
          height: "80px",
          display: "block",
          position: "absolute",
          transform: "translate(-50%,50%)",
          // top:"25%",
          // marginBottom:"460px",
          zIndex:"1"
        }}
      >
        <div className="bg-white list-movie rounded-xl h-20 w-2/3 flex justify-around items-center">
          <div className="flex jss271">
            <div>
              <select name="" id="" className="w-40 border-white select-one">
                <option className="" selected>Phim</option>
                <option value="">1</option>
              </select>
            </div>
          </div>
          <div className="flex jss271">
            <div>
              <select name="" id="" className="w-40 border-white">
                <option selected>Rạp</option>
                <option value="">1</option>
              </select>
            </div>
          </div>
          <div className="flex jss271">
            <div>
              <select name="" id="" className="w-40 border-white">
                <option selected>Ngày Giờ Chiếu</option>
                <option value="">1</option>
              </select>
            </div>
          </div>
          <div>
            <button className="w-full inline-block text-center rounded-lg py-3 bg-red-700 p-3 text-white  transition duration-500 hover:bg-red-800">
              MUA VÉ NGAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
