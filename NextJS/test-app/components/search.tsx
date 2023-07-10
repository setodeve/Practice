import { useRecoilState } from 'recoil'
import { searchresultState } from '@/components/stroe'
import { FormEvent } from 'react'
import 'dotenv/config'

export default function Search(){
  const [searchresult,setSearchresult] = useRecoilState(searchresultState)
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const res = await fetch("https://api.github.com/search/repositories?q="+`${event.target.word.value}`,{
      method: 'GET',
      headers:{
        "Accept": "application/vnd.github+json",
        "Authorization": "Bearer "+`${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    const repo = await res.json()
    setSearchresult(repo.items)
  }
  return (
    <form className='p-2' onSubmit={handleSubmit}>
      <input type="text" id="word" name="word" required />
      <button className='p-1 ext-sm font-semibold leading-6' type="submit">Search</button>
    </form>
  )
}

