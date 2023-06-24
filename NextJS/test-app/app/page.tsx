"use client"
import { useRecoilState, useRecoilValue } from 'recoil'
import { testState } from '@/components/stroe'
import 'dotenv/config'

export default function Home() {
  const [text,setText] = useRecoilState(testState)
  // const test = process.env.GITHUB_TOKEN
  return (
    <main>
      <h1>{text.name}</h1>
    </main>
  )
}
