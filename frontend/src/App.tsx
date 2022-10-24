import { RouterProvider } from "react-router-dom";
import rootRouter from "./router/rootRouter";

function App() {
  return (
    <div>
      <RouterProvider router={rootRouter} />
    </div>
  );
}

export default App;
