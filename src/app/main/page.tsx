'use client';
import type { NextPage } from "next";
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Header from "@/components/Header/Header";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import styles from "./main.module.css";

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
			<>
				<Header/>
				<NavigationBar/>
				{/* <p>セッションの期限：{session?.expires}</p> */}
				{/* <p>ようこそ、{session.user?.name}さん</p> */}
				<div className={styles.mainBlock}>
					<h1>No Posts yet</h1>
					<h3>Sometimes I crave curry...</h3>
				</div>
			</>
		)
	}
}

export default Main
