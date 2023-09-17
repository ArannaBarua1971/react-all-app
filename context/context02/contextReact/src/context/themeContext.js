import{ createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode:"",
    themeChooseMode:()=>{},
})

export const ThemeContextProvider =ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}