import {create} from 'zustand';

interface GlobalStore {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const useDialogControlStore = create<GlobalStore>((set) => ({
  open: false,
  setOpen: (isOpen) => set({ open: isOpen }),
}));
