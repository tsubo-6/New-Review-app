import React, { useEffect }  from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import styles from "./allPostReview.module.css"

function AllPostReview() {

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'authenticated') {
      router.push('/login');
    }
  }, [status, router]);

  return (
    <>
      {/* ログインユーザの投稿数が0の時 */}
      <div className={styles.mainBlock}>
        <h1>No Posts yet</h1>
        <h3>Sometimes I crave curry...</h3>
      </div>
    </>
  )
}

export default AllPostReview
