import React from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { ThemeContext } from './ThemeContext';

export default function Toggle () {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="transition duration-1000 ease-in-out rounded-full p-2 bg-d_babyblue dark:bg-a_black">
            {theme === 'dark' ? (
                <FaSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-[#ECC758] text-lg cursor-pointer"
                />
            ) : (
                <FaMoon
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    className="text-[#242544] text-lg cursor-pointer"
                />
            )}
        </div>
    );
};