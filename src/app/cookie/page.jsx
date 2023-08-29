import { cookies } from "next/headers";

export default function Page() {
  const theme = cookies().get("theme") || "";

  return (
    <div>
      <div className="w-[992px] mx-auto text-center h-screen">
        <h1 className="text-5xl text-white font-bold bg-black h-[50%] items-center flex justify-center">
          GET Cookies
        </h1>
        <h2 className="items-center text-2xl flex justify-center font-bold bg-blue-200 py-20">
          {JSON.stringify(theme)}
        </h2>
      </div>
    </div>
  );
}
