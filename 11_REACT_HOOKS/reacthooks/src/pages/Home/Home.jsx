import styles from "./Home.module.css"
import React from 'react'

import HookUseState from "../../components/HookUseState"
import HookUseReducer from "../../components/HookUseReducer"
import { HookUseEffect } from "../../components/HookUseEffect"

const Home = () => {
  return (
    <div className={styles.container}>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
    </div>
  )
}

export default Home