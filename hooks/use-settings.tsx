import { create } from "zustand";

type SettingsStore = {
  isOpen: boolean;
  isDarkMode: boolean; // New setting for dark mode
  onOpen: () => void;
  onClose: () => void;
  toggleDarkMode: () => void; // New function to toggle dark mode
};

export const useSettings = create<SettingsStore>((set) => ({
  isOpen: false,
  isDarkMode: false, // Initialize dark mode to false
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })), // Toggle dark mode state
}));
