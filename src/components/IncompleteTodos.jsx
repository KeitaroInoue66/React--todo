import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete_area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* mapの中の引数には配列の中の要素が順番に入ってくるのでtodoとしておく */}
        {/* map関数は第二引数に要素の順番が入ってくるので */}
        {incompleteTodos.map((todo, index) => {
          return (
            //　ループ処理では変更の差分のみDOMに反映しているので何個目の要素かを正確に正確に示しておく目印となるものが必要なため
            <div key={todo} className="list_row">
              {/* <li>の中身が配列の中が入ってくるので引数であるtodoを入れる */}
              <li>{todo}</li>
              <button
                onClick={() => {
                  onClickComplete(index);
                }}
              >
                完了
              </button>
              {/* 第二引数であるindexをそのまま書いてしまうと関数がその時点で実行されてしまうので削除ボタンを押したら実行して欲しいので */}
              <button
                onClick={() => {
                  onClickDelete(index);
                }}
              >
                削除
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
