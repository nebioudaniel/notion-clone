import { create } from "zustand";

type CoverImageStore = {
  url?: string | undefined; // Consider using a more specific type
  isOpen: boolean;
  error?: string; // Add error state to store error messages
  onOpen: () => void;
  onClose: () => void;
  onReplace: (url: string) => void;
  onError: (error: string) => void; // Add error handling function
};

export const useCoverImage = create<CoverImageStore>((set) => ({
  url: undefined,
  isOpen: false,
  error: undefined,
  onOpen: () => set({ isOpen: true, url: undefined }),
  onClose: () => set({ isOpen: false, url: undefined }),
  onReplace: async (url: string) => {
    try {
      // Validate URL (example using URL constructor)
      new URL(url);
      set({ isOpen: true, url, error: undefined });
    } catch (error) {
      // Handle URL validation error
      set({ error: "Invalid image URL" });
      console.error("Error replacing cover image:", error);
    }
  },
  onError: (error: string) => set({ error }), // Function to set error state
}));
