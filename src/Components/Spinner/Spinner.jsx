import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerSlice);
  return  isLoading ? (
    <div
      style={{ backgroundColor: "#FF6666", opacity: "0.5" }}
      className="h-screen w-screen fixed top-0 left-0 z-20 flex justify-center items-center"
    >
      <RingLoader color="#36d7b7" />
    </div>
  ) : (
    <></>
  );
}
