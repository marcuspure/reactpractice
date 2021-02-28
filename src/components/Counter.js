import React, { useState } from "react";

// *
// 設計一個Counter，包含以下三個元件
// <title />
// <Button1 /> <Button2 />
// *
export default function Counter() {
  const [stateList, setYourState] = useState({ value: 5, showColor: false });   //<-- 改用object來做狀態的控制

  return (
    <>
      <h1 style={{ backgroundColor: stateList['showColor'] ? "yellow" : "white" }}>
        {stateList["value"]}
      </h1>
      <button
        onClick={() => {
          console.log("Counter+1");
          return setYourState({ ...stateList, value: stateList["value"] + 1 });
        }}
      >
        加1
      </button>

      <button
        onClick={() => {
          console.log("Counter-1");
          return setYourState({ ...stateList, value: stateList["value"] - 1 });
        }}
      >
        減1
      </button>

      <button
        onClick={() => {
          console.log("showColor is:" + stateList['showColor']);
          return setYourState({ ...stateList, showColor: !stateList["showColor"] });
        }}
      >
        {stateList['showColor'] ? "關閉" : "打開"}
      </button>
    </>
  );
}