import styles from "./Home.module.css";
import React from "react";

// useContext
import { useContext } from "react";
import { SomeContext } from "../../components/HookUseContext";

//Hooks
import { HookUseEffect } from "../../components/HookUseEffect";
import HookUseState from "../../components/HookUseState";
import HookUseReducer from "../../components/HookUseReducer";
import HookUseRef from "../../components/HookUseRef";
import HookUseCallback from "../../components/HookUseCallback";
import HookUseMemo from "../../components/HookUseMemo";
import HookUseLayoutEffect from "../../components/HookUseLayoutEffect";

const Home = () => {
  const {contextValue} = useContext(SomeContext)
  return (
    <div className={styles.container}>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />

      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />

      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
    </div>
  );
};

export default Home;
