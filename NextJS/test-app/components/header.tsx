// import { userInfoState, userRepoState, currentPageState } from '@/components/stroe'
// import { useRecoilState } from 'recoil'
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'
import Link from 'next/link'

export default function Head() {
  // const [userInfo,setUserInfo] = useRecoilState(userInfoState)
  // const [userRepo,setUserRepo] = useRecoilState(userRepoState)
  // const [userSession,setUserSession] = useRecoilState(userSessionState)
  const { data: session, status } = useSession();
  const loading = status === "loading";

  // useEffect(() => {
    // if(session&&Object.keys(userInfo).length==0) {
    //   getData()
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUserInfo(data)
    //   })
    // }
      // if(session) setUserSession(session)
      // if(userSession.name!==undefined){
      //   getUserData(`users/${userSession.user.name}`)
      //   .then(data => setUserInfo(data.json()))
      // }
        // setUserRepo( await getUserData(`users/${session.user.name}/repos`))
        // if(session && Object.keys(userInfo).length==0){
        //   fetch("https://api.github.com/users/"+`${session.user.name}`,{
        //     method: 'GET',
        //     headers:{
        //       "Accept": "application/vnd.github+json",
        //       "Authorization": "Bearer "+`${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        //       'X-GitHub-Api-Version': '2022-11-28'
        //     }
        //     })
        //     .then((res) => res.json())
        //     .then((data) => {
        //       setUserInfo(data)
        //     })
        // }else{

        // }
    //     if(session && Object.keys(userRepo).length==0){
    //       fetch("https://api.github.com/users/"+`${session.user.name}`+"/repos",{
    //         method: 'GET',
    //         headers:{
    //           "Accept": "application/vnd.github+json",
    //           "Authorization": "Bearer "+`${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    //           'X-GitHub-Api-Version': '2022-11-28'
    //         }
    //         })
    //         .then((res) => res.json())
    //         .then((data) => {
    //           setUserRepo(data)
    //         })
    //     }
    // // console.log(userSession)
    // console.log(userInfo)
    // console.log(userRepo)
  // }, [session])
  // console.log(session)
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
              <Link
                href={{
                  pathname: '/user',
                  query: { name: session.user.name },
                }}
              >
                  <div>
                    <Image
                      src={session.user.image}
                      alt="icon"
                      width= {30}
                      height= {30}
                      className="h-8 w-auto"
                    />
                  </div>
              </Link>
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