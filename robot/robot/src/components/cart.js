import React, {useContext} from "react"
import { listContent } from "../AppState"

export default function Cart () {
    const list = useContext(listContent)
    console.log(list, 11111)
    return (
        <div>
            <div>当前共有商品{list.shopList.length}件</div>
        </div>
    )
}