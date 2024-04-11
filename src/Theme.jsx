import { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
        if (window.matchMedia('(prefers-color-scheme: dark)')) {
            localStorage.setItem("theme", "dark-theme");
            return "dark-theme";
        }
        else {
            localStorage.setItem("theme", "light-theme");
            return "light-theme";
        }
    }
    return theme;
}


const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(getTheme);

    function toggleTheme() {
        if (theme === "dark-theme") {
            setTheme("light-theme");
        } else {
            setTheme("dark-theme");
        }
    };

    useEffect( () => {
        const refreshTheme = () => {
            localStorage.setItem("theme", theme);
        };

        refreshTheme();
    }, [theme]);

    return (
        <ThemeContext.Provider
        value={{theme, setTheme, toggleTheme}}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider }