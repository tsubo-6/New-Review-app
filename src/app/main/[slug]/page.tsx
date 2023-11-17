"use client"

import React from 'react'
import Header from '@/components/Header/Header';
import NavigationBar from '@/components/NavigationBar/NavigationBar';

interface TabPageProps {
  slug: string;
}

const page=({params}: { params: TabPageProps })=>{

  return (
    <>
      <Header/>
			<NavigationBar/>

      <h1>{params.slug} page</h1>
    </>
  )
}

export default page
