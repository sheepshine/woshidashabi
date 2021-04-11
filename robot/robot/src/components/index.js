import React, {useContext} from "react"
import List from "./list"
import Cart from "./cart"
import { listContent } from "../AppState"

export default function Index () {
    const value = useContext(listContent)

    console.log(value, 666666)
    return(
        <div>
            {
            value.shop.map(item => <List {...item} />)
            }
            <Cart />
        </div> 
    )
}