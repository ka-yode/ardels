import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "@repo/ui/button";
import { cn } from "@repo/ui/utils";

export default function Navbar() {
  return (
    <nav className="fixed z-20 flex h-16 w-full items-center justify-between border-b bg-white px-8 py-4 md:h-20">
      <div className="flex items-center justify-center gap-2">
        <Image src="/ardels.png" alt="" height={30} width={30} />
        <p className="text-lg font-bold">ARDELS</p>
      </div>
      <div className="hidden items-center gap-10 md:flex">
        <Navlinks />
        <Link
          href="auth/signup"
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  linkName: string;
  path: string;
}
function NavLink({ linkName, path }: NavLinkProps) {
  let isActive = false;
  const pathname = usePathname();
  if (pathname === path) isActive = true;
  return (
    <Link href={path} className={`${isActive && "font-semibold"} text-black`}>
      {linkName}
    </Link>
  );
}

function Navlinks() {
  const NavList: NavLinkProps[] = [
    { linkName: "Home", path: "/" },
    { linkName: "Services", path: "/services" },
  ];
  return (
    <div className="flex items-center justify-center gap-8">
      {NavList.map((nav) => (
        <NavLink linkName={nav.linkName} path={nav.path} key={nav.path} />
      ))}
    </div>
  );
}
