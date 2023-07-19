import { useContext } from "react"
import { CartContext } from "../store"

export default function Cart() {
  const [state, dispatch] = useContext(CartContext)

  return (
    <div className="bg-light p-3">
      <table className="table align-middle">
        <tbody>
          {/* 一列 */}
          {state.cartList.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <button type="button" className="btn btn-sm"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_CART_ITEM",
                        payload: {
                          ...item
                        }
                      })
                    }}
                  >X</button>
                </td>
                <td>
                  <img className="table-image" src={item.img} alt="123" />
                </td>
                <td>
                  {item.title}
                  <br />
                  <small className="text-muted">$ {item.price}</small>
                </td>
                <td>
                  <select name="" id="" className="form-select"
                    value={item.quantity}
                    onChange={(e) => {
                      e.preventDefault()
                      const quantity = parseInt(e.target.value)
                      dispatch({
                        type: "CHANGE_CART_QUANTITY",
                        payload: {
                          ...item,
                          quantity,
                        }
                      })
                    }}>
                    {[...Array(20)].map((_, i) => {
                      return (
                        <option value={i + 1}>{i + 1}</option>
                      )
                    })}
                  </select>
                </td>
                <td className="text-end">
                  $ {item.price * item.quantity}
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="text-end">
              總金額: $ {state.total || 0}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}