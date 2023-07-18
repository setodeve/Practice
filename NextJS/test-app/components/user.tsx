import { userInfoState,userRepoState,userSessionState } from '@/components/stroe'
import { useRecoilState } from 'recoil'

async function getData(name:string){
  return await fetch("https://api.github.com/users/"+`${name}`)
              .then((res) => res.json())
              .then((data) => {
                return data
              })
}

export default async function User(data:any){
  const [userInfo,setUserInfo] = useRecoilState(userInfoState)
  const [userRepo,setUserRepo] = useRecoilState(userRepoState)

  if(data&& Object.keys(userRepo).length==0&& Object.keys(userInfo).length==0) setUserRepo(await getData(`${data.name}`+"/repos"))
  if(data&& Object.keys(userInfo).length==0) setUserInfo(await getData(data.name))
  console.log(userRepo)

  return (
   <>
    {Object.keys(userInfo).length==0 ? (
      <>no name</>
    ): (
      <>
        <div>
          <h1>{userInfo.login}</h1>
        </div>
        {
          Object.keys(userRepo).length==0 ? (
            <>
              <h1>no repository</h1>
            </>
          ):(
            <>
              <h1>some repositories</h1>
            </>
          )}
      </>
    )}
   </>  
  )
}