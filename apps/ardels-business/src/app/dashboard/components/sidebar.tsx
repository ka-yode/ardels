"use client";
import {
  Archive,
  Bell,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@repo/ui/utils";
import { Button } from "@repo/ui/button";

interface SideBarProps {
  className: string;
}

export default function SideBar({ className }: Partial<SideBarProps>) {
  return (
    <section
      className={cn(
        "flex h-screen w-60 flex-col justify-between bg-white p-8 pr-0 lg:border-r",
        className
      )}
    >
      <div className="flex flex-col gap-16">
        <div className="flex items-center justify-start gap-2">
          <Image src="/ardels.png" alt="" height={30} width={30} />
          <p className="text-lg font-bold">ARDELS</p>
        </div>
        <Navlinks />
      </div>
      <Button
        leftIcon={<LogOut />}
        className="justify-start"
        variant="destructiveOutline"
      >
        Log Out
      </Button>
    </section>
  );
}

interface NavLinkProps {
  linkName: string;
  path: string;
  icon: React.ReactElement;
}
function NavLink({ linkName, path, icon }: NavLinkProps) {
  const pathname = usePathname();
  const fullpath = `${pathname.split("/").slice(0, 2).join("/")}/${path}`;
  const isActive = `${pathname}/`.split("/").slice(2, -1).join("/") === path;
  // console.log(`${pathname}/`.split("/").slice(2, -1).join("/"));

  return (
    <Link
      href={fullpath}
      className={cn(
        "flex w-full items-center gap-2 p-2 text-neutral-400 duration-300",
        isActive && "border-r-4 border-action font-semibold text-action"
      )}
    >
      {icon}
      {linkName}
    </Link>
  );
}

function Navlinks() {
  const NavList: NavLinkProps[] = [
    {
      linkName: "Dashboard",
      path: "",
      icon: <LayoutDashboard fill="currentColor" fillOpacity={0.6} />,
    },
    {
      linkName: "Employees",
      path: "employees",
      icon: <Users fill="currentColor" fillOpacity={0.6} />,
    },
    {
      linkName: "Available Workers",
      path: "available-workers",
      icon: <Archive fill="currentColor" fillOpacity={0.6} />,
    },
    {
      linkName: "Notification",
      path: "notifications",
      icon: <Bell fill="currentColor" fillOpacity={0.6} />,
    },
    {
      linkName: "Settings",
      path: "settings",
      icon: <Settings fill="currentColor" fillOpacity={0.6} />,
    },
  ];
  return (
    <div className="flex flex-col items-start justify-start gap-10">
      {NavList.map((nav) => (
        <NavLink
          linkName={nav.linkName}
          path={nav.path}
          key={nav.path}
          icon={nav.icon}
        />
      ))}
    </div>
  );
}
