import React from 'react'
import styles from "./NavigationBar.module.css"
import BorderAllIcon from '@mui/icons-material/BorderAll';
import CreateIcon from '@mui/icons-material/Create';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RateReviewIcon from '@mui/icons-material/RateReview';

function NavigationBar() {
  return (
    <>
      <div className={styles.navComponents}>
        <h4><BorderAllIcon className={styles.layout}/> all</h4>
        <h4><RateReviewIcon className={styles.layout}/> my review</h4>
        <h4><FavoriteBorderIcon className={styles.layout}/> my favorites</h4>
        <h4><CreateIcon className={styles.layout}/> post</h4>
      </div>
    </>
  )
}

export default NavigationBar
