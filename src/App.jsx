import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // 入力時のstate 変数名はtodoTextでそれを変更するための関数はsetTodoText
  const [todoText, setTodoText] = useState();
  // 未完了の関数
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  //　完了の関数
  const [completeTodos, setCompleteTodos] = useState([]);

  // onChangeに設定する関数 引数を取るのでeとしておく
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  // クリック時の関数
  const onClickAdd = () => {
    // 現状からの状態でも入力できてしまうので下記を追加する
    if (todoText === "") return;
    // 追加ボタンを押したら未完了TODOに反映させる処理
    // 配列の結合をする　　これで現在の配列と全く同じ配列をコピーし、その後ろに入力した値をセットする
    const newTodos = [...incompleteTodos, todoText];
    // incompleteTodosを更新する関数はあるので、
    setIncompleteTodos(newTodos);
    // 入力したら空にする処理
    setTodoText("");
    // alert(todoText);
  };

  //　削除ボタンの関数
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // spliceは何番目の値を何個削除するのかを指定することができます
    newTodos.splice(index, 1);
    // 最後に未完了のTODOを更新してあげる
    setIncompleteTodos(newTodos);
  };

  // 完了ボタンの関数
  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // 未完了の関数を実行する
    setIncompleteTodos(newTodos);
    // 完了の関数を実行する
    setCompleteTodos(newCompleteTodos);
  };

  //　戻す機能の実装
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    // 未完了TODOの中に完了TODOで戻すボタンを押した配列を移動する
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
