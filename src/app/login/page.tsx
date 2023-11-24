"use client";
import Image from "next/image";
// import localImage from "./../../../public/background.jpg";

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import type { NextPage } from "next";
import { useSession, signIn } from 'next-auth/react';
import styles from "./login.module.css"

const Login: NextPage=() => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // ログインが成功したら、sessionが存在しstatusが"authenticated"になります
    if (status === 'authenticated') {
      // ログイン成功時の処理をここに追加
      // 例: ログイン後にメイン画面にリダイレクト
      router.push('/main/all');
    }
  }, [status, router]);

  if (status === 'loading') {
		return <div>Loading...</div>;
	}

    return (
      <div className={styles.container}>
        <div className={styles.loginBlock}>
          <h1>Welcome</h1>

          <button onClick={() => signIn('google', {}, { prompt: 'login' })}>
            Login with Google
          </button>

          <button>
            Login with X
          </button>
        </div>

        <div className={styles.background}>

        </div>
      </div>
    )
}

export default Login
