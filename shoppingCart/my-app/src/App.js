import { useReducer } from "react";
import Cart from "./components/Cart.js";
import Navbar from "./components/Navbar.js";
import Products from "./components/Products.js";
import { CartContext, cartInit, cartReducer } from "./store.js";

function App() {
  const reducer = useReducer(cartReducer, cartInit)

  return (
    <CartContext.Provider value={reducer}>
      {/* navbar */}
      <Navbar></Navbar>
      <div className="container mt-4">
        {/* 外層隔線 */}
        <div className="row">
          {/* 左側卡片區 */}
          <div className="col-md-7">
            {/* 內層隔線 */}
            <Products></Products>
          </div>
          {/* 右側清單區 */}
          <div className="col-md-5">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;