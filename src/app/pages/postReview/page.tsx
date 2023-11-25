import React, { useEffect,useState }  from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import styles from "./postReview.module.css";
import ReactStarsRating from 'react-awesome-stars-rating';


function PostReview() {
  const { data: session, status } = useSession();
  const router = useRouter();

    const [value, setValue] = useState<number>(3);

  const onChange = (value:number) => {
    setValue(value);
    console.log(`React Stars Rating value is ${value}`);
  };

  const onChangeSpicy = (value:number) => {
    setValue(value);
    console.log(`React Stars Rating value is ${value}`);
  };

  useEffect(() => {
    if (status !== 'authenticated') {
      router.push('/login');
    }
  }, [status, router]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formTop}>
          <h1>Post Review </h1>
          <h3>Fill out the form below</h3>
        </div>

        <form >
          <div className={styles.review}>
            <label>Curry restaurant name</label>
            <input type="text"/>
            <label>Location</label>
            <input placeholder="e.g. 大阪府"></input>
            <label>Rating</label>
            <ReactStarsRating onChange={onChange} value={value}/>
            <label>Spicy</label>
            <ReactStarsRating onChangeSpicy={onChange} value={value}/>
            <label>Picture</label>
            <input type="file"/>
            <label>Review</label>
            <textarea/>
          </div>
        </form>

        <div className={styles.submitButton}>
          <button onClick={() => router.back()}>back</button>
          <button>Submit</button>
        </div>

      </div>
    </>
  )
}

export default PostReview
