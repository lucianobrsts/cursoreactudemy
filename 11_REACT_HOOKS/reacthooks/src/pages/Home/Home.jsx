import styles from "./Home.module.css";
import React from "react";

import HookUseState from "../../components/HookUseState";
import HookUseReducer from "../../components/HookUseReducer";
import { HookUseEffect } from "../../components/HookUseEffect";

// useContext
import { useContext } from "react";
import { SomeContext } from "../../components/HookUseContext";
import HookUseRef from "../../components/HookUseRef";

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
    </div>
  );
};

export default Home;
