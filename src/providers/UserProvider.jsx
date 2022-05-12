import React, { createContext, useState } from "react";

// コンテキストの宣言
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null);
  return (
    // コンテキストの中身を返す
    // オブジェクトで渡した値がその配下のコンポーネントで使えるようになる
    // setUserInfoも渡すことで更新処理をできるようにする
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {/* どんな要素でも格納できるようにchildrenを設定 */}
      {children}
    </UserContext.Provider>
  );
};
