import { persist } from "zustand/middleware"
import { login } from "../apis/authorize.js"

export const initToken = {
    accessToken: null,
    refreshToken: null,
}

export const createToken = persist(
    (set) => ({
        accessToken: null,
        refreshToken: null,
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
    { name: "zustand-slice" },
)
