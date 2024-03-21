export default function useFetch(data) {
    return new Promise((resolve) => {
        const timer = setTimeout(() => {
            resolve({ code: 200, msg: "success", data })
            clearTimeout(timer)
        }, 1000)
    })
}
