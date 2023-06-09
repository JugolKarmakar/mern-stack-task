import React, { useState } from "react";
import { data } from "../Data";
import { useParams } from "react-router-dom";
import BookingForm from "../component/Product/BookingForm";
import { HiMinus, HiPlus } from "react-icons/hi";

const Booking = () => {
  const { id } = useParams();
  const productData = data;
  const [count, setCount] = useState(1);

  const product = productData.find((item) => item.id === parseInt(id));

  return (
    <div className="bg-[#f6f9fc]">
      <div className="container mx-auto py-10 px-10 flex gap-6">
        <div className="w-full max-w-2xl">
          <div className="flex justify-between items-center shadow-lg rounded-md p-6 bg-white">
            <div className="w-36 h-36 rounded-full overflow-hidden border">
              <img
                className="w-full h-full object-contain"
                src={product.image}
                alt=""
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-black">{product.title}</h3>
              <div className="flex justify-between">
                <p className="text-lg pt-3 ">Price: {product.price * count}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="border border-pink-500 p-1 rounded"
                    onClick={() => {
                      setCount(Math.max(count - 1, 1));
                    }}
                  >
                    <HiMinus className="text-lg font-semibold text-pink-500" />
                  </button>
                  <h4 className="p-2 text-lg font-medium">{count}</h4>
                  <button
                    className="border border-pink-500 p-1 rounded"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <HiPlus className="text-lg font-semibold text-pink-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-2xl">
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default Booking;
