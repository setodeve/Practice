import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import { userInfoState,userRepoState,userSessionState } from '@/components/stroe'
import { getUserData } from './lib'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

type Repo = {
  name: string
  stargazers_count: number
}

export const getStaticProps: GetStaticProps<{
  repo: Repo
}> = async () => {
  const res = await fetch("https://api.github.com/users/setokei",{
    method: 'GET',
    headers:{
      "Accept": "application/vnd.github+json",
      "Authorization": "Bearer "+`${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }})
    // console.log(res)
    const repo = await res.json()
  // console.log(repo)
  return { props: { repo } }
}

export default function Head({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>){
  const [userInfo,setUserInfo] = useRecoilState(userInfoState)
  const [userRepo,setUserRepo] = useRecoilState(userRepoState)
  const [userSession,setUserSession] = useRecoilState(userSessionState)
  const { data: session, status } = useSession();
  const loading = status === "loading";
  // console.log(repo)
  // console.log("pass")
  useEffect(() => {
      // if(session) setUserSession(session)
      // if(userSession.name!==undefined){
      //   getUserData(`users/${userSession.user.name}`)
      //   .then(data => setUserInfo(data.json()))
      // }
        // setUserRepo( await getUserData(`users/${session.user.name}/repos`))
        if(session && Object.keys(userSession).length==0){
          fetch("https://api.github.com/users/"+`${session.user.name}`,{
            method: 'GET',
            headers:{
              "Accept": "application/vnd.github+json",
              "Authorization": "Bearer "+`${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
              'X-GitHub-Api-Version': '2022-11-28'
            }
            })
            .then((res) => res.json())
            .then((data) => {
              setUserInfo(data)
            })
        }
    // console.log(userSession)
    console.log(userInfo)
  }, [session])
  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {!session && (
          <>
            {loading ? (
              <>Loading ...</>
            ) : (
              <>
                <div className="ext-sm font-semibold leading-6">Not signed in</div> <br />
                <button 
                  onClick={() => signIn()}
                  className="ext-sm font-semibold leading-6"
                >Sign in</button>
              </>
            )}
          </>
        )}
        {session && (
          <>
            <div className="flex">
              <span className="m-1.5 ext-sm font-semibold leading-6">{session.user.name}</span>
              <Image
                src={session.user.image}
                alt="icon"
                width= {30}
                height= {30}
                className="h-8 w-auto"
              />
            </div>
            <button 
              onClick={() => signOut()} 
              className="ext-sm font-semibold leading-6"
            >Sign out</button>
          </>
        )}
      </nav>
    </header>
  );
}