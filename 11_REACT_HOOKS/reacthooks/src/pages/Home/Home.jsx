import styles from "./Home.module.css"
import React from 'react'

import HookUseState from "../../components/HookUseState"

const Home = () => {
  return (
    <div className={styles.container}>
      <HookUseState />
    </div>
  )
}

export default Home