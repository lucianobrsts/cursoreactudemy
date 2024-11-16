import { useReducer, createContext } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  //switch
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispach] = useReducer(titleColorReducer, { color: "purple" });

  console.log("Title color context: ", state);

  return (
    <TitleColorContext.Provider value={{ ...state }}>
      {children}
    </TitleColorContext.Provider>
  );
};
