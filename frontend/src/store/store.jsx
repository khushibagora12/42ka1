import {create} from 'zustand';

const useUrl = create((set) => ({
  url: 0,
  updateUrl: (newUrl) => set({ url: newUrl }),
}))

export default useUrl;