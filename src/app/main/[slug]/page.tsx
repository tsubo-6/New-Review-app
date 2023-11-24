"use client"
import React,{ useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Header from '@/app/components/Header/Header';
import NavigationBar from '@/app/components/NavigationBar/NavigationBar';
import AllPostReview from '@/app/pages/allPostReview/page';
import PostReview from '@/app/pages/postReview/page';

interface TabPageProps {
  slug: string;
}

const Main=({params}: { params: TabPageProps })=>{
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'authenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
		return <div>Loading...</div>;
	}

  let contents:React.JSX.Element = <AllPostReview/>;

  switch (params.slug){
    case "post":
      return <PostReview/>
    case "all":
      contents = <AllPostReview/>
  }

  return (
    <>
      <Header/>
			<NavigationBar/>

      {contents}
    </>
  )
}

export default Main
