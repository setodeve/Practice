import { searchwordState } from '@/components/stroe'
import { useRecoilValue } from 'recoil'

export default function List(){
  const searchword = useRecoilValue(searchwordState)
  return(
    <>
      <h1>list</h1>
      {searchword.length < 0 || searchword==undefined ? (
        <h1>No result</h1>
      ):(
        <ul>
          {searchword.map(({id,name}) => (
            <li key={id}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}