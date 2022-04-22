import React from "react";

export const InputTodo = (props) => {
  // まずはpropsの中身を取り出して使いやすいようにする 分割代入する
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input_area">
      {/* value={todoText}}このままだと常に空文字が表示されてしまうのでれてしまうので何も入力できないでいる */}
      {/* なので何かinputで変更があったらstateも変更するという処理を入れないといけない */}
      <input
        // コンポーネントを行うので関数をpropsとして定義しないといけない
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
