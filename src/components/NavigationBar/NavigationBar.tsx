import React from 'react'
import styles from "./NavigationBar.module.css"
import BorderAllIcon from '@mui/icons-material/BorderAll';
import CreateIcon from '@mui/icons-material/Create';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { useRouter } from 'next/navigation';

function NavigationBar() {
  const router = useRouter();

  const handleClick = (slug:string) => {
    // タブがクリックされたら、ダイナミックリンクを生成してページに遷移
    router.push(`/main/${slug}`);
  };

  return (
    <>
      <div className={styles.navComponents}>
        <h4 onClick={() => handleClick('all')}><BorderAllIcon className={styles.layout}/> all</h4>
        <h4 onClick={() => handleClick('my')}><RateReviewIcon className={styles.layout}/> my review</h4>
        <h4 onClick={() => handleClick('favorite')}><FavoriteBorderIcon className={styles.layout}/> my favorites</h4>
        <h4 onClick={() => handleClick('post')}><CreateIcon className={styles.layout}/> post</h4>
      </div>
    </>
  )
}

export default NavigationBar
