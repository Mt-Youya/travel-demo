import { persist } from "zustand/middleware"
import { initialState, initToken, initUser } from "./initialState.js"
import { login } from "@/apis/authorize.js"
import create from "zustand"

const store = persist(
    (set, get) => ({
        ...initialState,

        // 重置用户信息
        resetUser: () => {
            set({ ...initUser })
        },
        // 重置token信息
        resetToken: () => {
            set({ ...initToken })
        },
        async login(params) {
            try {
                const response = await login(params)
                console.log("login: ", response)

                sessionStorage.setItem("accessToken", response.accessToken)
                sessionStorage.setItem("refreshToken", response.refreshToken)
                set(response)
                return true
            } catch (e) {
                return false
            }
        },
    }),
    {
        name: "app-storage",
    },
)

export const useStore = create()(store)
