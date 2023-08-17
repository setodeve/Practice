import { searchresultState } from '@/components/stroe'
import { useRecoilValue } from 'recoil'

export default function List(){
  const searchresult = useRecoilValue(searchresultState)
  
  return(
    <>
      <div className='p-2'>
        {searchresult.length === 0 ? (
            <h1 className='ext-sm font-semibold leading-6'>No result</h1>
        ):(
          <div>
            <h1>Search results</h1>
            <ul>
              {searchresult.map(({id,name}) => (
                <li className='ext-sm font-semibold leading-6' key={id}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}