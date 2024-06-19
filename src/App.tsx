import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./views/Cart";
import Details from "./views/Details";
import NotFound from "./views/NotFound";
import Onsale from "./views/OnSale";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/onsale", element: <Onsale /> },
    { path: "/details/:id", element: <Details /> },
    { path: "/NotFound/", element: <NotFound /> },
  ])
  return (
    // EL PROVIDER REQUIERE QUE LE PASE COMO ATRIBUTO 
    <Provider store={store}>
      <RouterProvider router={browserRouter} />
    </Provider>
  );
}
export default App;
