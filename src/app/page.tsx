"use client";

import styles from './page.module.css'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'authenticated') {
      router.push("/login");
    }
  }, [status, router]);

  return (
    <main className={styles.main}>
      <div>Welcome</div>
    </main>
  )
}
