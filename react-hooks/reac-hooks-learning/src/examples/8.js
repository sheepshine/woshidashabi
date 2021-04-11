import React, {useContext, useEffect, useState, useReducer, useCallback, useRef} from 'react';

export default function Couter () {
    const [count, setCount] = useState(0);
    let timer = useRef(null);

    useEffect(() => {
      timer = setTimeout(() => {
          setCount(count => count + 1)
          }, 1000);
          return clearInterval(timer)
      }, [count]);

      const handleStop = () => {
        clearInterval(timer)
      }  
  
    return (
      <div>
        <div>{count}</div>
        <div onClick={() => {handleStop()}}>stop</div>
      </div>
    );
  };