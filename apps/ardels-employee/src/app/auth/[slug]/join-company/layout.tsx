import Image from "next/image";
export default function JoinCompanyLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <main className="h-screen bg-action">
      <div className="absolute left-4 top-4 hidden items-center gap-2 text-white lg:flex">
        <Image src="/ardelswhite.png" width={30} height={30} alt="" />
        <p className="text-xl font-black">ARDELS</p>
      </div>
      <div className="flex h-16 items-center gap-2 p-4 text-white lg:hidden">
        <Image src="/ardelswhite.png" width={30} height={30} alt="" />
        <p className="text-xl font-black">ARDELS</p>
      </div>
      <div className="h-[calc(100vh-64px)] p-4 lg:h-screen lg:p-8">
        {children}
      </div>
    </main>
  );
}
