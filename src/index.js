import "./styles.css";
/**
 * 追加ボタンをクリックしたとき
 */
const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncomplist(inputText);
};

/**
 * 未完了リストから指定の要素を削除
 */
const deleteFromincompleteList = (target) => {
  document.getElementById("uncomp_list").removeChild(target);
};

/**
 * 未完了リストに追加する関数
 */
const createIncomplist = (text) => {
  //div生成
  const div = document.createElement("div");
  console.log(div);
  div.className = "list.row";

  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完成リストから削除
    deleteFromincompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //todo内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backbutton.parentNode;
      document.getElementById("incomp_list").removeChild(deleteTarget);

      //テキスト取得
      const text = backbutton.parentNode.firstElementChild.innerText;
      createIncomplist(text);
    });

    //divの子要素に各子要素を設定
    div.appendChild(li);
    div.appendChild(backbutton);

    //完了リストに追加
    document.getElementById("incomp_list").appendChild(addTarget);
  });

  //button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完成リストから削除
    deleteFromincompleteList(deleteButton.parentNode);
  });

  //divの子要素に各子要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("uncomp_list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
