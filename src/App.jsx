

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import RootLayouts from "./layouts/RootLayouts";
import About from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayouts/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/product" element={<ProductPage/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="*" element={<Error/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/checkout" element={<Checkout/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    </Route>
   
    </>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App