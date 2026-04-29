import type { ThemeType } from "../context/theme";

export const saveIntoLocalStorage = (theme:ThemeType) => {
    console.log("save data into localStorage")
    localStorage.setItem("theme", theme);
}

export const getDataFromLocalStorage = (key:"theme") => {
    const data = localStorage.getItem(key)
    console.log(`get data from localStorage : ${data}`)
    return data
}
