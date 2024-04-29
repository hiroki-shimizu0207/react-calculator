import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./style/style.scss";
import { handleNumberClick } from "./components/handleNumberClick";

function App() {
  const [input, setInput] = useState("0"); // 現在の入力値
  const [result, setResult] = useState(0); // 計算結果
  const operate_array = ["+", "-", "*", "/"]; // 四則演算の配列
  const formatResult = (result) => {
    if (typeof result === "number") {
      return result.toLocaleString();
    }
    return result;
  };
  // 数字取得
  const handleNumberClick = (el) => {
    const num_text = `${el.target.textContent}`;
    setInput((prevInput) =>
      prevInput === "0" ? num_text : prevInput + num_text
    );
  };
  // 四則演算子
  const handleOperatorClick = (el) => {
    const num_text = `${el.target.textContent}`;
    const last_char = input.slice(-1);
    if (input !== "0" && operate_array.includes(last_char)) {
      setInput((prevInput) => prevInput.slice(0, -1) + num_text);
    } else {
      setInput((prevInput) => `${prevInput}${num_text}`);
    }
  };
  // 小数点の計算
  const handleDecimalClick = (el) => {
    const num_text = `${el.target.textContent}`;
    const last_char = input.slice(-1);
    setInput((prevInput) =>
      num_text === last_char ? prevInput : `${prevInput}${num_text}`
    );
  };
  // バックボタン
  const handleBackspace = () => {
    setInput((prevInput) => {
      const inputIsString = typeof prevInput === "string";
      const slicedInput = inputIsString ? prevInput.slice(0, -1) : prevInput;
      const prevValue =
        slicedInput === "" || slicedInput === "0" ? "0" : slicedInput;
      return prevValue;
    });
  };
  // クリアボタン
  const handleClear = () => {
    setInput("0");
    setResult(0);
  };
  // 計算式
  const handleCalculate = () => {
    try {
      const last_char = input.slice(-1);
      // 最後の値が四則演算子ならそのままにする
      if (operate_array.includes(last_char)) {
        setInput(input);
        setResult(result);
      } else {
        const calculatedResult = evaluate(input);
        setInput(`${calculatedResult}`);
        const formattedResult = formatResult(calculatedResult);
        setResult(formattedResult);
      }
    } catch (error) {
      setResult("エラーです。");
    }
  };

  return (
    // TODO:冗長なのでリファクタリングしていく
    // TODO:3桁ごとにドットをつける
    // TODO:履歴や2倍等の機能追加
    // TODO:input内の値がなくなった場合0にする
    <div className="l-inner">
      <h1 className="c-ttl">電卓</h1>
      <div className="p-calculator">
        <div className="p-calculator__data">
          <input
            className="p-calculator__data-num"
            type="text"
            value={input}
            readOnly
          />
          <button className="p-calculator__data-back" onClick={handleBackspace}>
            &#10005;
          </button>
        </div>
        <div className="p-calculator__cont">
          <div className="p-calculator__operate">
            {/* componentでリファクタリング */}
            {["1", "2", "3"].map((number) => {
              return (
                <button
                  className="p-calculator__operate-btn"
                  key={number}
                  onClick={handleNumberClick}
                >
                  {number}
                </button>
              );
            })}
            <button
              className="p-calculator__operate-btn p-calculator__operate-btn--orange"
              onClick={handleOperatorClick}
            >
              +
            </button>
            {["4", "5", "6"].map((number) => {
              return (
                <button
                  className="p-calculator__operate-btn"
                  key={number}
                  onClick={handleNumberClick}
                >
                  {number}
                </button>
              );
            })}
            <button
              className="p-calculator__operate-btn p-calculator__operate-btn--orange"
              onClick={handleOperatorClick}
            >
              -
            </button>
            {["7", "8", "9"].map((number) => {
              return (
                <button
                  className="p-calculator__operate-btn"
                  key={number}
                  onClick={handleNumberClick}
                >
                  {number}
                </button>
              );
            })}
            <button
              className="p-calculator__operate-btn p-calculator__operate-btn--orange"
              onClick={handleOperatorClick}
            >
              *
            </button>
            <button
              className="p-calculator__operate-btn"
              onClick={handleNumberClick}
            >
              0
            </button>
            <button className="p-calculator__operate-btn" onClick={handleClear}>
              C
            </button>
            <button
              className="p-calculator__operate-btn"
              onClick={handleDecimalClick}
            >
              .
            </button>
            <button
              className="p-calculator__operate-btn p-calculator__operate-btn--orange"
              onClick={handleCalculate}
            >
              =
            </button>
          </div>
        </div>
        {/* p-calculator__cont */}
        {/* <div>
          <p>結果: {result}</p>
        </div> */}
      </div>
    </div>
  );
}

export default App;
