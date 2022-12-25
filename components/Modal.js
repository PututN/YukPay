import React from "react";
import { X } from "react-feather";

const Modal = ({ isVisible, onClose }) => {
  const inputRef = React.useRef(null);
  const handleOnChange = (e) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(0, 1);
      inputRef.current.value = e.target.value;
    }
  };
  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 bg-[#3A3D42] bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-3 rounded-lg flex flex-col w-1/3">
          <div className="flex items-center">
            <div className="flex-1 text-lg font-bold text-[#3A3D42]">
              Enter PIN to Transfer
            </div>
            <button onClick={() => onClose()}>
              <X style={{ color: "#3A3D42" }} />
            </button>
          </div>
          <div className="text-[#3A3D4299] text-base my-5">
            Enter your 6 digits PIN for confirmation to continue transferring
            money.{" "}
          </div>
          <form>
            <div className="flex text-center w-full mb-10">
              <div className="flex-1">
                <input
                  ref={inputRef}
                  type="number"
                  onChange={handleOnChange}
                  className="w-10 h-10 text-center rounded-md text-lg font-bold border-[#A9A9A999]"
                ></input>
              </div>
              <div className="flex-1">
                <input
                  ref={inputRef}
                  type="number"
                  onChange={handleOnChange}
                  className="w-10 h-10 text-center rounded-md text-lg font-bold border-[#A9A9A999]	"
                ></input>
              </div>
              <div className="flex-1">
                <input
                  ref={inputRef}
                  type="number"
                  onChange={handleOnChange}
                  className="w-10 h-10 text-center rounded-md text-lg font-bold border-[#A9A9A999]	"
                ></input>
              </div>
              <div className="flex-1">
                <input
                  ref={inputRef}
                  type="number"
                  onChange={handleOnChange}
                  className="w-10 h-10 text-center rounded-md text-lg font-bold border-[#A9A9A999]"
                ></input>
              </div>
              <div className="flex-1">
                <input
                  ref={inputRef}
                  type="number"
                  onChange={handleOnChange}
                  className="w-10 h-10 text-center rounded-md text-lg font-bold border-[#A9A9A999]	"
                ></input>
              </div>
              <div className="flex-1">
                <input
                  ref={inputRef}
                  type="number"
                  onChange={handleOnChange}
                  className="w-10 h-10 text-center rounded-md text-lg font-bold border-[#A9A9A999]	"
                ></input>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-[#6379F4] px-7 py-2 rounded-md text-lg font-bold text-white">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
