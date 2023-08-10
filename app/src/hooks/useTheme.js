import { useLayoutEffect, useState } from "react"

export const useTheme = () =>{
    const [theme, SetTheme] = useState(localStorage.getItem('app-theme') || 'dark');

    useLayoutEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('app-theme', theme);
    },[theme])

    return {theme, SetTheme}
}