import React, {useEffect, useState} from 'react';

function Demo2() {
  // 声明一个叫 "count" 的 state 变量
  const [data, setData] = useState(0);
  useEffect(() => {
    console.log("useEffect—[]");
    setTimeout(() => {
      setData({name: "test"})
    })
  }, []);

  useEffect(() => {
    console.log("useEffect ---> 无依赖");
  });

  useEffect(() => {
    console.log("useEffect 依赖data： data发生了变化");
  }, [data]);

  return (
    <div>
      <p>data: {JSON.stringify(data)}</p>
    </div>
  );
}

export default Demo2;
