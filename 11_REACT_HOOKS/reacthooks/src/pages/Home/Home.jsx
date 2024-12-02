import styles from "./Home.module.css"
import React from 'react'

import HookUseState from "../../components/HookUseState"
import HookUseReducer from "../../components/HookUseReducer"

const Home = () => {
  return (
    <div className={styles.container}>
      <HookUseState />
      <HookUseReducer />
    </div>
  )
}

export default Home