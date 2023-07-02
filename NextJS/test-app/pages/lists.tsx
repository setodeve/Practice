import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import 'dotenv/config'

type Repo = {
  name: string
  stargazers_count: number
}
 
export const getStaticProps: GetStaticProps<{
  repo: Repo
}> = async () => {
  const res = await fetch('https://api.github.com/search/code?q=anycloud',{
    method: 'GET',
    headers:{
      "Accept": "application/vnd.github+json",
      "Authorization": "Bearer "+`${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  const repo = await res.json()
  return { props: { repo } }
}
 
export default function List({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log(repo)
  return <div>index</div>
}