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
  if(data&& Object.keys(userInfo).length==0) setUserInfo(await getData(data.name))
  // console.log(userInfo)
  return (
   <>
    {Object.keys(userInfo).length==0 ? (
      <>no name</>
    ): (
      <>
        <div>
          <h1>{userInfo.login}</h1>
        </div>
      </>
    )}
   </>  
  )
}