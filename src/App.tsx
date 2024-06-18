import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./views/Cart";
import Details from "./views/Details";
import NotFound from "./views/NotFound";
import Onsale from "./views/OnSale";
function App() {
  const browserRouter=createBrowserRouter([
    {path:"/",element:<Home />},
    {path:"/cart",element:<Cart />},
    {path:"/onsale",element:<Onsale />},
    {path:"/details/:id",element:<Details />},
    {path:"/NotFound/",element:<NotFound />},
  ])
  return (
      <RouterProvider router={browserRouter} />
  );
}
export default App;
