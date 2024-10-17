"use client";
import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-screen bg-action overflow-x-hidden relative">
      <div className="absolute z-20 left-4 top-4 hidden items-center gap-2 text-white lg:flex">
        <Image src="/ardelswhite.png" width={30} height={30} alt="" />
        <p className="text-xl font-black">ARDELS</p>
      </div>
      <div className="flex h-16 items-center gap-2 p-4 text-white lg:hidden">
        <Image src="/ardelswhite.png" width={30} height={30} alt="" />
        <p className="text-xl font-black">ARDELS</p>
      </div>
      <div className="fixed w-full scale-x-150 min-h-full p-36  -bottom-1/2 z-0  border-t-[80px] -right-8  border-t-yellow-500 rounded-[100%]"></div>
      <div className="h-[calc(100vh-64px)] relative z-20 p-4 lg:h-screen lg:p-8">
        {children}
      </div>
    </main>
  );
}
