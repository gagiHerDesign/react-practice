import { createContext } from "react";

function calculateTotalPrice(cartList) {
  // 購物車的總價:
  // 1. 先準備一個陣列，裡面放入每個品項的總價
  const array = cartList.map((item) => {
    return item.price * item.quantity;
  });
  // 2. 使用reduce，累加器，把加總值給total
  const total = array.reduce((a, b) => {
    return a + b;
  }, 0);
  return total;
}

export const cartInit = {
  cartList: [],
};

export const cartReducer = (state, action) => {
  const cartList = [...state.cartList];
  // 1. 先取得當前購物車的目標品項的索引
  const index = cartList.findIndex((item) => item.id === action.payload.id);

  switch (action.type) {
    case 'ADD_TO_CART':
      if (index === -1) {
        // 還未加入購物車內
        cartList.push(action.payload);
      } else {
        // 當前購物車的項目與加入的項目一致
        cartList[index].quantity += action.payload.quantity;
      }
      // 計算總價(程式碼在下方，方便重複使用)
      // 把這一行total結果代到下方的return
      // const total = calculateTotalPrice(cartList);

      return {
        ...state,
        cartList,
        total: calculateTotalPrice(cartList),
      }
    case 'CHANGE_CART_QUANTITY':
      cartList[index].quantity = action.payload.quantity;
      return {
        ...state,
        cartList,
        total: calculateTotalPrice(cartList),
      }
    case 'REMOVE_CART_ITEM':
      // 移除當前索引的品項，1個
      cartList.splice(index, 1);
      return {
        ...state,
        cartList,
        total: calculateTotalPrice(cartList),
      }
    default:
      return state;
  }
}

export const CartContext = createContext({});