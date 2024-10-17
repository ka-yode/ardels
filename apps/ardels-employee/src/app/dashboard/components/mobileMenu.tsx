"use client";
import { Button } from "@repo/ui/button";
import SideBar from "./sidebar";
import { X } from "lucide-react";
import { useSideBarState } from "@repo/ui/hooks";
import { cn } from "@repo/ui/utils";

function MobileMenu() {
  const hideSideBar = useSideBarState((state) => state.hideSideBar);

  return (
    <div className="absolute left-0 top-0 z-20 h-screen w-screen bg-black/40 lg:hidden">
      <div
        className={cn(
          "absolute top-0 z-30 flex min-h-screen w-3/4 flex-col items-start justify-between rounded-sm bg-white p-2 pr-0 ease-out md:w-1/2"
        )}
      >
        <Button
          variant="ghost"
          leftIcon={<X />}
          size="icon"
          onClick={hideSideBar}
          className="self-end"
        />
        <SideBar className="w-full flex-1" />
      </div>
    </div>
  );
}

export default MobileMenu;
