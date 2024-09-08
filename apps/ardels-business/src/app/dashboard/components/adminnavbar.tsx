import { Button } from "@repo/ui/button";
import { Bell, Menu } from "lucide-react";
import MobileMenu from "./mobileMenu";
import { useToggleBool } from "@repo/ui/hooks";
import { useSideBarState } from "@repo/ui/hooks";

interface AdminNavbarProps {
  location: string;
}
export default function AdminNavbar({ location }: AdminNavbarProps) {
  const { currentBoll, setToFalse, setToTrue } = useToggleBool();
  const showSideBar = useSideBarState((state) => state.isVisible);
  const toggleSideBar = useSideBarState((state) => state.toggleSideBar);
  return (
    <div className="fixed z-20 flex h-16 w-full items-center justify-between bg-white p-4 lg:w-[calc(100vw-15rem)]">
      <p className="hidden text-xl font-semibold lg:block">{location}</p>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        leftIcon={<Menu />}
        onClick={toggleSideBar}
      />
      <div className="flex items-center gap-6">
        <Bell className="hidden lg:block" />
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-green-500 text-lg font-bold text-white">
            4
          </div>
          <p className="hidden font-semibold lg:block">44bukaz</p>
        </div>
      </div>
      {showSideBar && <MobileMenu />}
    </div>
  );
}
