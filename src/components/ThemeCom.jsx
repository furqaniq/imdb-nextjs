"use client";
// import { ThemeProvider } from "next-themes";

// export default function Providers({ children }) {
//   return (
//     <ThemeProvider
//       attribute="class"
//       defaultTheme="system"
//     >
//       <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
//         {children}
//       </div>
//     </ThemeProvider>
//   );
// }

import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeCom() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaSun className="absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"></FaSun>
      <FaMoon className="absolute h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100"></FaMoon>
    </Button>
  );
}
