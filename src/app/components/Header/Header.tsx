import React from 'react'
import styles from "./header.module.css"
import type { NextPage } from "next";
import { useSession,signOut } from 'next-auth/react';

const Header: NextPage=()=> {
  const { data: session, status } = useSession();

  return (
    <>
      {/* 何かしらのアイコンを追加 */}
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Curry Review Application</h1>
          <h3 className={styles.subtitle}>No curry No Life...</h3>
        </div>
        <div>
          <button className={styles.logoutButton} onClick={() => signOut()}>LogOut</button>
        </div>
      </div>
    </>
  )
}

export default Header
