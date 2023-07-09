import Link from 'next/link';
import { useRecoilState } from 'recoil'
import { searchwordState } from '@/components/stroe'
export default function Pagination({ totalCount }:number){
  const [searchword,setSearchword] = useRecoilState(searchwordState)
  const PER_PAGE = 5;

  const range = (start :number, end :number) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number :number, index :number) => (
        <li key={index}>
          <Link href={`/blog/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  );
};