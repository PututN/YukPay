/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { X } from "react-feather";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";

const ModalTopUp = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }
  //top up
  const token = useSelector((state) => state.auth.token);
  const decode = jwt_decode(token);

  const [amount, setAmount] = useState(null);
  console.log(amount);

  const transactionTopup = async (e) => {
    e.preventDefault();
    //axios post have 3 parameter (endpoint, data post, token)
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/transactions/topup`,
      { amount },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
  };

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
          <form onSubmit={transactionTopup} className="flex flex-col w-full">
            <input
              name="amount"
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              className="bg-[#A9A9A999] text-center w-full my-10 py-3 rounded-md"
            ></input>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#6379F4] px-7 py-2 rounded-md text-lg font-bold text-white"
              >
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
