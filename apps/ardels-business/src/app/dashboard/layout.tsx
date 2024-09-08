"use client";
import { Bell } from "lucide-react";
import SideBar from "./components/sidebar";
import AdminNavbar from "./components/adminnavbar";
import { usePathname } from "next/navigation";
import { useSideBarState } from "@repo/ui/hooks";
import { useEffect } from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const currentPath = usePathname();
  const baseDashboardPath = "/dashboard";
  let location = "";
  if (currentPath == baseDashboardPath) {
    location = "Dashboard";
  } else if (
    currentPath == baseDashboardPath + "/employees" ||
    currentPath.includes("/employees")
  ) {
    location = "Employees";
  } else if (
    currentPath == baseDashboardPath + "/available-workers" ||
    currentPath.includes("/available-workers")
  ) {
    location = "Availabe Workers";
  } else if (
    currentPath == baseDashboardPath + "/notifications" ||
    currentPath.includes("/notifications")
  ) {
    location = "Notifications";
  } else if (
    currentPath == baseDashboardPath + "/support" ||
    currentPath.includes("/support")
  ) {
    location = "Support";
  } else {
    location = "";
  }
  const hideSideBar = useSideBarState((state) => state.hideSideBar);
  useEffect(() => {
    hideSideBar();
  }, [currentPath, hideSideBar]);
  return (
    <main className="h-screen w-full md:flex">
      <div className="hidden lg:block">
        <SideBar />
      </div>
      <div className="relative h-screen flex-1">
        <AdminNavbar location={location} />
        <div className="h-screen overflow-y-auto bg-neutral-100 px-6 py-20 lg:mt-16 lg:h-[calc(100vh-4rem)] lg:py-10">
          {children}
        </div>
      </div>
    </main>
  );
}
