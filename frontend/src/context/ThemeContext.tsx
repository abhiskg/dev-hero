// import React, { createContext, useState } from "react";

// interface ThemeContextProps {
//   isDark: boolean;
//   setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export const ThemeContext = createContext<ThemeContextProps | null>(null);

// const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
//   const [isDark, setIsDark] = useState(false);

//   return (
//     <ThemeContext.Provider value={{ isDark, setIsDark }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeContextProvider;
const ThemeContext = () => {
  return <div></div>;
};

export default ThemeContext;
