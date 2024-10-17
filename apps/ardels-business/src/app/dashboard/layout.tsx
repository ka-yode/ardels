"use client";
import { Bell } from "lucide-react";
import SideBar from "./components/sidebar";
import AdminNavbar from "./components/adminnavbar";
import { usePathname } from "next/navigation";
import { useSideBarState } from "@repo/ui/hooks";
import { useEffect } from "react";
import { useUser } from "~/utils/useUser";

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
    currentPath == baseDashboardPath + "/settings" ||
    currentPath.includes("/settings")
  ) {
    location = "Settings";
  } else {
    location = "";
  }
  const hideSideBar = useSideBarState((state) => state.hideSideBar);
  useEffect(() => {
    hideSideBar();
  }, [currentPath, hideSideBar]);
  const { data, isLoading } = useUser();
  if (isLoading) {
    return (
      <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
        <div className="min-h-10 size-10 rounded-full border-4 animate-spin border-r-0 border-action"></div>
        <p>Loading</p>
      </div>
    );
  }
  return (
    <main className="h-screen w-full md:flex">
      <div className="hidden lg:block">
        <SideBar />
      </div>
      <div className="relative h-screen flex-1">
        <AdminNavbar
          location={location}
          companyName={data?.companyProfile.companyName}
        />
        <div className="h-screen overflow-y-auto bg-neutral-100 px-3 py-20 md:px-8 lg:mt-16 lg:h-[calc(100vh-4rem)] lg:py-10">
          {children}
        </div>
      </div>
    </main>
  );
}
