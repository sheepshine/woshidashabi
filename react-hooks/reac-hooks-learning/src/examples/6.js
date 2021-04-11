import React, {useContext, useEffect, useState, useReducer, useCallback} from 'react';


function Child({event, data}) {

  console.log("child-render")
  useEffect(() => {
    console.log("child-useEffect");
    event();
  }, [event]);
  return (
    <div>
      <p>child</p>
      <button onClick={event}>调用父级event</button>
    </div>
  )
}

const set = new Set();


export default function Demo6() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({})

  const handle = useCallback(async () => {
    const res = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({title: Date.now()})
      }, 1000)
    })
    setData(res)
    console.log("useCallback", data);
  }, [count])

  return (
    <div>
      <button
        onClick={e => {
          setCount(count + 1)
        }}
      >
        count++
      </button>
      <p>count: {count}</p>
      <p>set size: {set.size}</p>
      <p>data: {data.title}</p>
      <Child event={handle} />
    </div>
  )
}
