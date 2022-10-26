import { RouterProvider } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";

import rootRouter from "./router/rootRouter";

function App() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={`${themeContext?.isDark && "dark"} `}>
      <Toaster />
      <RouterProvider router={rootRouter} />
    </div>
  );
}

export default App;
