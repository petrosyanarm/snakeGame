import { buttons } from "../../ui/buttons.js"

const savedTheme = localStorage.getItem('theme')
export function themeMode(){
    if(savedTheme === "dark"){
        document.body.classList.add('dark')
    }else{
        document.body.classList.add('light')
    }
    buttons.themeToggle.addEventListener("click",()=>{
        const isDark = document.body.classList.toggle('dark')
        document.body.classList.toggle("light",!isDark)
        localStorage.setItem("theme", isDark ? "dark" : "light")
    })
}