import {create} from 'zustand';

const useUrl = create((set) => ({
  url: "",
  updateUrl: (newUrl) => set({ url: newUrl }),
}))

export default useUrl;