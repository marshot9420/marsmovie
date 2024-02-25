import { RouterProvider } from "react-router-dom";

import { SearchProvider } from "./hooks";

import { routers } from "./routes/routers";

const App = () => {
  return (
    <SearchProvider>
      <RouterProvider router={routers} />
    </SearchProvider>
  );
};

export default App;
