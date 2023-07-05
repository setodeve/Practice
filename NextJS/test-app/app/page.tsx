"use client"
import Search from '@/components/search'
import List  from '@/components/list'
import Head from '@/components/header';
export default function Home(){
  return (
    <>
      <Head/>
      <Search/>
      <List/>
    </>
  );
}