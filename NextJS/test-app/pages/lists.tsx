// import type { InferGetStaticPropsType, GetStaticProps } from 'next'
// import 'dotenv/config'
import Search from '@/components/search'
import List  from '@/components/list'
// type Repo = {
//   name: string
//   stargazers_count: number
// }
 
// export const getStaticProps: GetStaticProps<{
//   repo: Repo
// }> = async () => {
//   const res = await fetch('https://api.github.com/search/repositories?q=anycloud',{
//     method: 'GET',
//     headers:{
//       "Accept": "application/vnd.github+json",
//       "Authorization": "Bearer "+`${process.env.GITHUB_TOKEN}`,
//       'X-GitHub-Api-Version': '2022-11-28'
//     }
//   })
//   const repo = await res.json()
//   return { props: { repo } }
// }
 
export default function Lists(){
  return (
    <>
      <Search/>
      <List/>
    </>
  );
}
