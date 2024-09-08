import { create } from "zustand";
interface SideBarSate {
  isVisible: boolean;
  toggleSideBar: () => void;
  hideSideBar: () => void;
}
export const useSideBarState = create<SideBarSate>((set) => ({
  isVisible: false,
  toggleSideBar: () => set((state) => ({ isVisible: !state.isVisible })),
  hideSideBar: () => set((state) => ({ isVisible: false })),
}));
