import React, { useState } from "react";
import { X } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { pinInput } from "../redux/reducers/transferReducers";
import { transferAction } from "../redux/actions/transferAction";
import { useRouter } from "next/router";

const Modal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [newPin, setNewPin] = useState([]);
  const inputRef1 = React.useRef(null);
  const inputRef2 = React.useRef(null);
  const inputRef3 = React.useRef(null);
  const inputRef4 = React.useRef(null);
  const inputRef5 = React.useRef(null);
  const inputRef6 = React.useRef(null);
  const handleOnChange = (e) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(0, 1);
    }
    const pinInput = {
      1: inputRef1,
      2: inputRef2,
      3: inputRef3,
      4: inputRef4,
      5: inputRef5,
      6: inputRef6,
    };
    const currentInput = Number(e.target.name);
    if (e.target.value.length) {
      pinInput[currentInput + 1]?.current?.focus();
    } else {
      pinInput[currentInput - 1]?.current?.focus();
      if (currentInput < 6) {
        for (let i = currentInput; i <= 6; i++) {
          pinInput[i].current.value = "";
        }
      }
    }
    let pin = "";
    for (let i = 1; i <= 6; i++) {
      pin += pinInput[i].current.value;
      setNewPin(pin);
    }
  };
  React.useEffect(() => {
    document.body.className = "overflow-hidden";
    return () => {
      document.body.className = null;
    };
  }, []);

  const { amount, pin, recipientId, notes } = useSelector(
    (state) => state.transfer
  );

  const router = useRouter()
  const submitTransfer = (e) => {
    e.preventDefault();
    dispatch(transferAction({ amount, pin:newPin, recipientId, notes, cb:() => {
      router.push("/transfer-success")
    } }));
  };

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
          <form onSubmit={submitTransfer}>
            <div className="flex text-center w-full mb-10">
              <div className="flex-1">
                <input
                  ref={inputRef1}
                  type="number"
                  name="1"
                  onChange={handleOnChange}
                  className="w-10 h-10 text-center rounded-md text-lg border-2 font-bold border-[#A9A9A999]"
                ></input>
              </div>
              <div className="flex-1">
                <input
                  ref={inputRef2}
                  name="2"
                  type="number"
                  onChange={handleOnChange}
                  className="w-10 h-10 text-center rounded-md text-lg border-2 font-bold border-[#A9A9A999]	"
                ></input>
              </div>
              <div className="flex-1">
                <input
                  ref={inputRef3}
                  name="3"
                  type="number"
                  onChange={handleOnChange}
                  className="w-10 h-10 text-center rounded-md text-lg border-2 font-bold border-[#A9A9A999]	"
                ></input>
              </div>
              <div className="flex-1">
                <input
                  ref={inputRef4}
                  name="4"
                  type="number"
                  onChange={handleOnChange}
                  className="w-10 h-10 text-center rounded-md text-lg border-2 font-bold border-[#A9A9A999]"
                ></input>
              </div>
              <div className="flex-1">
                <input
                  ref={inputRef5}
                  name="5"
                  type="number"
                  onChange={handleOnChange}
                  className="w-10 h-10 text-center rounded-md text-lg border-2 font-bold border-[#A9A9A999]	"
                ></input>
              </div>
              <div className="flex-1">
                <input
                  ref={inputRef6}
                  name="6"
                  type="number"
                  onChange={handleOnChange}
                  className="w-10 h-10 text-center rounded-md text-lg border-2 font-bold border-[#A9A9A999]	"
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
