"use client";

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import type { NextPage } from "next";
import { useSession, signIn } from 'next-auth/react';

const Login: NextPage=() => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // ログインが成功したら、sessionが存在しstatusが"authenticated"になります
    if (status === 'authenticated') {
      // ログイン成功時の処理をここに追加
      // 例: ログイン後にメイン画面にリダイレクト
      router.push('/main');
    }
  }, [status, router]);

  if (status === 'loading') {
		return <div>Loading...</div>;
	}

    return (
      <div>
        <h1>Welcome</h1>

        <button onClick={() => signIn('google', {}, { prompt: 'login' })}>
          Googleでログイン
        </button>
      </div>
    )
}

export default Login
