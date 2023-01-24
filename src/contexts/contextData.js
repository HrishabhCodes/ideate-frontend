import React, { createContext, useState } from "react";

const userStored = localStorage.getItem("userId");

const ContextData = createContext({
  userId: userStored || "",
  setUserId: () => {},
});

export const ContextDataProvider = (props) => {
  const [userId, setUserId] = useState(userStored || "");

  return (
    <ContextData.Provider
      value={{
        userId,
        setUserId,
      }}
    >
      {props.children}
    </ContextData.Provider>
  );
};
export default ContextData;
