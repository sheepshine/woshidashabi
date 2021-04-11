import React, {useState} from "react"

const list = {
    shop: [
        {
          name: "测试1",
          price: 99999
        },
        {
          name: "测试2",
          price: 99999
        }
    ],
    shopList: []
}

export const listContent = React.createContext(list)
export const listSetContent = React.createContext(list)

export const  ListStateProvider  = (props) => {
    const [state, setState] = useState(list)
    return(
        <listContent.Provider value={state}>
            <listSetContent.Provider value={setState}>
            {
                props.children
            }
            </listSetContent.Provider>
           
        </listContent.Provider>
    )
}