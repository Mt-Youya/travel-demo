import { create } from "zustand"

const useTabs = create((set) => {
    return {
        active: 0,
        setActive: newActive => set({ active: newActive }),
    }
})

export default useTabs
