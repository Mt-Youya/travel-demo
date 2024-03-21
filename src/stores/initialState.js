export const initUser = {
    userInfo: {
        userId: undefined,
        nickName: "",
        userName: "",
        favoriteCatCategory: undefined,
    },
}

export const initToken = {
    accessToken: null,
    refreshToken: null,
}

export const initDog = {
    dog: {
        loading: false,
        url: "",
    },
}

export const initCat = {
    cat: {
        loading: false,
        url: "",
    },
}

export const initialState = {
    ...initUser,
    ...initToken,
    ...initDog,
    ...initCat,
}
