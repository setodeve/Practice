import { useRecoilState, useRecoilValue } from 'recoil'
import { searchwordState } from '@/components/stroe'

export default function Search(){
  const [searchword,setSearchword] = useRecoilState(searchwordState)
  return (
    <form action="/api/form" method="post">
      <label htmlFor="word">word</label>
      <input type="text" id="word" name="word"  required />
      <button type="submit">Submit</button>
    </form>
  )
}

