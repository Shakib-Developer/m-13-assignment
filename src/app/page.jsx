"use client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  let handleSet = async () => {
    try {
      await fetch("http://localhost:3000/api/setCookie");
      toast.success("Cookie set successfully!");
    } catch (error) {
      toast.error("Failed to set cookie");
    }
  };

  return (
    <div>
      <div className="w-[992px] mx-auto text-center h-screen">
        <h1 className="text-5xl text-white font-bold bg-black h-[50%] items-center flex justify-center">
          Hello Home!
        </h1>
        <button
          className="items-center flex justify-center font-bold bg-blue-200 w-full h-[50px]"
          onClick={handleSet}
        >
          Set Cookie
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
