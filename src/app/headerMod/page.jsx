"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [token, setToken] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch("/api/authheader", {
        method: "POST",
        headers: {
          token: "Bearer-Athurization",
        },
      });

      const data = await response.json();
      setToken(data.token);
      toast.success("Bearer-Athurization successfully!");
    } catch (error) {
      toast.error("Error fetching token:", error);
    }
  };

  return (
    <div>
      <div className="w-[992px] mx-auto text-center h-screen">
        <h1 className="text-5xl text-white font-bold bg-black h-[50%] items-center flex justify-center">
          Bearer Authorization
        </h1>
        <button
          className="items-center flex justify-center font-bold bg-blue-200 w-full h-[50px]"
          onClick={handleClick}
        >
          Get Headers
        </button>
        <div className="bg-gray-500 py-5">
          Token: <code>{token}</code>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
