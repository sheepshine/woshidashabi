import React, {useContext, useEffect, useState, useReducer, useCallback, useRef} from 'react';

export default function App () {
    const [temp, setTemp] = React.useState(5);
    
    const latestCount = useRef(temp);
    useEffect(() => {
        // Set the mutable latest value
        latestCount.current = temp;
        setTimeout(() => {
            console.log("3 秒前 temp = 5，现在 temp =", latestCount.current, temp);
          }, 3000);
      });
    const log = () => {
      
    };
  
    return (
      <div
        onClick={() => {
          log();
          setTemp(3);
          // 3 秒前 temp = 5，现在 temp = 5
        }}
      >
        xyz
      </div>
    );
  };