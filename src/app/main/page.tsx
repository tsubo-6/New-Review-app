'use client';
import type { NextPage } from "next";
import React, { useEffect } from 'react'
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Main: NextPage=() => {
	const router = useRouter();
  const { data: session, status } = useSession();

	// 未認証の場合はログインページにリダイレクト
  useEffect(() => {
    if (status !== 'authenticated') {
      router.push("/login");
    }
  }, [status, router]);

	if(status === 'authenticated'){
		return(
			<div>
				<p>セッションの期限：{session?.expires}</p>
				<p>ようこそ、{session.user?.name}さん</p>

				<div>
					<button onClick={() => signOut()}>LogOut</button>
				</div>
			</div>
		)
	}
}

export default Main
