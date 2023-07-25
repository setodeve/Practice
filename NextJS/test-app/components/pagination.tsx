// import Link from 'next/link';
// import { useRecoilState } from 'recoil'
// import { searchresultState } from '@/components/stroe'
// export default function Pagination({ totalCount }:number){
//   const [searchresult,setSearchresult] = useRecoilState(searchresultState)
//   const PER_PAGE = 5;

//   const range = (start :number, end :number) =>
//         [...Array(end - start + 1)].map((_, i) => start + i)

//   return (
//     <ul>
//       {range(1, Math.ceil(totalCount / PER_PAGE)).map((number :number, index :number) => (
//         <li key={index}>
//           <Link href={`/blog/page/${number}`}>{number}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10
 
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
 console.log(pages)
 
  return (
    <div>
      <div>Pagination</div>
    </div>
  );
 };
 
 export default Pagination;