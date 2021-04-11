import React, {useContext, useEffect, useState, useReducer, useCallback} from 'react';


const initialState = {count: 0}

const fetchReducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        error: false
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      }
    case "FETCH_FAIL":
      return {
        ...state,
        loading: false,
        error: true
      }    
    default:
      throw new Error();  
  }
}

export default function Demo6() {
  const [state, dispatch] = useReducer(fetchReducer, {
    loading: false,
    error: false,
    msg: "",
    data: {}
  })

  const getData = useCallback(async () => {
    dispatch({type: "FETCH_INIT"})
    const response =  await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          title: "牛逼"
        })
      }, 1000)
    })
    dispatch({type: "FETCH_SUCCESS", payload: response})
  }, [])

  useEffect(() => {
    getData();
  }, [getData])

  return (
    <div>
      data: {state.data.title}
    </div>
  )
}
