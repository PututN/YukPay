import React from "react";
import { X } from "react-feather";

const ModalTopUp = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 bg-[#3A3D42] bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-3 rounded-lg flex flex-col w-1/3">
          <div className="flex items-center">
            <div className="flex-1 text-lg font-bold text-[#3A3D42]">Topup</div>
            <button onClick={() => onClose()}>
              <X style={{ color: "#3A3D42" }} />
            </button>
          </div>
          <div className="text-[#3A3D4299] text-base mt-5">
            Enter the amount of money, and click submit{" "}
          </div>
          <form className="flex flex-col w-full">
            <input type="number" className="bg-[#A9A9A999] text-center w-full my-10 py-3 rounded-md"></input>
            <div className="flex justify-end">
              <button className="bg-[#6379F4] px-7 py-2 rounded-md text-lg font-bold text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalTopUp;
