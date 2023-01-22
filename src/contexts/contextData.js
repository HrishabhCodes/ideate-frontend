import React, { useState } from "react";

const ContextData = React.createContext({
  userId: "",
  setUserId: () => {},
});

export const ContextDataProvider = (props) => {
  const [userId, setUserId] = useState("");

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
