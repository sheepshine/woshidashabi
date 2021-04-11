import React, {useContext, useEffect, useState} from 'react';

const MyContext = React.createContext();
function Demo3() {
  // 声明一个叫 "count" 的 state 变量
  const [value, setValue] = useState("init");
  return (
    <div>
     <button onClick={() => {
        console.log('click：更新value')
        setValue(`${Date.now()}_newValue`)
      }}>
        改变value
      </button>
      <MyContext.Provider value={value}>
        <Child1 />
        <Child2 />
      </MyContext.Provider>
    </div>
  );
}

function Child1() {
    const value = useContext(MyContext);
    console.log("Child1-value", value);
    return <div>Child1-value: {value}</div>;
  }
  
  const Child2 = React.memo((props) => {
    return <div>Child2</div>;
  })

export default Demo3;
