"use client"
import Head from '@/components/header';
import User from '@/components/user';
import { useParams,useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()
  const params = searchParams.get('name')
  // console.log(searchParams)
  return (
    <>
      <Head/>
      <User name={params}/>
    </>
  )
}