import React, { createContext, useState } from "react";

const user = localStorage.getItem("userId");

const ContextData = createContext({
  userId: user || "",
  setUserId: () => {},
  isAuth: user ? true : false,
  setIsAuth: () => {},
});

export const ContextDataProvider = (props) => {
  const [userId, setUserId] = useState("");
  const [isAuth, setIsAuth] = useState();

  return (
    <ContextData.Provider
      value={{
        userId,
        setUserId,
        isAuth,
        setIsAuth,
      }}
    >
      {props.children}
    </ContextData.Provider>
  );
};
export default ContextData;
