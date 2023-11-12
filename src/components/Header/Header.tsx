import React from 'react'
import styles from "./header.module.css"

function Header() {
  return (
    <>
      {/* 何かしらのアイコンを追加 */}
      <h1 className={styles.title}>Curry Review Application</h1>
      <h3 className={styles.subtitle}>No curry No Life...</h3>
    </>
  )
}

export default Header
