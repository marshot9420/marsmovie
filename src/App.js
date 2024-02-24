import { RouterProvider } from "react-router-dom";

import { routers } from "./routes/routers";

const App = () => {
  return <RouterProvider router={routers} />;
};

export default App;
