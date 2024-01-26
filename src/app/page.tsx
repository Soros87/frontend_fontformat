import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center ">
      <div className="h-1/2 w-1/3 overflow-auto rounded-lg">
        <div className="flex bg-grey-50 h-[60%]"></div>
        <div className="flex bg-peach-50 h-[30%]"></div>
        <div className="flex bg-winter-50 h-[10%]"></div>
      </div>
    </main>
  );
}
