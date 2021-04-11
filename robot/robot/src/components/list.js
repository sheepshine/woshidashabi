import { useContext } from "react"
import "./list.css"
import { listSetContent } from "../AppState"

export default function List (props) {
    const setState = useContext(listSetContent)
    console.log(setState)
    const addToCart = () => {
        setState(state => {
            console.log(state, 66666)
            const shopList = state.shopList.concat([props])
            return {
                ...state,
                shopList
            }
        })
    }

    return (
        <div className="item-wrap">
            <div>name: {props.name}</div>
            <div>price: {props.price}</div>
            <div onClick={addToCart}>add to cart</div>
        </div>
    )
}