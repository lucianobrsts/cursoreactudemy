import styles from "./About.module.css";
import React from "react";

// useContext
import { useContext } from "react";
import { SomeContext } from "../../components/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <div className={styles.container}>
      <h2>About</h2>
      <p>Valor do contexto: {contextValue}</p>
    </div>
  );
};

export default About;
