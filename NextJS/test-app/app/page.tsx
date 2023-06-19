"use client"
import { useRecoilState, useRecoilValue } from 'recoil'
import { testState } from '@/components/stroe'

export default function Home() {
  const [text,setText] = useRecoilState(testState)
  return (
    <main>
      <h1>{text.name}</h1>
    </main>
  )
}
